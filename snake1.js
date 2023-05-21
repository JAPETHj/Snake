var SnakeArr=[{x:15,y:12}];
var Foods=[{x:18,y:17},{x:14,y:4},{x:8,y:6},{x:3,y:6}]
foods[0].x=Math.ceil(Math.random()*17);
foods[0].y=Math.ceil(Math.random()*17);

foods[1].x=Math.ceil(Math.random()*19);

foods[1].y=Math.ceil(Math.random()*19);

foods[2].x=Math.ceil(Math.random()*19);

foods[2].y=Math.ceil(Math.random()*19);
foods[3].x=Math.ceil(Math.random()*19);

foods[3].y=Math.ceil(Math.random()*19);
var board= document.getElementById("board");
var snake=board.classList.add(head);
board.innerHTML=SnakeArr;

