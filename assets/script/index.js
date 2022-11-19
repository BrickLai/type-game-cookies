'use strict';

const start = new Audio('./assets/audio/alarm.mp3');
start.type = 'audio/mp3';

time();

function time(){
    var time = new Date();
    var hour;
    var minutes;
    var seconds;
    var temph = time.getHours();
    if(temph <=9 && temph >0){
        hour = "0"+ temph;
    }else{
        hour=temph;
    }
    var tempm=time.getMinutes();
    if(tempm <10 && tempm >=0){
        minutes="0"+tempm;
    }else{
        minutes=tempm;
    }
    var temps = time.getSeconds();
    if(temps < 10 && temps >=0){
        seconds= "0"+temps;
    }else{
        seconds =temps;
    }

    document.getElementById("time-hour").innerHTML = hour;
    document.getElementById("time-minutes").innerHTML = minutes;
    document.getElementById("time-second").innerHTML = seconds;
}
    window.setInterval("time()",1000);

let input1 = document.querySelector('.timeinput1');
let input2 = document.querySelector('.timeinput2');
let showTime = document.querySelector('.timedistance');
let btn = document.querySelector('.setalarm');
let change = document.querySelector('.currenttime');

btn.addEventListener('click', function() {
    let h = input1.value;
    let m = input2.value;
    showTime.innerHTML = `${h} : ${m}`;
    console.log(h);
    console.log(m);
    
    setInterval(function() {
        var time = new Date();
        var temph = time.getHours().toString().padStart(2, '0');
        var tempm = time.getMinutes().toString().padStart(2, '0');
        if(h === temph && m === tempm) {
            change.style.color = '#4dc2df';
            start.play();
          };
    },1000)


});


