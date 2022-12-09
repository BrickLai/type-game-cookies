<h2>Last Minute Type Game</h2>

<li>Introduction - the aim of the webpage</li>
<li>Technologies</li>
<li>Key Code</li>
<li>Launch</li>

<h3>Introduction - the project's aim</h3>
<p>
    This is a type game, which users could input the word displayed to get more score in 90 seconds. At the bottom, there is an intro button for users to get the basic information about this game. When users click the start button, the count down will begin, and users will get their score on the right when they hit the right word.
</p>


<h3>Technologies</h3>
<li>HTML5</li>
<li>CSS3</li>
<li>Git</li>

<h3>key Code</h3>

```
var bgaudiocount = 0;
function bgaudio(){       
    ++bgaudiocount;
    if(bgaudiocount % 2 == 1){   
        document.getElementById("bgaudio").play();      
    }else{
        document.getElementById("bgaudio").pause();
    } 
}
```

<h3>Launch</h3>
<a href="https://bricklai.github.io/type-game-cookies/">Click here</a> to play.

