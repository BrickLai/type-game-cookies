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
let bottomContent = document.querySelector('.bottom-content');
let letter = Math.floor((Math.random() * words.length));
let word = words[letter];
let mistake = document.querySelector('.mistake');
let closeConfirm = document.querySelector('.close-confirm');
let result = document.querySelector('.result');
let resultCloseConfirm = document.querySelector('.result-close-confirm');
let resultNumber = document.querySelector('.result p');
let board = document.querySelectorAll('.rank-content span');
localStorage.removeItem('scores')

/*  function letterTyping(words) {
    let letter = Math.floor((Math.random()*words.length)); 
    words.innerText = array[letter];
    array.splice(letter, 1);
} */

/* window.onload = (event) => {
    letterTyping(words);

}; */

let flag = 0;
introGame.addEventListener('click', function () {
    if (flag === 0) {
        introContent.style.display = 'block';
        flag = 1;
    } else {
        introContent.style.display = 'none';
        flag = 0;
    }
})


startGame.addEventListener('click', function () {
    let j = 1;
    letter = Math.floor((Math.random() * (words.length - j)));
    wordDisplay.innerHTML = `${word}`;
    bottomContent.style.visibility = 'hidden';
    let timer = document.querySelector('#timer');
    let remained = document.querySelector('.remained');
    let i = 10;
    let t = setInterval(countDown, 1000);


    wordInput.onkeydown = function keyPress(e) {
        if (e.keyCode === 13) {
            /* console.log(wordInput.value);
            console.log(wordDisplay.innerHTML); */
            if (wordInput.value == wordDisplay.innerHTML) {
                arr.push(word);
                words.splice(letter, 1);
                letter = Math.floor((Math.random() * words.length));
                word = words[letter];
                wordDisplay.innerHTML = `${word}`;
                wordInput.value = '';
                score.innerHTML = arr.length;
                j++;
            } else {
                mistake.style.visibility = 'visible';
                document.getElementById("bgaudio").pause();
                clearInterval(timer);
            }
        }
    }

    function countDown() {
        /* console.log(i); */
        timer.innerHTML = `${i} s`;

        if (i === 0) {
            // alert (`Time up, your score is ${score.innerHTML},please refresh this page to restart`);
            clearInterval(t);
            result.style.visibility = 'visible';
            resultNumber.innerHTML = `Congratulations, your score is ${arr.length},please refresh this page to restart`;
            document.getElementById("bgaudio").pause();
            /*  timer.style.visibility='hidden'; */
            remained.style.visibility = 'hidden';
            function compare(property) {
            
                return function (a, b) {
                    var value1 = a[property];
                    var value2 = b[property];
                    return value2 - value1;
                }
            }
            let arrScore = getScore().sort(compare("hits"));
            function saveScore(hits, percentage) {
                const scoreObj = {};
                scoreObj.hits = hits;
                scoreObj.percentage = percentage;
                arrScore.push(scoreObj);
            
                localStorage.setItem("scores", JSON.stringify(arrScore));
            }
            saveScore(arr.length, (arr.length / 90).toFixed(2))
            
            //Get score
            function getScore() {
                let arr = [];
                if (localStorage.getItem("scores")) {
                    arr = JSON.parse(localStorage.getItem("scores"));
                }
                return arr;
            }
            getScore()
            console.log(arrScore);
            for (let i = 0; i < arrScore.length; i++) {
                board[i].innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #${i + 1} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${arrScore[i].hits} words &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${arrScore[i].percentage}%`
            };
            
           
        }
        i--;
    };

});

closeConfirm.addEventListener('click', function () {
    mistake.style.visibility = 'hidden';
    document.getElementById("bgaudio").play();
})

resultCloseConfirm.addEventListener('click', function () {
    result.style.visibility = 'hidden';
})

var bgaudiocount = 0;
function bgaudio() {
    ++bgaudiocount;
    if (bgaudiocount % 2 == 1) {
        document.getElementById("bgaudio").play();
    } else {
        document.getElementById("bgaudio").pause();
    }
}



