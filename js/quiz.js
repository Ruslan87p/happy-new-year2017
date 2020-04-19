



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

var showBroken = document.getElementsByClassName("brocken");
var showFlies = document.getElementsByClassName("flies");
var showbadPerson = document.getElementsByClassName("badPerson");
var showBooze = document.getElementsByClassName("booze");
var showFloor9 = document.getElementsByClassName("floor9");

var lastStep = document.getElementsByClassName("lastStep");


var ans = {
    'name': null,
    'place': null,
    'bodyPart': null,
    'swearWord': null,
    'brocken': null,
    'flies': null,
    'badPerson': null,
    'booze': null,
    'floor9': null,
}
$('#nextQ').on('click', function () {
    
    ans['name'] = document.getElementById("name-input").value; 
    TweenMax.fromTo(showName, 1,  { ease: Back.easeOut.config(2), y: '450px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '1850px', opacity: 1, }, 0.5)
    TweenMax.fromTo(showMovie, 1,  { ease: Back.easeOut.config(2), y: '-350px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '450px', opacity: 1, }, 0.5)
});

$('#nextQ1').on('click', function () {
    ans['place'] = document.getElementById("place-input").value; 
    TweenMax.fromTo(showMovie, 1,  { ease: Back.easeOut.config(2), y: '450px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '1850px', opacity: 1, }, 0.5)
    TweenMax.fromTo(showHours, 1,  { ease: Back.easeOut.config(2), y: '-350px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '450px', opacity: 1, }, 0.5)
});


$('#nextQ2').on('click', function () {
    ans['bodyPart'] = document.getElementById("bodyPart-input").value; 
    TweenMax.fromTo(showHours, 1,  { ease: Back.easeOut.config(2), y: '450px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '1850px', opacity: 1, }, 0.5)
    TweenMax.fromTo(showTime, 1,  { ease: Back.easeOut.config(2), y: '-350px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '450px', opacity: 1, }, 0.5)

});


$('#nextQ3').on('click', function () {
    ans['swearWord'] = document.getElementById("swearWord-input").value; 
    TweenMax.fromTo(showTime, 1,  { ease: Back.easeOut.config(2), y: '450px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '1850px', opacity: 1, }, 0.5)
    TweenMax.fromTo(showBroken, 1,  { ease: Back.easeOut.config(2), y: '-350px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '450px', opacity: 1, }, 0.5)

});

$('#nextQ4').on('click', function () {
    ans['brocken'] = document.getElementById("brocken-input").value; 
    TweenMax.fromTo(showBroken, 1,  { ease: Back.easeOut.config(2), y: '450px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '1850px', opacity: 1, }, 0.5)
    TweenMax.fromTo(showFlies, 1,  { ease: Back.easeOut.config(2), y: '-350px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '450px', opacity: 1, }, 0.5)

});
$('#nextQ5').on('click', function () {
    ans['flies'] = document.getElementById("flies-input").value; 
    TweenMax.fromTo(showFlies, 1,  { ease: Back.easeOut.config(2), y: '450px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '1850px', opacity: 1, }, 0.5)
    TweenMax.fromTo(showbadPerson , 1,  { ease: Back.easeOut.config(2), y: '-350px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '450px', opacity: 1, }, 0.5)

});
$('#nextQ6').on('click', function () {
    ans['badPerson'] = document.getElementById("badPerson-input").value; 
    TweenMax.fromTo(showbadPerson, 1,  { ease: Back.easeOut.config(2), y: '450px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '1850px', opacity: 1, }, 0.5)
    TweenMax.fromTo(showBooze, 1,  { ease: Back.easeOut.config(2), y: '-350px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '450px', opacity: 1, }, 0.5)

});
$('#nextQ7').on('click', function () {
    ans['booze'] = document.getElementById("booze-input").value; 
    TweenMax.fromTo(showBooze, 1,  { ease: Back.easeOut.config(2), y: '450px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '1850px', opacity: 1, }, 0.5)
    TweenMax.fromTo(showFloor9, 1,  { ease: Back.easeOut.config(2), y: '-350px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '450px', opacity: 1, }, 0.5)

});
$('#nextQ8').on('click', function () {
    ans['floor9'] = document.getElementById("floor9-input").value; 
    TweenMax.fromTo(showFloor9, 1,  { ease: Back.easeOut.config(2), y: '450px', opacity: 0, },  { ease: Back.easeOut.config(2), y: '1850px', opacity: 1, }, 0.5)
    TweenMax.fromTo(lastStep, 2,  { ease: Power4.easeOut, opacity: 0, y: '-100%', },  { ease: Power4.easeOut, opacity: 1, y: '100%', }, 0.5)


    

//    $(ans[0]).appendTo('.allTruthAboutYou');

    
    var whatYouGetIsWhatYouDoMain = [
        
    whatYouGetIsWhatYouDo = '<p class="allTruthAboutYou">Здравствуй Дедушка Мороз. Меня зовут <b>' + ans['name'] + '</b> и я нахожусь в <b>' + ans['place'] + '</b> <br> и пишу это письмо. Когда я не слушаюсь маму, она бросает в меня утюг и частенько попадает мне прямо в <b> ' + ans['bodyPart'] + ' </b> А мой папа всегда кричит: <b>' + ans['swearWord'] + '</b> <br> И заставляет меня чинить его <b>' + ans['brocken'] + '</b> Но я не умею ничего ремонтировать, и поэтому у меня получается  <b> ' + ans['flies'] + ' </b> <br>  Ещё папа придумал мне кличку, и зовёт меня не по имени, а <b> ' + ans['badPerson'] + ' </b> И это за частую обидно. В общем, дедушка мороз, если ты не <b> ' + ans['badPerson'] + ' </b> то ты поймёшь как мне <b>' + ans['booze'] + '</b> <br> Дорогой Дедушка мороз забери меня к себе. Ещё сделай так, что бы близкие мне люди любили меня и почаще давали мне денег. Любимый дед мороз, ты мой последний шанс. Я надеюсь на новый год я найду под ёлочкой что-то для себя. Если ты не прочтёшь это письмо или оно не дойдёт до тебя, мне </br> <b>'  + ans['floor9'] +  ' </b> <br> Помни что я верю в тебя, спасибо  <b>' + ans['swearWord'] + '</b> </br> </p> ',

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
