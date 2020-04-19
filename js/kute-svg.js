/* KUTE.js - The Light Tweening Engine
 * package - SVG Plugin
 * desc - draw SVG strokes, morph SVG and SVG transforms
 * by dnp_theme
 * Licensed under MIT-License
 */

(function (root,factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kute.js'], factory);
  } else if(typeof module == 'object' && typeof require == 'function') {
    module.exports = factory(require('kute.js'));
  } else if ( typeof root.KUTE !== 'undefined' ) {
    factory(root.KUTE);
  } else {
    throw new Error("SVG Plugin require KUTE.js.");
  }
}(this, function(KUTE) {
  'use strict'; 

  var g = typeof global !== 'undefined' ? global : window, K = KUTE, // connect plugin to KUTE object and global
    DOM = K.dom, parseProperty = K.parseProperty, prepareStart = K.prepareStart, getCurrentStyle = K.getCurrentStyle,
    trueColor = K.truC, trueDimension = K.truD, crossCheck = K.crossCheck, 
    number = g.Interpolate.number, unit = g.Interpolate.unit, color = g.Interpolate.color, // interpolate functions
    _isIE = navigator && (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) !== null) ? parseFloat( RegExp.$1 ) : false;
  
  // here we go with the plugin
  var pathReg = /(m[^(h|v|l)]*|[vhl][^(v|h|l|z)]*)/gmi, ns = 'http://www.w3.org/2000/svg',
    coords = g.Interpolate.coords = function(a,b,l,v) { // function(array1, array2, length, progress) for SVG morph
      var points =[];
      for(var i=0;i<l;i++) { // for each point
        points[i] = [];
        for(var j=0;j<2;j++) { // each point coordinate
          points[i].push( (a[i][j]+(b[i][j]-a[i][j])*v) >> 0 );
        }
      }
      return points;
    };

  if (_isIE&&_isIE<9) {return;} // return if SVG API is not supported


  // SVG MORPH
  var getSegments = function(s,e,r){ // getSegments returns an array of points based on a sample size morphPrecision
      var s1 = [], e1 = [], le1 = s.getTotalLength(), le2 = e.getTotalLength(), ml = Math.max(le1,le2),
        d = r, ar = ml / r, j = 0, sl = ar*r; // sl = sample length

      while ( (j += r) < sl ) { // populate the points arrays based on morphPrecision as sample size
        s1.push( [s.getPointAtLength(j).x, s.getPointAtLength(j).y]);
        e1.push( [e.getPointAtLength(j).x, e.getPointAtLength(j).y]);
      }
      return [s1,e1];
    },
    getClosestPoint = function(p,t,s){ // getClosestPoint for polygon paths it returns a close point from the original path (length,pointAtLength,smallest); // intervalLength
      var x, y, a = [], l = s.length, dx, nx, pr;
      for (i=0; i<l; i++){
        x = Math.abs(s[i][0] - t.x);
        y = Math.abs(s[i][1] - t.y);
        a.push( Math.sqrt( x * x + y * y ) );
      }
      dx = a.indexOf(Math.min.apply(null,a));
      pr = !!s[dx-1] ? dx-1 : l-1;
      nx = !!s[dx+1] ? dx+1 : 0;
      return Math.abs(s[pr][0] - t.x) < p && Math.abs(s[pr][1] - t.y) < p ? s[pr]
      : Math.abs(s[nx][0] - t.x) < p && Math.abs(s[nx][1] - t.y) < p ? s[nx] 
      : Math.abs(s[dx][0] - t.x) < p && Math.abs(s[dx][1] - t.y) < p ? s[dx] 
      : [t.x,t.y];
    },
    pathToAbsolute = function(p) { // simple pathToAbsolute for polygons | this is still BETA / a work in progress
      var np = p.match(pathReg), wp = [], l = np.length, s, c, r, x = 0, y = 0;
      for (var i = 0; i<l; i++){
        np[i] = np[i]; c = np[i][0]; r = new RegExp(c+'[^\\d|\\-]*','i'); 
        np[i] = np[i].replace(/(^|[^,])\s*-/g, '$1,-').replace(/(\s+\,|\s|\,)/g,',').replace(r,'').split(',');
        np[i][0] = parseFloat(np[i][0]);
        np[i][1] = parseFloat(np[i][1]);
        if (i === 0) { x+=np[i][0]; y +=np[i][1]; }
        else {
          x = np[i-1][0]; 
          y = np[i-1][1]; 
          if (/l/i.test(c)) {
            np[i][0] = c === 'l' ? np[i][0] + x : np[i][0];
            np[i][1] = c === 'l' ? np[i][1] + y : np[i][1];  
          } else if (/h/i.test(c)) {
            np[i][0] = c === 'h' ? np[i][0] + x : np[i][0];
            np[i][1] = y;  
          } else if (/v/i.test(c)) {
            np[i][0] = x;
            np[i][1] = c === 'v' ? np[i][0] + y : np[i][0];
          }
        }
      }
      return np;
    },
    getOnePath = function(p){ return p.split(/z/i).shift() + 'z'; }, // getOnePath, first path only
    createPath = function (p){ // createPath
      var c = document.createElementNS(ns,'path'), d = typeof p === 'object' ? p.getAttribute('d') : p; 
      c.setAttribute('d',d); return c;
    },
    forcePath = function(p){ // forcePath for glyph elements
      if (p.tagName === 'glyph') { // perhaps we can also change other SVG tags in the future 
        var c = createPath(p); p.parentNode.appendChild(c); return c;
      } 
      return p;
    },
    clone = function(a) {
      var copy;
      if (a instanceof Array) {
        copy = [];
        for (var i = 0, len = a.length; i < len; i++) {
          copy[i] = clone(a[i]);
        }
        return copy;
      }
      return a;
    },
    getPath = function(e){ // get path d attribute or create a path from string value
      var p = {}, el = typeof e === 'object' ? e : /^\.|^\#/.test(e) ? document.querySelector(e) : null;
      if ( el && /path|glyph/.test(el.tagName) ) {
        p.e = forcePath(el);
        p.o = el.getAttribute('d');

      } else if (!el && /[a-z][^a-z]*/ig.test(e)) { // maybe it's a string path already
        p.e = createPath(e.trim());
        p.o = e;
      }
      return p;
    },
    computePathCross = function(s,e){ // pathCross
      var s1, e1, pointsArray, largerPathLength, smallerPath, largerPath, simulatedSmallerPath, nsm = [], sml, cl = [], len, tl, cs;

      if (!this._isPolygon) {
        s = createPath(s); e = createPath(e);  
        pointsArray = getSegments(s,e,this.options.morphPrecision); 
        s1 = pointsArray[0]; e1 = pointsArray[1]; largerPathLength = e1.length;
      } else {
        s = pathToAbsolute(s); e = pathToAbsolute(e);

        if ( s.length !== e.length ){
          largerPathLength = Math.max(s.length,e.length);
          if ( largerPathLength === e.length) { smallerPath = s; largerPath = e; } else { smallerPath = e; largerPath = s; }
          sml = smallerPath.length;

          simulatedSmallerPath = createPath('M'+smallerPath.join('L')+'z'); len = simulatedSmallerPath.getTotalLength() / largerPathLength;
          for (var i=0; i<largerPathLength; i++){
            tl = simulatedSmallerPath.getPointAtLength(len*i);
            cs = getClosestPoint(len,tl,smallerPath);
            nsm.push( [ cs[0], cs[1] ] );
          }

          if (largerPathLength === e.length) { e1 = largerPath; s1 = nsm; } else { s1 = largerPath; e1 = nsm; }
        } else {
          s1 = s; e1 = e;
        }
      }

      // reverse arrays
      if (this.options.reverseFirstPath) { s1.reverse(); }
      if (this.options.reverseSecondPath) { e1.reverse(); }
      
      // shift second array to for smallest tween distance
      if (this.options.morphIndex) {
        var e11 = e1.splice(this.options.morphIndex,largerPathLength-this.options.morphIndex);
        e1 = e11.concat(e1);
      }

      s = e = null;
      return [s1,e1]
    };
  
  // process path object and also register the render function
  parseProperty.path = function(o,v) {
    if (!('path' in DOM)) {
      DOM.path = function(l,p,a,b,v){
        l.setAttribute("d", v === 1 ? b.o : 'M' + coords( a['d'],b['d'],b['d'].length,v ) + 'Z' );   
      }
    }
    return getPath(v);
  };
    
  prepareStart.path = function(p){
    return this.element.getAttribute('d');
  };

  crossCheck.path = function() {
    var p1 = getOnePath(this.valuesStart.path.o), p2 = getOnePath(this.valuesEnd.path.o), paths;

    // path tween options
    this.options.morphPrecision = this.options && 'morphPrecision' in this.options ? parseInt(this.options.morphPrecision) : 15;
    this._isPolygon = !/[CSQTA]/i.test(p1) && !/[CSQTA]/i.test(p2); // check if both shapes are polygons

    // begin processing paths
    paths = computePathCross.apply(this,[p1,p2]);

    this.valuesStart.path.d = paths[0];
    this.valuesEnd.path.d = paths[1];
  };


  // SVG DRAW
  var percent = function(v,l){ return parseFloat(v) / 100 * l; }, // percent
    // SVG DRAW UTILITITES
    // http://stackoverflow.com/a/30376660
    getRectLength = function(el){ // returns the length of a Rect
      var w = el.getAttribute('width');
      var h = el.getAttribute('height');
      return (w*2)+(h*2);
    },
    getPolyLength = function(el){ // getPolygonLength / getPolylineLength - return the length of the Polygon / Polyline
      var points = el.getAttribute('points').split(' '), len = 0;
      if (points.length > 1) {
        var coord = function (p) {
          var c = p.split(',');
          if (c.length != 2) { return; } // return undefined
          if (isNaN(c[0]) || isNaN(c[1])) { return; }
          return [parseFloat(c[0]), parseFloat(c[1])];
        };

        var dist = function (c1, c2) {
          if (c1 != undefined && c2 != undefined) {
            return Math.sqrt(Math.pow((c2[0]-c1[0]), 2) + Math.pow((c2[1]-c1[1]), 2));
          }
          return 0;
        };

        if (points.length > 2) {
          for (var i=0; i<points.length-1; i++) {
            len += dist(coord(points[i]), coord(points[i+1]));
          }
        }
        len += dist(coord(points[0]), coord(points[points.length-1]));
      }
      return len;
    },
    getLineLength = function(el){ // return the length of the line
      var x1 = el.getAttribute('x1');
      var x2 = el.getAttribute('x2');
      var y1 = el.getAttribute('y1');
      var y2 = el.getAttribute('y2');
      return Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1),2));
    },
    getCircleLength = function(el){ // return the length of the circle
      var r = el.getAttribute('r');
      return 2 * Math.PI * r; 
    },
    getEllipseLength = function(el) { // returns the length of an ellipse
      var rx = el.getAttribute('rx'), ry = el.getAttribute('ry'),
          len = 2*rx, wid = 2*ry;
      return ((Math.sqrt(.5 * ((len * len) + (wid * wid)))) * (Math.PI * 2)) / 2;
    },
    getTotalLength = function(el){ // returns the result of any of the below functions
      if (/rect/.test(el.tagName)) {
        return getRectLength(el);
      } else if (/circle/.test(el.tagName)) {
        return getCircleLength(el);
      } else if (/ellipse/.test(el.tagName)) {
        return getEllipseLength(el);
      } else if (/polygon|polyline/.test(el.tagName)) {
        return getPolyLength(el);
      } else if (/line/.test(el.tagName)) {
        return getLineLength(el);
      }
    },
    getDraw = function(e,v){
      var l = /path|glyph/.test(e.tagName) ? e.getTotalLength() : getTotalLength(e), start, end, d, o;
      if ( v instanceof Object ) {
        return v;
      } else if (typeof v === 'string') { 
        v = v.split(/\,|\s/);
        start = /%/.test(v[0]) ? percent(v[0].trim(),l) : parseFloat(v[0]);
        end = /%/.test(v[1]) ? percent(v[1].trim(),l) : parseFloat(v[1]);
      } else if (typeof v === 'undefined') {
        o = parseFloat(getCurrentStyle(e,'stroke-dashoffset'));
        d = getCurrentStyle(e,'stroke-dasharray').split(/\,/);
        
        start = 0-o;
        end = parseFloat(d[0]) + start || l;
      }
      return { s: start, e: end, l: l } 
    };
  
  parseProperty.draw = function(a,o){ // register the draw property
    if (!('draw' in DOM)) {
      DOM.draw = function(l,p,a,b,v){
        var ll = a.l>>0, s = number(a.s,b.s,v)>>0, e = number(a.e,b.e,v)>>0, o = 0 - s;
        l.style.strokeDashoffset = o +'px';
        l.style.strokeDasharray = (e+o-0.5>>0) + 'px, ' + ll + 'px';
      }
    }
    return getDraw(this.element,o);
  }
  
  prepareStart.draw = function(){
    return getDraw(this.element);
  }


  // SVG Transform
  var parseTransform = function (a){ // helper function that turns transform value from string to object
      var d = a && /\)/.test(a) ? a.split(')') : 'none', j, c ={}, p;

      if (d instanceof Array) {
        for (j=0; j<d.length; j++){
          p = d[j].split('('); p[0] !== '' && (c[p[0].replace(/\s/,'')] = p[1] );
        }
      }
      return c;
    },
    translateSVG = g.Interpolate.translateSVG = function (s,e,a,b,v){ // translate(i+'(',')',a[i],b[i],v)
      return s + ( (a[1] === b[1] && b[1] === 0 ) ? ((number(a[0],b[0],v) * 10 >> 0)/10)
                                                 : (((number(a[0],b[0],v) * 10 >> 0)/10) + ' ' + ((number(a[1],b[1],v)) *10 >> 0)/10) ) + e;
    },
    rotateSVG = g.Interpolate.rotateSVG = function (s,e,a,b,v){
       return s + ( (number(a[0],b[0],v)*10 >> 0)/10 + ' ' + b[1] + ',' + b[2] ) + e;
    },
    scaleSVG = g.Interpolate.scaleSVG = function (s,e,a,b,v){ // scale would very much like to have 3 decimals
      return s + ( (number(a,b,v)*1000 >> 0)/1000 ) + e;
    },
    skewSVG = g.Interpolate.skewSVG = function (s,e,a,b,v){ // skew
      return s + ( (number(a,b,v)*10 >> 0)/10 ) + e;
    };

  parseProperty.svgTransform = function(p,v){
    // register the render function
    if (!('svgTransform' in DOM)) {
      
      DOM.svgTransform = function(l,p,a,b,v){
        l.setAttribute('transform', ('translate' in a ? translateSVG('translate(',')',a.translate,b.translate,v) : '')
                                   +('rotate' in a ? rotateSVG('rotate(',')',a.rotate,b.rotate,v) : '')
                                   +('scale' in a ? scaleSVG('scale(',')',a.scale,b.scale,v) : '')
                                   +('skewX' in a ? skewSVG('skewX(',')',a.skewX,b.skewX,v) : '')
                                   +('skewY' in a ? skewSVG('skewY(',')',a.skewY,b.skewY,v) : ''));
      }
    }

    // now prepare transform
    var svgTransformObject = {}, bb = this.element.getBBox(), cx = bb.x + bb.width/2, cy = bb.y + bb.height/2, r, cr, t, ct;

    for ( i in v ) { // populate the valuesStart and / or valuesEnd
      if (i === 'rotate'){
        r = v[i] instanceof Array ? v[i]
        : /\s/.test(v[i]) ? [v[i].split(' ')[0]*1, v[i].split(' ')[1].split(',')[0]*1, v[i].split(' ')[1].split(',')[1]*1] 
        : [v[i]*1,cx,cy];
        svgTransformObject[i] = r;
      } else if (i === 'translate'){
        t = v[i] instanceof Array ? v[i] : /\,|\s/.test(v[i]) ? v[i].split(/\,|\s/) : [v[i]*1,0];
        svgTransformObject[i] = [t[0] * 1||0, t[1] * 1||0];
      } else if (i === 'scale'){
        svgTransformObject[i] = v[i] * 1||1;
      } else if (/skew/.test(i)) {
        svgTransformObject[i] = v[i] * 1||0;
      }
    }

    // try to adjust translation when scale is used, probably we should do the same when using skews, but I think it's a waste of time
    // http://www.petercollingridge.co.uk/interactive-svg-components/pan-and-zoom-control
    if ('scale' in svgTransformObject) {
      !('translate' in svgTransformObject) && ( svgTransformObject['translate'] = [0,0] ); // if no translate is found in current value or next value, we default to 0
      svgTransformObject['translate'][0] += (1-svgTransformObject['scale']) * bb.width/2;
      svgTransformObject['translate'][1] += (1-svgTransformObject['scale']) * bb.height/2;
      // adjust rotation transform origin and translation when skews are used, to make the animation look exactly the same as if we were't using svgTransform
      // http://stackoverflow.com/questions/39191054/how-to-compensate-translate-when-skewx-and-skewy-are-used-on-svg/39192565#39192565
      if ('rotate' in svgTransformObject) {
        svgTransformObject['rotate'][1] -= 'skewX' in svgTransformObject ? Math.tan(svgTransformObject['skewX']) * bb.height : 0;
        svgTransformObject['rotate'][2] -= 'skewY' in svgTransformObject ? Math.tan(svgTransformObject['skewY']) * bb.width : 0;
      }
      svgTransformObject['translate'][0] += 'skewX' in svgTransformObject ? Math.tan(svgTransformObject['skewX']) * bb.height*2 : 0;
      svgTransformObject['translate'][1] += 'skewY' in svgTransformObject ? Math.tan(svgTransformObject['skewY']) * bb.width*2 : 0;
    } // more variations here https://gist.github.com/thednp/0b93068e20adb84658b5840ead0a07f8

    return svgTransformObject;
  }

  // returns an obect with current transform attribute value
  prepareStart.svgTransform = function(p,t) {
    var tr = {}, i, ctr = parseTransform(this.element.getAttribute('transform'));
    for (i in t) { tr[i] = i in ctr ? ctr[i] : (i==='scale'?1:0); } // find a value in current attribute value or add a default value
    return tr;
  }

  crossCheck.svgTransform = function() { // helper function that helps preserve current transform properties into the objects
    var bb = this.element.getBBox(), ctr = parseTransform(this.element.getAttribute('transform')), r, t, i,
      cx = bb.x + bb.width/2, cy = bb.y + bb.height/2;
    
    for ( i in ctr ) { // populate the valuesStart
      if (i === 'translate'){
        t = ctr[i] instanceof Array ? ctr[i] : /\,|\s/.test(ctr[i]) ? ctr[i].split(/\,|\s/) : [ctr[i]*1,0];
        this.valuesStart.svgTransform[i] = [t[0] * 1||0, t[1] * 1||0];
      } else if (i === 'scale'){
        this.valuesStart.svgTransform[i] = ctr[i] * 1||1;
      } else if (i === 'rotate'){
        r = ctr[i] instanceof Array ? ctr[i]
        : /\s/.test(ctr[i]) ? [ctr[i].split(' ')[0]*1, ctr[i].split(' ')[1].split(',')[0]*1, ctr[i].split(' ')[1].split(',')[1]*1] 
        : [ctr[i]*1,cx,cy];
        this.valuesStart.svgTransform[i] = r;
      } else if (/skew/.test(i)) {
        this.valuesStart.svgTransform[i] = ctr[i] * 1||0;
      }
    }

    for (var i in this.valuesStart.svgTransform) {
      if (!(i in this.valuesEnd.svgTransform)) { // copy existing and unused properties to the valuesEnd
        this.valuesEnd.svgTransform[i] = this.valuesStart.svgTransform[i];
      }
      if (i === 'rotate' in this.valuesStart.svgTransform && 'rotate' in this.valuesEnd.svgTransform){ // make sure to use the right transform origin when rotation is used
        this.valuesEnd.svgTransform.rotate[1] = this.valuesStart.svgTransform.rotate[1] = cx;
        this.valuesEnd.svgTransform.rotate[2] = this.valuesStart.svgTransform.rotate[2] = cy;
      }
    }
  }

  return this;
}));