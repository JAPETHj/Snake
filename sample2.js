document.addEventListener('DOMLoadedContent', ()=>{
    const sq = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const start = document.querySelector(".start")
  
  const width=10;
  let curIndex =0;
  let foodIndex =0;
  let curSnake =[2,1,0];
  
  let dir = 1;
  let score= 0;
  let speed =0.9;
  let intervalTime = 0;
  let interval = 0;
  
  function startGame() {
      curSnake.forEach(index => sq[index].classList.remove('snake'))
      sq[foodIndex].classList.remove('food')
      clearInterval(interval)
      score= 0
  
      dir =1
      scoreDisplay.innerText= score
      intervalTime =1000
      curSnake=[2,1,0]
      curIndex = 0
      curSnake.forEach(index =>sq[index].classList.add('snake'))
      interval = setInterval(mOut,intervalTime)
  }
  function mOut(){
      if((curSnake[0] + width >= (width*width) && dir === width)||
       (curSnake[0]% width === width-1 && dir === 1 ) ||
       (curSnake[0]% width === 0 && dir === -1)||
       (curSnake[0]-width < 0 && dir === -width)||
       sq[curSnake[0] + dir].classList.contains('snake')
      ){
          return clearInterval(interval)
      }
      const snaketail=curSnake.pop()   
      sq[snaketail].classList.remove('snake')
      curSnake.unshift( curSnake[0] + dir)
      if(sq[curSnake[0]] .classList.contains('food')){
         sq[curSnake[0]].classList.remove('food') 
         sq[snaketail].classList.add('snake')
         curSnake.push(snaketail)
         Random()
         score++
         scoreDisplay.textContent =score
         clearInterval(interval)
         intervalTime =intervalTime * speed
         interval = setInterval(mOut,intervalTime)
      }
    sq[curSnake[0]].classList.add('snake')
      
  } 
  function Random(){
      do{
          foodIndex =Math.floor(Math.random()* sq.length)
      }while(sq[foodIndex].classList.contains('snake'))
      sq[foodIndex].classList.add('food')
  }
  
  function changeDir(e){
      sq[curIndex].classList.remove('snake')
      if(e.keycode === 39){
          dir=1
      } else if(e.keycode =38){
         dir=-width
      } else if(e.keycode = 37){
         dir =-1
      } else if(e.keycode = 40){
          dir=+width;
      }
  }   
  document.addEventListener('keyup',changeDir)
  startBtn.addEventListener('click',startGame)
  })