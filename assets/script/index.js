'use strict';

let words = ['dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 'population',
'weather', 'bottle', 'history', 'dream', 'character', 'money', 'absolute',
'discipline', 'machine', 'accurate', 'connection', 'rainbow', 'bicycle',
'eclipse', 'calculator', 'trouble', 'watermelon', 'developer', 'philosophy',
'database', 'periodic', 'capitalism', 'abominable', 'component', 'future',
'pasta', 'microwave', 'jungle', 'wallet', 'canada', 'coffee', 'beauty', 'agency',
'chocolate', 'eleven', 'technology', 'alphabet', 'knowledge', 'magician',
'professor', 'triangle', 'earthquake', 'baseball', 'beyond', 'evolution',
'banana', 'perfumer', 'computer', 'management', 'discovery', 'ambition', 'music',
'eagle', 'crown', 'chess', 'laptop', 'bedroom', 'delivery', 'enemy', 'button',
'superman', 'library', 'unboxing', 'bookstore', 'language', 'homework',
'fantastic', 'economy', 'interview', 'awesome', 'challenge', 'science', 'mystery',
'famous', 'league', 'memory', 'leather', 'planet', 'software', 'update', 'yellow',
'keyboard', 'window'];
let arr = [];

let startGame = document.querySelector('.start-game');
let stopGame = document.querySelector('.stop-game');
let introGame = document.querySelector('.intro-game');
let introContent = document.querySelector('.intro-content');
let wordDisplay = document.querySelector('.word-display span');
let wordInput = document.querySelector('.post-input-content');
let score = document.querySelector('.score span');
let letter = Math.floor((Math.random()*words.length)); 
let word = words[letter];

/*  function letterTyping(words) {
    let letter = Math.floor((Math.random()*words.length)); 
    words.innerText = array[letter];
    array.splice(letter, 1);
} */

/* window.onload = (event) => {
    letterTyping(words);

}; */

let flag = 0;
introGame.addEventListener('click', function() {
    if(flag === 0){
        introContent.style.display = 'block';
        flag =1;
    }else {
        introContent.style.display = 'none';
        flag =0;
    }
})


startGame.addEventListener('click', function() {
    let j = 1;
    letter = Math.floor((Math.random()*(words.length - j)));
    wordDisplay.innerHTML = `${word}`;
    let timer = document.querySelector('#timer');
    let remained = document.querySelector('.remained');
    let i = 90;
    let t = setInterval(countDown, 1000);  
    function countDown() {
            console.log(i);
            timer.innerHTML = `${i} s`;
            i--;
            if(i == -2) {
                alert (`Time up, your score is ${score.innerHTML}`);
                document.getElementById("bgaudio").pause();
                timer.style.visibility='hidden';
                remained.style.visibility='hidden';

            }
    };

    wordInput.onkeydown = function keyPress(e) {
        if (e.keyCode === 13) {
            /* console.log(wordInput.value);
            console.log(wordDisplay.innerHTML); */
            if (wordInput.value == wordDisplay.innerHTML) {
                arr.push(word);
                words.splice(letter, 1);
                letter = Math.floor((Math.random()*words.length)); 
                word = words[letter];
                wordDisplay.innerHTML = `${word}`;
                wordInput.value = '';
                score.innerHTML = arr.length;
                j++;
            } else {
                alert ('Time is really limited, please be careful');
            }
        }
    }

});


var bgaudiocount = 0;
function bgaudio(){       
    ++bgaudiocount;
    if(bgaudiocount % 2 == 1){   
        document.getElementById("bgaudio").play();      
    }else{
        document.getElementById("bgaudio").pause();
    } 
}

