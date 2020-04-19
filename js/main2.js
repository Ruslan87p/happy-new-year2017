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
    wallShadow = document.getElementsByClassName("wall-shadow"),
    
    
    candyGreenLeft = document.getElementById("candy-green-left"),
    candyBlueLeft = document.getElementById("candy-blue-left"),
    candyBlueRight = document.getElementById("candy-blue-right"),
    candyGreenRight = document.getElementById("candy-green-right"),
    
    
    // candies
    path1_greenLeft = document.getElementsByClassName("path-1-green-left"),
    path2_greenLeft = document.getElementsByClassName("path-2-green-left"),
    path3_greenLeft = document.getElementsByClassName("path-3-green-left"),
    path4_greenLeft = document.getElementsByClassName("path-4-green-left"),
    path5_greenLeft = document.getElementsByClassName("path-5-green-left"),
    path6_greenLeft = document.getElementsByClassName("path-6-green-left"),
    path7_greenLeft = document.getElementsByClassName("path-7-green-left"),
    path8_greenLeft = document.getElementsByClassName("path-8-green-left"),
    
    path1_blueLeft = document.getElementsByClassName("path-1-blue-left"),
    path2_blueLeft = document.getElementsByClassName("path-2-blue-left"),
    path3_blueLeft = document.getElementsByClassName("path-3-blue-left"),
    path4_blueLeft = document.getElementsByClassName("path-4-blue-left"),
    path5_blueLeft = document.getElementsByClassName("path-5-blue-left"),
    path6_blueLeft = document.getElementsByClassName("path-6-blue-left"),
    path7_blueLeft = document.getElementsByClassName("path-7-blue-left"),
    path8_blueLeft = document.getElementsByClassName("path-8-blue-left"),
    
    
    
    
    path1_greenRight = document.getElementsByClassName("path-1-green-right"),
    path2_greenRight = document.getElementsByClassName("path-2-green-right"),
    path3_greenRight = document.getElementsByClassName("path-3-green-right"),
    path4_greenRight = document.getElementsByClassName("path-4-green-right"),
    path5_greenRight = document.getElementsByClassName("path-5-green-right"),
    path6_greenRight = document.getElementsByClassName("path-6-green-right"),
    path7_greenRight = document.getElementsByClassName("path-7-green-right"),
    path8_greenRight = document.getElementsByClassName("path-8-green-right"),
    
    path1_blueRight = document.getElementsByClassName("path-1-blue-right"),
    path2_blueRight = document.getElementsByClassName("path-2-blue-right"),
    path3_blueRight = document.getElementsByClassName("path-3-blue-right"),
    path4_blueRight = document.getElementsByClassName("path-4-blue-right"),
    path5_blueRight = document.getElementsByClassName("path-5-blue-right"),
    path6_blueRight = document.getElementsByClassName("path-6-blue-right"),
    path7_blueRight = document.getElementsByClassName("path-7-blue-right"),
    path8_blueRight = document.getElementsByClassName("path-8-blue-right"),
    
    
    smokeLeft = document.getElementById("smoke-circles-left"),
    smokeRight = document.getElementById("smoke-circles-right"),
    
    
    mountRight = document.getElementById('mount-right'),
    mountRightCenter = document.getElementById('mount-right-center'),
    mountLeftCenter = document.getElementById('mount-left-center'),
    mountLeft = document.getElementById('mount-left'),
    
    
    topMount1 = document.getElementById('top-mount-1'),
    topMount2 = document.getElementById('top-mount-2'),
    topMount3 = document.getElementById('top-mount-3'),
    topMount4 = document.getElementById('top-mount-4'),
    
    
    
    rope1 = document.getElementById('rope1'),
    rope2 = document.getElementById('rope2'),
    rope3 = document.getElementById('rope3'),
    rope4 = document.getElementById('rope4'),
    rope5 = document.getElementById('rope5'),
    
    
    
    lantern1 = document.getElementById('lantern-1'),
    lantern2 = document.getElementById('lantern-2'),
    lantern3 = document.getElementById('lantern-3'),
    lantern4 = document.getElementById('lantern-4'),
    lantern5 = document.getElementById('lantern-5'),
    
    
    treeLeft = document.getElementById('tree-left'),
    treeRight = document.getElementById('tree-right'),
    treeRightCenter = document.getElementById('tree-right-center'),
    treeCenter = document.getElementById('tree-center'),
    treeLeftCenter = document.getElementById('tree-left-center'),
    
    
    redCircle = document.getElementsByClassName("red"),
    blueCircle = document.getElementsByClassName("blue"),
    yellowCircle = document.getElementsByClassName("yellow"),
    
    
    allClouds = document.getElementById("all-clouds"),
    
    
    

    

tl = new TimelineMax();

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


.fromTo(candyGreenLeft, 1,  { ease: Circ.easeOut, y: -50, opacity: 0, },  { ease: Circ.easeOut, delay:2, y: 0, opacity: 1, }, 1.3)
.fromTo(candyBlueLeft, 1,  { ease: Circ.easeOut, y: -50, opacity: 0, },  { ease: Circ.easeOut, delay:2.2, y: 0, opacity: 1, }, 1.3)
.fromTo(candyBlueRight, 1,  { ease: Circ.easeOut, y: -50, opacity: 0, },  { ease: Circ.easeOut, delay:2.4, y: 0, opacity: 1, }, 1.3)
.fromTo(candyGreenRight, 1,  { ease: Circ.easeOut, y: -50, opacity: 0, },  { ease: Circ.easeOut, delay:2.6, y: 0, opacity: 1, }, 1.3)




.fromTo(path1_greenLeft, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:2.2, opacity: 1, }, 1.3)
.fromTo(path2_greenLeft, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:2.3, opacity: 1, }, 1.3)
.fromTo(path3_greenLeft, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:2.4, opacity: 1, }, 1.3)
.fromTo(path4_greenLeft, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:2.5, opacity: 1, }, 1.3)
.fromTo(path5_greenLeft, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:2.6, opacity: 1, }, 1.3)
.fromTo(path6_greenLeft, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:2.7, opacity: 1, }, 1.3)
.fromTo(path7_greenLeft, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:2.8, opacity: 1, }, 1.3)
.fromTo(path8_greenLeft, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:2.9, opacity: 1, }, 1.3)

.fromTo(path1_blueLeft, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:2.9, opacity: 1, }, 1.3)
.fromTo(path2_blueLeft, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:3.0, opacity: 1, }, 1.3)
.fromTo(path3_blueLeft, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:3.1, opacity: 1, }, 1.3)
.fromTo(path4_blueLeft, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:3.2, opacity: 1, }, 1.3)
.fromTo(path5_blueLeft, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:3.3, opacity: 1, }, 1.3)
.fromTo(path6_blueLeft, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:3.4, opacity: 1, }, 1.3)
.fromTo(path7_blueLeft, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:3.5, opacity: 1, }, 1.3)
.fromTo(path8_blueLeft, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:3.6, opacity: 1, }, 1.3)




.fromTo(path1_greenRight, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:3.6, opacity: 1, }, 1.3)
.fromTo(path2_greenRight, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:3.7, opacity: 1, }, 1.3)
.fromTo(path3_greenRight, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:3.8, opacity: 1, }, 1.3)
.fromTo(path4_greenRight, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:3.9, opacity: 1, }, 1.3)
.fromTo(path5_greenRight, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:4.0, opacity: 1, }, 1.3)
.fromTo(path6_greenRight, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:4.1, opacity: 1, }, 1.3)
.fromTo(path7_greenRight, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:4.2, opacity: 1, }, 1.3)
.fromTo(path8_greenRight, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:4.3, opacity: 1, }, 1.3)

.fromTo(path1_blueRight, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:4.3, opacity: 1, }, 1.3)
.fromTo(path2_blueRight, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:4.4, opacity: 1, }, 1.3)
.fromTo(path3_blueRight, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:4.5, opacity: 1, }, 1.3)
.fromTo(path4_blueRight, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:4.6, opacity: 1, }, 1.3)
.fromTo(path5_blueRight, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:4.7, opacity: 1, }, 1.3)
.fromTo(path6_blueRight, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:4.8, opacity: 1, }, 1.3)
.fromTo(path7_blueRight, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:4.9, opacity: 1, }, 1.3)
.fromTo(path8_blueRight, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:5.0, opacity: 1, }, 1.3)



.fromTo(smokeLeft, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:3.5, opacity: 1, }, 1.3)
.fromTo(smokeRight, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:3.5, opacity: 1, }, 1.3)



.fromTo(mountRight, 1,  { ease: Power1.easeOut, fill: 'transparent', },  { ease: Power1.easeOut, delay:3.5, fill: '#24242E', }, 1.3)
.fromTo(mountRightCenter, 1,  { ease: Power1.easeOut, fill: 'transparent', },  { ease: Power1.easeOut, delay:3.9, fill: '#24242E', }, 1.3)
.fromTo(mountLeftCenter, 1,  { ease: Power1.easeOut, fill: 'transparent', },  { ease: Power1.easeOut, delay:4.3, fill: '#24242E', }, 1.3)
.fromTo(mountLeft, 1,  { ease: Power1.easeOut, fill: 'transparent', },  { ease: Power1.easeOut, delay:4.7, fill: '#24242E', }, 1.3)



.fromTo(topMount1, 1,  { ease: Circ.easeOut, y: -20, opacity: 0, },  { ease: Circ.easeOut, delay:4, y: 0, opacity: 1, }, 1.3)
.fromTo(topMount2, 1,  { ease: Circ.easeOut, y: -20, opacity: 0, },  { ease: Circ.easeOut, delay:4.2, y: 0, opacity: 1, }, 1.3)
.fromTo(topMount3, 1,  { ease: Circ.easeOut, y: -20, opacity: 0, },  { ease: Circ.easeOut, delay:4.4, y: 0, opacity: 1, }, 1.3)
.fromTo(topMount4, 1,  { ease: Circ.easeOut, y: -20, opacity: 0, },  { ease: Circ.easeOut, delay:4.6, y: 0, opacity: 1, }, 1.3)


.fromTo(rope1, 1,  { ease: Circ.easeOut, y: -20, opacity: 0, },  { ease: Circ.easeOut, delay:4.6, y: 0, opacity: 1, }, 1.3)
.fromTo(rope2, 1,  { ease: Circ.easeOut, y: -20, opacity: 0, },  { ease: Circ.easeOut, delay:4.6, y: 0, opacity: 1, }, 1.3)
.fromTo(rope3, 1,  { ease: Circ.easeOut, y: -20, opacity: 0, },  { ease: Circ.easeOut, delay:4.6, y: 0, opacity: 1, }, 1.3)
.fromTo(rope4, 1,  { ease: Circ.easeOut, y: -20, opacity: 0, },  { ease: Circ.easeOut, delay:4.6, y: 0, opacity: 1, }, 1.3)
.fromTo(rope5, 1,  { ease: Circ.easeOut, y: -20, opacity: 0, },  { ease: Circ.easeOut, delay:4.6, y: 0, opacity: 1, }, 1.3)


.fromTo(lantern1, 1,  { ease: Bounce.easeOut, y: -20, opacity: 0, },  { ease: Bounce.easeOut, delay:4.6, y: 0, opacity: 1, }, 1.3)
.fromTo(lantern2, 1,  { ease: Bounce.easeOut, y: -20, opacity: 0, },  { ease: Bounce.easeOut, delay:4.6, y: 0, opacity: 1, }, 1.3)
.fromTo(lantern3, 1,  { ease: Bounce.easeOut, y: -20, opacity: 0, },  { ease: Bounce.easeOut, delay:4.6, y: 0, opacity: 1, }, 1.3)
.fromTo(lantern4, 1,  { ease: Bounce.easeOut, y: -20, opacity: 0, },  { ease: Bounce.easeOut, delay:4.6, y: 0, opacity: 1, }, 1.3)
.fromTo(lantern5, 1,  { ease: Bounce.easeOut, y: -20, opacity: 0, },  { ease: Bounce.easeOut, delay:4.6, y: 0, opacity: 1, }, 1.3)


.fromTo(treeLeft, 1,  { ease:  Power1.easeOut, y: -80, opacity: 0, },  { ease:  Power1.easeOut, delay:4.5, y: 0, opacity: 1, }, 1.3)
.fromTo(treeRight, 1,  { ease:  Power1.easeOut, y: -80, opacity: 0, },  { ease:  Power1.easeOut, delay:5.2, y: 0, opacity: 1, }, 1.3)
.fromTo(treeRightCenter, 1,  { ease:  Power1.easeOut, y: -80, opacity: 0, },  { ease:  Power1.easeOut, delay:4.9, y: 0, opacity: 1, }, 1.3)
.fromTo(treeCenter, 1,  { ease:  Power1.easeOut, y: -80, opacity: 0, },  { ease:  Power1.easeOut, delay:5, y: 0, opacity: 1, }, 1.3)
.fromTo(treeLeftCenter, 1,  { ease:  Power1.easeOut, y: -80, opacity: 0, },  { ease:  Power1.easeOut, delay:4.7, y: 0, opacity: 1, }, 1.3)



.fromTo(redCircle, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:6, opacity: 1, }, 1.3)
.fromTo(blueCircle, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:7, opacity: 1, }, 1.3)
.fromTo(yellowCircle, 1,  { ease: Circ.easeOut, opacity: 0, },  { ease: Circ.easeOut, delay:8, opacity: 1, }, 1.3)


.fromTo(allClouds, 4,  { ease: Power1.easeOut, opacity: 0, },  { ease: Power1.easeOut, delay:6, opacity: 1, }, 1)





// Santa moving from right to left
var santaDeers = document.getElementById('santa-and-deers');
TweenMax.fromTo(santaDeers, 15,  {x: 0, y: 0, },  {delay:5, x: -2500, y: 300, }, 1)






// Snow container
var total = 300;
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






// hide mountain stroke after 6 seconds
setTimeout(function() { 
var mountRight = document.getElementById('mount-right').style.stroke = "none";
var mountRightCenter = document.getElementById('mount-right-center').style.stroke = "none";
var mountLeftCenter = document.getElementById('mount-left-center').style.stroke = "none";
var mountLeft = document.getElementById('mount-left').style.stroke = "none";
}, 6000);




// drawing mountain border
var mountRight = document.getElementById('mount-right');
var mountRightCenter = document.getElementById('mount-right-center');
var mountLeftCenter = document.getElementById('mount-left-center');
var mountLeft = document.getElementById('mount-left');


var tween = KUTE.to(mountRight,  {draw:'0% 200%'}, { easing: 'easingCubicInOut', delay: 2500, duration: 1000});
var tween1 = KUTE.to(mountRightCenter,  {draw:'0% 200%'}, { easing: 'easingCubicInOut', delay: 2800, duration: 1300});
var tween2 = KUTE.to(mountLeftCenter, {draw:'0% 200%'}, { easing: 'easingCubicInOut', delay: 3100, duration: 1600});
var tween3 = KUTE.to(mountLeft, {draw:'0% 200%'}, { easing: 'easingCubicInOut', delay: 3400, duration: 1900});


!tween.playing && tween.start();
!tween1.playing && tween1.start();
!tween2.playing && tween2.start();
!tween3.playing && tween3.start();






setTimeout(function(){     
        document.getElementById("wall").style.transform = "translateZ(1000px)";
        document.getElementById("wall").style.transform = "scale3d(0.1, 0.1, 0.1)";
        document.getElementById("wall").style.transform = "perspective(-600px)";
        document.getElementById("wall").style.transition = "ease-out all 3s";
        document.getElementById("wall").style.transformOrigin = "bottom center";
        document.getElementById("wall").style.opacity = "0";
        document.getElementById("wall").style.width = "30%";
        
        
        
        document.getElementById("city").style.transformOrigin = "top center";
        document.getElementById("city").style.transform = "translateZ(200px)";
        document.getElementById("city").style.transform = "scale3d(0.8, 0.8, 0.8)";
        document.getElementById("city").style.transform = "perspective(600px)";
        document.getElementById("city").style.opacity = "1";
        
        
        
        document.getElementById("moon").style.transform = "rotate(0deg)";
        document.getElementById("moon").style.transformOrigin = "top center";
        document.getElementById("moon").style.transition = "ease-out all 6s";
        document.getElementById("moon").style.width = "60%";
        
        
        document.getElementById("BACKGROUND").style.opacity = "1";
        document.getElementById("BACKGROUND").style.transition = "ease-out all 8s";

        TweenMax.fromTo('#BACKGROUND', 2,  { ease: Circ.easeOut, opacity: 0 },  { ease: Circ.easeOut, opacity: 1, delay:5}, 1.8)
        
        // snow under the tree
        TweenMax.fromTo('.snow-on-the-gtound', 3,  { ease: Power1.easeOut, opacity: 0, },  { ease: Power1.easeOut, opacity: 1, delay:10}, 1.8)
        
        //presents under the tree
        TweenMax.fromTo('#present-under-tree', 3,  { ease: Power1.easeOut, opacity: 0, y:'-30px', },  { ease: Power1.easeOut, opacity: 1, y:'0px', delay:3}, 1.8)
        
        TweenMax.fromTo('#present-1', 2,  { ease: Power1.easeOut, opacity: 0, y:'-20px', },  { ease: Power1.easeOut, opacity: 1, y:'0px', delay:5}, 1.8)
        TweenMax.fromTo('#present-2', 2,  { ease: Power1.easeOut, opacity: 0, y:'-20px', },  { ease: Power1.easeOut, opacity: 1, y:'0px', delay:5.5}, 1.8)
        TweenMax.fromTo('#present-3', 2,  { ease: Power1.easeOut, opacity: 0, y:'-20px', },  { ease: Power1.easeOut, opacity: 1, y:'0px', delay:6}, 1.8)
        TweenMax.fromTo('#present-4', 2,  { ease: Power1.easeOut, opacity: 0, y:'-20px', },  { ease: Power1.easeOut, opacity: 1, y:'0px', delay:6.5}, 1.8)
        
        
        TweenMax.fromTo('#callPrompt', 2,  { ease: Power1.easeOut, opacity: 0, y:'-100px', },  { ease: Power1.easeOut, opacity: 1, y:'0px', delay:8}, 1.8)
        
        

// randomly fireworks animation
var fireWorkGreen =  document.getElementById("sprite-fireworks-green");
function toggleAnimateGree() {
    setTimeout(function () {     
        fireWorkGreen.style.display = "none";  
          setTimeout(function () {      
            fireWorkGreen.style.display = "block";  
            toggleAnimateGree();
        }, Math.round(Math.random()*(6000-1000))+1000);
    }, 1300);
}
toggleAnimateGree();
        
var fireWorkBlue2 =  document.getElementById("sprite-fireworks-blue2");
function toggleAnimateBlue2() {
    setTimeout(function () {     
        fireWorkBlue2.style.display = "none";  
          setTimeout(function () {      
            fireWorkBlue2.style.display = "block";  
            toggleAnimateBlue2();
        }, Math.round(Math.random()*(4800-700))+1200);
    }, 1300);
}
toggleAnimateBlue2();
        
        
        

var fireWorkWhite =  document.getElementById("sprite-fireworks-white");
function toggleAnimateWhite() {
    setTimeout(function () {     
        fireWorkWhite.style.display = "none";   
          setTimeout(function () {      
            fireWorkWhite.style.display = "block";     
            toggleAnimateWhite();
        }, Math.round(Math.random()*(5000-500))+2000);
    }, 1300);
}
toggleAnimateWhite();
        
var fireWorkWRed2 =  document.getElementById("sprite-fireworks-red2");
function toggleAnimateRed2() {
    setTimeout(function () {     
        fireWorkWRed2.style.display = "none";   
          setTimeout(function () {      
            fireWorkWRed2.style.display = "block";     
            toggleAnimateRed2();
        }, Math.round(Math.random()*(8000-1000))+1600);
    }, 1300);
}
toggleAnimateRed2();
        
        
        
        
var fireWorkRed =  document.getElementById("sprite-fireworks-red");
function toggleAnimateRed() {
    setTimeout(function () {     
        fireWorkRed.style.display = "none";   
          setTimeout(function () {      
            fireWorkRed.style.display = "block";     
            toggleAnimateRed();
        }, Math.round(Math.random()*(5500-800))+1500);
    }, 1300);
}
toggleAnimateRed();
        
var fireWorkWhite2 =  document.getElementById("sprite-fireworks-white2");
function toggleAnimateWhite2() {
    setTimeout(function () {     
        fireWorkWhite2.style.display = "none";   
          setTimeout(function () {      
            fireWorkWhite2.style.display = "block";     
            toggleAnimateWhite2();
        }, Math.round(Math.random()*(9000-1000))+2000);
    }, 1300);
}
toggleAnimateWhite2();
        
        
        
        
var fireWorkBlue =  document.getElementById("sprite-fireworks-blue");
function toggleAnimateBlue() {
    setTimeout(function () {     
        fireWorkBlue.style.display = "none";   
          setTimeout(function () {      
            fireWorkBlue.style.display = "block";     
            toggleAnimateBlue();
        }, Math.round(Math.random()*(6500-500))+800);
    }, 1300);
}
toggleAnimateBlue(); 
        
var fireWorkGreen2 =  document.getElementById("sprite-fireworks-green2");
function toggleAnimateGreen2() {
    setTimeout(function () {     
        fireWorkGreen2.style.display = "none";   
          setTimeout(function () {      
            fireWorkGreen2.style.display = "block";     
            toggleAnimateGreen2();
        }, Math.round(Math.random()*(8000-500))+500);
    }, 1300);
}
toggleAnimateGreen2(); 
        
        

// santa comes from left side in the city
//var santaDeers = document.getElementById('santa-and-deers');
//TweenMax.fromTo(santaDeers, 15,  {yPercent: -50, },  {delay:3, yPercent: 100, }, 1)
        


// Happy New Year sentence comes from opacity 0
var newYearObj = document.getElementById('happy-new-year');
TweenMax.fromTo(newYearObj, 0.5,  {opacity: 0, },  {opacity: 1, }, 1)


// drawing SVG path Happy New Year (types to draw path "delayed", "async", "oneByOne", "scenario-sync", ) 
    new Vivus('happy-new-year', {type: 'delayed', duration: 250, start: 'autostart', dashGap: 20, forceRender: false,},
        function(obj){
         obj.el.classList.add('st-00');
        setTimeout(function(){ 
                obj.el.classList = [];
                obj.reset().play();
          }, 5000);
        });
        

}, 13500);      
          
//    });
//  };
// resizeWindow();   



// Audio OFF/ON button
// var myAudio = document.querySelector("#jingle-bells");
// var isPlaying = false;

// function togglePlay() {
//   if (isPlaying) {
//     myAudio.pause();
//   } else {
//     myAudio.play();
//   }
// };
// myAudio.onplaying = function() {
//   isPlaying = true;
// };
// myAudio.onpause = function() {
//   isPlaying = false;
// };









// if window size less than 1366px hide tree-and-present container
 $(window).resize(function() {
  if ($(window).width() < 1366) {
      TweenMax.to('#present-under-tree', 1,  {display: 'none'}, 1)
  }
 else {
      TweenMax.to('#present-under-tree', 1,  {display: 'block'}, 1)
 }
});








