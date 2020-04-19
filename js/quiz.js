



$('#callPrompt').on('click', function () {

var showName = document.getElementsByClassName("name"),
    overlayLayer = document.getElementsByClassName("allQuiz"),
    santaAndLogo = document.getElementsByClassName("santa-and-logo"),
    
tl = new TimelineMax();
tl

.fromTo(showName, 1,  { ease: Back.easeOut.config(2), y: '-450px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '450px', opacity: 1, }, 0.5)    
.fromTo(overlayLayer, 1,  { ease: Power4.easeOut, opacity: 0, display: 'none' },  { ease: Power4.easeOut, opacity: 1, display: 'block' }, 0.5) 

.fromTo(santaAndLogo, 45,  { ease: Power4.easeOut, x: '300px', delay:5, },  { ease: Power4.easeOut, delay:5, x: '-2500px'}, 0.5)    
     
});










var showName = document.getElementsByClassName("name");
var showMovie = document.getElementsByClassName("movie");
var showHours = document.getElementsByClassName("hours");
var showTime = document.getElementsByClassName("time");
var showCookies = document.getElementsByClassName("cookies");

var lastStep = document.getElementsByClassName("lastStep");


var ans = {
    'name': null,
    'movie': null,
    'hours': null,
    'time': null,
    'cookies': null
}
$('#nextQ').on('click', function () {
    
    ans['name'] = document.getElementById("name-input").value; 
    TweenMax.fromTo(showName, 1,  { ease: Back.easeOut.config(2), y: '450px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '1850px', opacity: 1, }, 0.5)
    TweenMax.fromTo(showMovie, 1,  { ease: Back.easeOut.config(2), y: '-350px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '450px', opacity: 1, }, 0.5)
});

$('#nextQ1').on('click', function () {
    ans['movie'] = document.getElementById("movie-input").value; 
    TweenMax.fromTo(showMovie, 1,  { ease: Back.easeOut.config(2), y: '450px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '1850px', opacity: 1, }, 0.5)
    TweenMax.fromTo(showHours, 1,  { ease: Back.easeOut.config(2), y: '-350px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '450px', opacity: 1, }, 0.5)
});


$('#nextQ2').on('click', function () {
    ans['hours'] = document.getElementById("hours-input").value; 
    TweenMax.fromTo(showHours, 1,  { ease: Back.easeOut.config(2), y: '450px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '1850px', opacity: 1, }, 0.5)
    TweenMax.fromTo(showTime, 1,  { ease: Back.easeOut.config(2), y: '-350px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '450px', opacity: 1, }, 0.5)

});


$('#nextQ3').on('click', function () {
    ans['time'] = document.getElementById("time-input").value; 
    TweenMax.fromTo(showTime, 1,  { ease: Back.easeOut.config(2), y: '450px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '1850px', opacity: 1, }, 0.5)
    TweenMax.fromTo(showCookies, 1,  { ease: Back.easeOut.config(2), y: '-350px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '450px', opacity: 1, }, 0.5)

});


$('#nextQ4').on('click', function () {
    ans['cookies'] = document.getElementById("cookies-input").value; 
    TweenMax.fromTo(showCookies, 1,  { ease: Back.easeOut.config(2), y: '450px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '1850px', opacity: 1, }, 0.5)
    TweenMax.fromTo(lastStep, 2,  { ease: Power4.easeOut, opacity: 0, y: '-100%', },  { ease: Power4.easeOut, opacity: 1, y: '100%', }, 0.5)


    

//    $(ans[0]).appendTo('.allTruthAboutYou');

    
    var whatYouGetIsWhatYouDoMain = [
        
    whatYouGetIsWhatYouDo = '<p class="allTruthAboutYou">Dear <b> ' + ans['name'] + ' </b> <br><br> The soundtrack of <b> ' + ans['movie'] + ' </b> will be the soundtrack of your happiest moments in 2017. <br> Number of Emails we know you have ignored in 2016 is <b> ' + ans['hours'] + ' </b> <br> In 2017, the average hour you will get home from work will be <b> ' + ans['time'] + ' </b> pm. <br> Your monthly salary in 2017 will be <b> ' + ans['cookies'] + ' </b>. </p>',
    
    whatYouGetIsWhatYouD1 = '<p class="allTruthAboutYou">Dear <b> ' + ans['name'] + ' </b> <br><br> Your next year will be based on <b> ' + ans['movie'] + ' </b> plot. <br> Number of good deeds you have done in 2016 is <b>' + ans['hours'] + ' </b> <br> In 2017, your kids will go to bed every day at <b> ' + ans['time'] + ' </b> pm.  <br> Your yearly bonus in 2017 will be <b> ' + ans['cookies'] + ' </b> . </p>',
    
    whatYouGetIsWhatYouD2 = '<p class="allTruthAboutYou">Dear <b> ' + ans['name'] + ' </b> <br><br> Your attitude in 2017 will be like the hero of <b> ' + ans['movie'] + ' </b> attitude. <br> Number of bad deeds you have done in 2016 is <b> ' + ans['hours'] + ' </b> <br> All of your urgent conference calls will schedule at <b> ' + ans['time'] + ' </b> pm. <br> In 2017, your kids will get <b> ' + ans['cookies'] + ' </b> from you as pocket money. Daily. </p>',
        
    whatYouGetIsWhatYouD3 = '<p class="allTruthAboutYou">Dear <b> ' + ans['name'] + ' </b> <br><br> On New Year\'s Eve party, make sure to wear something the hero of <b> ' + ans['movie'] + ' </b> would wear. <br> Number of times we know you have spent on Facebook instead of working in 2016 is <b> ' + ans['hours'] + ' </b>. <br> Every day in 2017, your mayor will schedule the noisiest construction work in your street at <b> ' + ans['time'] + ' </b> pm.  <br><br> Amount of speeding ticket you will have to pay in 2017, will be <b> ' + ans['cookies'] + ' </b> *765.8 Dollars.</p>',
        
    ];
    
    var randomItem = whatYouGetIsWhatYouDoMain[Math.floor(Math.random()*whatYouGetIsWhatYouDoMain.length)]
    $(randomItem).appendTo('.lastStep');
    
    
    

    
     
});



$('.icon-close').on('click', function () {
    var overlayLayer = document.getElementsByClassName("allQuiz");
    TweenMax.fromTo(overlayLayer, 2,  { ease: Power4.easeOut, opacity: 1, display: 'block' },  { ease: Power4.easeOut, opacity: 0, display: 'none' }, 0.5)  
    TweenMax.fromTo(lastStep, 2,  { ease: Power4.easeOut, opacity: 1, y: '100%', },  { ease: Power4.easeOut, opacity: 0,  y: '200%', }, 0.5)
    
     $('.allTruthAboutYou').remove();
     $(":input").val("");

});
