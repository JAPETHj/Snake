const scorecard =document.querySelector(".score");
const Highscorecard =document.querySelector(".highscore");
const gamebox = document.querySelector(".game-box");
const scontrols =document.querySelectorAll("i");
const scontrols1=document.querySelector
const lives=document.querySelector(".life");
const lives1 = document.querySelector(".life1");
const score2 = document.querySelector(".score1");
const cover= document.querySelector(".cover");
let o;
var life1 =5;
var life2 =5;
let t=0;
let t1=0;
//food 
let fx=10;
let fy=14;
//randomno
let n;
//bonus
let bx=14;
let by=8;
//bomb
let ox=10;
let oy=17;
//food1
let fx1=14;
let fy1=11;
//portal
let p1x=8;
let p1y=6;

let p2x=13;
let p2y=18;
// var p=window.prompt("Enter the board size:");
// p= Number(p);
// let box =`<div class ="game-box" style="grid-template-rows: repeat(${p},1fr);
// grid-template-columns: repeat(${p},1fr);"></div>`;
// cover.innerHTML = box;
// const gamebox= document.querySelector(".game-box");
var fsound =new Audio('eating.wav');
var lifsound=new Audio('losinglife.wav');
var gover=new Audio('gameover.wav');
var btn=new Audio('click.wav');
var gam=new Audio('dark-forest.mp3');
let x;
var paused= false;
// let h1x=0;
// let h1y=0;
// let h2x=1;
// let h2y=0;
// let h3x=2;
// let h3y=0;
// let h4x=3;
// let h4y=0;

//Timer
var timeLimit=600;
const timerElement = document.querySelector(".time");
var timeremainig = timeLimit;
var f1;
var f2;
var f3;
var f4;
//snake1 coordinates
let sx=7;
let sy=6;
//snake2 coordinates
let sx1=12;
let sy1=16;
//velocity of snake
let vx=0;
let vy=0;
//velocity of snake2
let vx1=0;
let vy1=0;
//snake body
let sbody=[];
let sbody1=[];
let gOver =false;
let timeInterval1;
let timeInterval2;
// let h1=`<div class="h1" style="grid-area:${h1y}/${h1x}">&#128151;</div>`;
// let h2=`<div class="h1" style="grid-area:${h2y}/${h2x}">&#128151;</div>`;
// let h3=`<div class="h1" style="grid-area:${h3y}/${h3x}">&#128151;</div>`;
// let h4=`<div class="h1" style="grid-area:${h4y}/${h4x}">&#128151;</div>`;
//

x=window.prompt("Enter the speed: ");
x=Number(x);
//score
let score=0;
let score1=0;
//highscore element
// document.getElementById(h1).innerHTML ="&#128151" ;
// document.getElementById(h2).innerHTML ="&#128151" ;
// document.getElementById(h3).innerHTML ="&#128151" ;
// document.getElementById(h4).innerHTML ="&#128151" ;
// document.getElementById(h5).innerHTML ="&#128151" ;
let Highscore = localStorage.getItem("highscore") || 0;
Highscorecard.innerText =`High score : ${Highscore}`;
//random changing of food
// window.prompt("Enter start");
function Time(){

    timeremainig--;
    if( ((timeremainig*x)/1000) <=0){
        gover.play();
        clearInterval(timeInterval2);
        clearTimeout(timerElement);
        gOver=true;
        
    }
    timerElement.innerHTML=`${(timeremainig*x)/1000} s`;
}
const changePos =() =>{
 fx=Math.floor(Math.random()*20)+ 1;
 fy=Math.floor(Math.random()*20)+ 1;
}
const changePos1 =()=>{
    fx1=Math.floor(Math.random()*20)+ 1;
    fy1=Math.floor(Math.random()*20)+ 1;

}
const changepos2=()=>{
    bx=Math.floor(Math.random()*20)+ 1;
    by=Math.floor(Math.random()*20)+ 1;
}
const changepos3=()=>{
    ox=Math.floor(Math.random()*20)+ 1;
    oy=Math.floor(Math.random()*20)+ 1;
}
const changeDir = (e)=>{
  if(e.key === "ArrowUp" && vy!=1){
    btn.play();
     vx=0;
     vy =-1;
  }else if(e.key === "ArrowDown" && vy !=-1){
    btn.play();
    vx=0;
    vy =1;
 }else if(e.key === "ArrowRight" && vx != -1){
    btn.play();
    vx=1;
    vy=0;
 }else if(e.key === "ArrowLeft" && vx != 1){
    btn.play();
    vx=-1;
    vy=0;
 }
} 
const changeDir1 = (e1)=>{
    if((e1.key === "W" || e1.key ==="w") && vy1!=1){
      btn.play();
       vx1=0;
       vy1=-1;
    }else if((e1.key ==="s"|| e1.key === "S") && vy1!=-1){
      btn.play();
      vx1=0;
      vy1 =1;
   }else if((e1.key ==="d"|| e1.key ==="D" )&& vx1!= -1){
      btn.play();
      vx1=1;
      vy1=0;
   }else if((e1.key === "a" || e1.key ==="A" )&& vx1 != 1){
      btn.play();
      vx1=-1;
      vy1=0;
   }
  }   
scontrols.forEach( key =>
    key.addEventListener("click", ()=>changeDir({key :key.dataset.key})));
// scontrols1.forEach(key1 =>
//     key1.addEventListener("click", () =>changeDir1({key1 :key1.dataset.key1})));

const Over =()=>{
    gam.pause();
    gover.play();
    window.alert("GAME OVER");
    clearInterval(timeInterval1);
    location.reload();
}
document.addEventListener('keyup',function(e)
{
    if(e.key === "Tab"){
        if(paused){
            resumeGame();
        }else{
            pauseGame();
        }
    }
});
function pauseGame(){
   clearInterval(interval);
   paused = true;
}
function resumeGame(){
    paused = false;
    interval = setInterval(inGame,20);

}
const inGame =() =>{
// document.addEventListener('keyup',function(e)
// {
//     if(e.which ===32){
//         if(paused){
//             resumeGame();
//         }else{
//             pauseGame();
//         }
//     }
// });
function pauseGame(){
    clearInterval(interval);
    paused = true;
 }
 function resumeGame(){
     paused = false;
     interval = setInterval(inGame,20);
 
 }
    Time();
    
    
    if (gOver) {
        gover.play();
        return Over();
    }

let Food= `<div class="food" style="grid-area:${fy} / ${fx}; font-size:20px; ">&#128000;</div>`;
Food+= `<div class="portal" style="grid-area:${p1y}/${p1x}; font-size:20px;">&#11093;</div>`;

Food+= `<div class="portal1" style="grid-area:${p2y}/${p2x}; font-size:20px;">&#11093;</div>`;       
Food+=`<div class ="food1" style="grid-area:${fy1} /${fx1}; font-size:20px;">&#128001;</div>`;

n= Math.floor(Math.random()*3);
o= Math.floor(Math.random()*3);
if (n==1) {
    Food+=`<div class ="bonus1" style="grid-area:${by} /${bx}; font-size:20px;">&#128007;</div>`;
}
if(o==2) {
    Food+=`<div class ="obstacle" style="grid-area:${oy} /${ox}; font-size:20px;">&#127797;</div>`;
   

}   
   if((sx===fx && sy === fy)){
            fsound.play();
             changePos();
             
            sbody.push([fy,fx]);
            score+=1;
        if(score >= Highscore){
                Highscore =score;
         }
            localStorage.setItem('highscore',Highscore);
            scorecard.innerText =`Score : ${score}`;
            Highscorecard.innerText =`High score : ${Highscore}`;
        }
    
    
    if((sx===bx && sy === by)){
        fsound.play();
         changepos2();
         
        sbody.push([by,bx]);
        score+=3;
    if(score >= Highscore){
            Highscore =score;
     }
        localStorage.setItem('highscore',Highscore);
        scorecard.innerText =`Score : ${score}`;
        Highscorecard.innerText =`High score : ${Highscore}`;
    }
     
   
    sx+=vx;
    sy+=vy;
    for (let i = sbody.length -1 ; i >0; i--) {
        sbody[i] = sbody[i-1];
            
    }
      
    sbody[0] =[sx,sy];
    
    if (sx== ox && sy==oy) {
        t=1;
        Life();
    }

    if(sx > 20 || sx<=0 ||sy>20 || sy<=0){
        t=1;
       Life();
    } 
    if(sx === p1x && sy === p1y){
        sx=p2x;
        sy=p2y;
    }
    else if(sx === p2x && sy === p2y){
        sx=p1x;
        sy=p1y;
    }
if ((sx > 20 || sx<=0 ||sy>20 || sy<=0)) {
    sx=7;
    sy=6;
}
if(life1 ===0 && (sx > 20 || sx<=0 ||sy>20 || sy<=0)) {
    lifsound.play();
    gOver=true;}
    for (let i = 0; i < sbody.length; i++) {
        
        Food+= `<div class="head" style="grid-area:${sbody[i][1]} / ${sbody[i][0]} "></div>`;
        
            if( i!== 0 &&  sbody[0][1] === sbody[i][1] && sbody[0][0] === sbody[i][0] ){
                lifsound.play();
                t=1;
                Life();
              if(life1 ===0 || life2 ===0){
              gOver =true;
            }
        }
    } 
    if(life1 === 0){
        gOver =true;
    }
    if(sx1===fx1 && sy1 === fy1){
        fsound.play();
         changePos1();
        sbody1.push([fy1,fx1]);
        score1+=1;
    if(score1>= Highscore){
            Highscore =score1;
     }
        localStorage.setItem('highscore',Highscore);
        score2.innerText =`Score 2 : ${score1}`;
        Highscorecard.innerText =`High score : ${Highscore}`;
    }


if(sx1===bx && sy1 === by){
    fsound.play();
     changepos2();
    sbody1.push([by,bx]);
    score1+=3;
if(score1>= Highscore){
        Highscore =score1;
 }
    localStorage.setItem('highscore',Highscore);
    score2.innerText =`Score 2 : ${score1}`;
    Highscorecard.innerText =`High score : ${Highscore}`;
}

sx1+=vx1;
sy1+=vy1; 

for (let j = sbody1.length -1 ; j >0; j--) {
    sbody1[j] = sbody1[j-1];
        
}
  
sbody1[0] =[sx1,sy1];

if(sx1 > 20 || sx1<=0 ||sy1>20 || sy1<=0){
   
    t1=1;
   Life1();
} 
if(sx1 === p1x && sy1 === p1y){
    sx1=p2x;
    sy1=p2y;
}
else if(sx1 === p2x && sy1 === p2y){
    sx1=p1x;
    sy1=p1y;
}
if ((sx1 > 20 || sx1<=0 ||sy1>20 || sy1<=0)) {
sx1=12;
sy1=16;
}
if(life2 ===0 && (sx1 > 20 || sx1<=0 ||sy1>20 || sy1<=0)) {
lifsound.play();
gOver=true;}
for (let j = 0; j < sbody1.length; j++) {
    
    Food+= `<div class="head1" style="grid-area:${sbody1[j][1]} / ${sbody1[j][0]} "></div>`;
    
        if( j!== 0 &&  sbody1[0][1] === sbody1[j][1] && sbody1[0][0] === sbody1[j][0] ){
            lifsound.play();
            t1=1;
            Life1();
          if(life2 ===0 || life1 ===0){
          gOver =true;
        }
    }
} 


   if(life2===0){
    gOver=true;
   }
    
    
    gamebox.innerHTML =Food;

     

}
timeInterval2 =setInterval(Life,1000);
function Life(){
   
    life1=life1-t;
    
    
    t=0;
    console.log(life1);
   
    
    lives.innerHTML=`Live 1:${life1}`;
}
function Life1(){
     life2=life2-t1;
     t1=0;
     console.log(life2);
     lives1.innerHTML=`Life 2:${life2}`
}
changePos();
changePos1();
changepos2();
changepos3();
interval = setTimeout(paused,1000);

timeInterval2=setTimeout(Time,1000);

timeInterval1 =setInterval(inGame,200);

document.addEventListener("keydown",changeDir);
document.addEventListener("keydown",changeDir1);
