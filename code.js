let color = "black";
document.addEventListener('DOMContentLoaded',function(){
  createBoard(32);

  let selectBtn=document.getElementById("popup");
  selectBtn.addEventListener('click',function(){
    let newSize=getSize();
    createBoard(newSize);
  });
  let blackBtn=document.querySelector("#Black");
  blackBtn.addEventListener("click",function(){
     color='black';
  })
  let randomBtn=document.querySelector("#Random");
  randomBtn.addEventListener("click",function(){
    color='#' + Math.floor(Math.random()*16777215).toString(16);
  })

  let resetBtn=document.querySelector("#Reset");
  resetBtn.addEventListener("click",function(){
    let divs=document.querySelectorAll(".grid-item");
    divs.forEach((div) => div.style.backgroundColor='white');
  })

}
)

function createBoard(size){
  let board=document.querySelector(".container");
  board.innerHTML='';
  for(let i=0;i<size*size;i++){
      let newGrid=  document.createElement('div');
      newGrid.classList.add('grid-item');
      newGrid.style.width=`${500/size}px`;
      newGrid.style.height=`${500/size}px`;
      newGrid.addEventListener('mouseover',function(){
        newGrid.style.backgroundColor=color;
      })
      board.appendChild(newGrid);
  }
}

function getSize(){
  let input=parseInt(prompt("Enter a number for the size"));
  let message=document.getElementById("message");
  if(input==""){
    message.innerHTML="Please provide a number";
  }
  else if(input<0 || input>200){
    message.innerHTML="Provide a number between 1 and 200";
  }
  else {
    message.innerHTML="Now you play";
    return input;
  }
  
}