

var line1 = document.getElementById("line1"), // floor lines
    line2 = document.getElementById("line2"),
    line3 = document.getElementById("line3"),
    line4 = document.getElementById("line4"),
    line5 = document.getElementById("line5"),
    line6 = document.getElementById("line6"),
    line7 = document.getElementById("line7"),
    
    
    buildingLeft = document.getElementById("building-left"), // Buildings
    buildingLeftCenter = document.getElementById("building-left-center"),
    buildingCenter = document.getElementById("building-center"),
    buildingRight = document.getElementById("building-right"),
    buildingRightCenter = document.getElementById("building-right-center"),
    
    
    roofLeft = document.getElementsByClassName("roof-left"),
    roofRight = document.getElementsByClassName("roof-right"),
    flue = document.getElementsByClassName("flue"),
    
    roofCenterRight = document.getElementsByClassName("roof-center-right"),
    roofCenterLeft = document.getElementsByClassName("roof-center-left"),
    roofCenter = document.getElementsByClassName("roof-center"),
    wallShadow = document.getElementsByClassName("wall-shadow")
    
    

    

    tl = new TimelineMax();
//TweenMax.staggerFromTo("#three-steps li", 2, {opacity:0, cycle:{y:[-10, -10]}, ease: Back.easeOut}, {opacity:1, delay: 1, cycle:{y:[0, 0]}, ease: Back.easeOut},  0.2)


tl
// floor lines
.fromTo(line1, 1,  { ease: Back.easeOut.config(2.7), x: '-25%', opacity: 0, },  { ease: Back.easeOut.config(2.7), x: '0%', opacity: 1, }, 0.5)
.fromTo(line2, 1,  { ease: Back.easeOut.config(2.7), x: '25%', opacity: 0, },  { ease: Back.easeOut.config(2.7), x: '0%', opacity: 1, }, 0.7)
.fromTo(line3, 1,  { ease: Back.easeOut.config(2.7), x: '-25%', opacity: 0, },  { ease: Back.easeOut.config(2.7), x: '0%', opacity: 1, }, 0.9)
.fromTo(line4, 1,  { ease: Back.easeOut.config(2.7), x: '25%', opacity: 0, },  { ease: Back.easeOut.config(2.7), x: '0%', opacity: 1, }, 1.1)
.fromTo(line5, 1,  { ease: Back.easeOut.config(2.7), x: '-25%', opacity: 0, },  { ease: Back.easeOut.config(2.7), x: '0%', opacity: 1, }, 1.3)
.fromTo(line6, 1,  { ease: Back.easeOut.config(2.7), x: '25%', opacity: 0, },  { ease: Back.easeOut.config(2.7), x: '0%', opacity: 1, }, 1.5)
.fromTo(line7, 1,  { ease: Back.easeOut.config(2.7), x: '-25%', opacity: 0, },  { ease: Back.easeOut.config(2.7), x: '0%', opacity: 1, }, 1.7)

// Buildings
.fromTo(buildingLeft, 1,  { ease: Back.easeOut.config(2.7), y: '25%', opacity: 0, },  { ease: Back.easeOut.config(2.7), delay:1, y: '0%', opacity: 1, }, 1)
.fromTo(buildingLeftCenter, 1,  { ease: Back.easeOut.config(1.7), y: '25%', opacity: 0, },  { ease: Back.easeOut.config(1.7), delay:1, y: '0%', opacity: 1, }, 0.8)
.fromTo(buildingCenter, 1,  { ease: Back.easeOut.config(0.7), y: '25%', opacity: 0, },  { ease: Back.easeOut.config(0.7), delay:1, y: '0%', opacity: 1, }, 0.5)
.fromTo(buildingRight, 1,  { ease: Back.easeOut.config(2.7), y: '25%', opacity: 0, },  { ease: Back.easeOut.config(2.7), delay:1, y: '0%', opacity: 1, }, 1)
.fromTo(buildingRightCenter, 1,  { ease: Back.easeOut.config(1.7), y: '25%', opacity: 0, },  { ease: Back.easeOut.config(1.7), delay:1, y: '0%', opacity: 1, }, 0.8)


.fromTo(roofLeft, 1,  { ease: Back.easeOut.config(1), y: 200, opacity: 0, },  { ease: Back.easeOut.config(1), delay:1, y: 0, opacity: 1, }, 1.1)
.fromTo(roofRight, 1,  { ease: Back.easeOut.config(1.2), y: 200, opacity: 0, },  { ease: Back.easeOut.config(1.2), delay:1, y: 0, opacity: 1, }, 1.1)
.fromTo(flue, 1,  { ease: Back.easeOut.config(1.7), y: 300, opacity: 0, },  { ease: Back.easeOut.config(1.7), delay:1, y: 0, opacity: 1, }, 1.3)

.fromTo(roofCenterLeft, 1,  { ease: Back.easeOut.config(1.7), y: 150, opacity: 0, },  { ease: Back.easeOut.config(1.7), delay:1, y: 0, opacity: 1, }, 1.5)
.fromTo(roofCenterRight, 1,  { ease: Back.easeOut.config(1.7), y: 150, opacity: 0, },  { ease: Back.easeOut.config(1.7), delay:1, y: 0, opacity: 1, }, 1.5)
.fromTo(roofCenter, 1,  { ease: Back.easeOut.config(1.7), y: 100, opacity: 0, },  { ease: Back.easeOut.config(1.7), delay:1, y: 0, opacity: 1, }, 1.8)

.fromTo(wallShadow, 1,  { ease: Back.easeOut.config(1.7), y: 50, opacity: 0, },  { ease: Back.easeOut.config(1.7), delay:1.5, y: 0, opacity: 1, }, 1.3)



















// Snow container
var total = 30;
var warp = document.getElementById("container-snow"),	
    w = window.innerWidth , h = window.innerHeight;
 
 for (i=0; i<total; i++){ 
   var Div = document.createElement('div');
   TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150)});
   warp.appendChild(Div);
   animm(Div);
 }
 
 function animm(elm){   
   TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=100',repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)};





















//
//.fromTo(arrowBtn, 1,  { ease: Back.easeOut.config(1.7), x: '25%', opacity: 0, },  { ease: Back.easeOut.config(1.7), x: '0%', opacity: 1, })
//.fromTo(arrowIcon, 1,  { ease: Sine.easeOut, y: '-5%', opacity: 0, },  { ease: Sine.easeOut, y: '0%', opacity: 1, })
//
//.fromTo(flameWrapper, 1,  { ease: Sine.easeOut, y: '-5%', opacity: 0, },  { ease: Sine.easeOut, y: '0%', opacity: 1, })
//
//.fromTo(garland1, 1, { y: -80, ease: Bounce.easeOut}, { y: 0, ease: Bounce.easeOut},  0.1)
//.fromTo(garland2, 1, { y: -80, ease: Bounce.easeOut}, { y: 0, delay: 0.3, ease: Bounce.easeOut},  0.1)
//.fromTo(garland3, 1, { y: -80, ease: Bounce.easeOut}, { y: 0, delay: 0.6, ease: Bounce.easeOut},  0.1)
//.fromTo(garland4, 1, { y: -80, ease: Bounce.easeOut}, { y: 0, delay: 1, ease: Bounce.easeOut},  0.1)
//.fromTo(garland5, 1, { y: -80, ease: Bounce.easeOut}, { y: 0, delay: 1.3, ease: Bounce.easeOut},  0.1)
//
//.fromTo(signature, 0.5,  { ease: Sine.easeOut, y: 10, opacity: 0, },  { ease: Sine.easeOut, y: 0, opacity: 1, })
//    
//.fromTo(santa, 1,  { ease:Power2.easeOut, x: '25%', opacity: 0, },  { ease:Power2.easeOut, x: '0%', opacity: 1, });

















// Flames transition
//var morphTween21 = KUTE.fromTo('#flame1', {attr: { fill: '#673AB7'}, path: '#flame1' }, { attr: { fill: '#2196F3' }, path: '#flame2' }, {
//    duration: 100, easing: 'easingCubicOut', morphIndex: 800
//}); 
//var morphTween22 = KUTE.fromTo('#flame1', {path: '#flame2', attr:{ fill: '#2196F3'} }, { path: '#flame3', attr:{ fill: 'deeppink' } }, {
//    morphIndex: 800, duration: 100, easing: 'easingCubicOut'
//}); 
//var morphTween23 = KUTE.fromTo('#flame1', {path: '#flame3', attr:{ fill: 'deeppink'} }, { path: '#flame1', attr:{ fill: '#673AB7' } }, {duration: 100, morphIndex: 800, easing: 'easingCubicOut'});
//
//
//window.onload = function(){
//    morphTween21.chain(morphTween22);
//    morphTween22.chain(morphTween23);
//    morphTween23.chain(morphTween21);
//    
//    !morphTween21.playing && morphTween21.start();
//    !morphTween22.playing && morphTween22.start();
//    !morphTween23.playing && morphTween23.start();
//}; 