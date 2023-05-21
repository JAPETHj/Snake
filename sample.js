var size =25;
var rows = 20;
var columns = 20;
//snake game
var game;
var obj;
//snakehead
var sx=size *2;
var sy= size*1;
//food
var fx;
var fy;
//snakebody multiple x,y coordinate as 2d list
var sbody= [];
//snake velocity
var vx=0;
var vy=0;

var x;
var gOver =false;
window.onload = function(){
    x=document.getElementById("score");
    game =document.getElementById("game");
    game.height= rows * size;
    game.width= columns * size;
    obj = game.getContext("2d");
    food();
    document.addEventListener("keyup",changeDirection);
    //Play();
    setInterval(Play, 1000/10);
}

function Play(){
    if (gOver){
        return;
    }
    obj.fillStyle="black";
    obj.fillRect(0,0,game.width,game.height);
    
    obj.fillStyle ="blue";
    obj.fillRect(fx,fy,size,size);

    if(sx==fx && sy==fy){
        x=
        sbody.push([fx,fy])
        food();
    }

    for(let i= sbody.length -1;i>0;i--){
       sbody[i]=sbody[i-1] ;
    }
    if(sbody.length){
        sbody[0]=[sx,sy];
    }

    obj.fillStyle ="lime";
    sx+=vx*size;
    sy+=vy*size;
    obj.fillRect(sx,sy,size,size);
    for(i=0;i<sbody.length;i++){
        obj.fillRect(sbody[i][0], sbody[i][1],size,size);
    }
    if(sx<0 || sx>=columns*size || sy<0 || sy>= rows*size){
        gOver=true;
        alert("game over");
    } 
    for(let i=0;i<sbody.length;i++){
        if(sx==sbody[i][0] && sy==sbody[i][1]){
            gOver=true;
            alert("game over");
        }
    }
   

}
function changeDirection(key){
    if(key.code == "ArrowUp" && vy != 1){
        vx=0;
        vy=-1;
       
    }
    else if(key.code == "ArrowDown" && vy !=-1){
        vx=0;
        vy=1;
       
    }
    else if(key.code == "ArrowLeft" && vx !=1){
        vx=-1;
        vy=0;
       
    }else if(key.code == "ArrowRight"&& vx !=-1){
        vx=1;
        vy=0;
    }


}

function food(){
    fx=Math.floor(Math.random()* columns)* size;
    fy=Math.floor(Math.random()* rows)* size;
}    