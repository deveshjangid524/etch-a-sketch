const btn=document.getElementById('btn');
btn.addEventListener('click',function(){
  const num=  prompt("Enter a number between 1 and 100");
  const Pnum=parseInt(num);
  if(!isNaN(Pnum) && Pnum> 0&& Pnum<=100){
    createGrid(Pnum);
  }
  else {
    alert('Please enter a valid Number greater than 0');
  }
});

function createGrid(sps){
    
    gridContainer.innerHTML='';
    const gridItemSize= 960/ sps;
    for(let i=0;i<sps *sps ;i++){
        const gridItem=document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${gridItemSize}px`;
        gridItem.style.height = `${gridItemSize}px`;
        gridContainer.appendChild(gridItem);
    }
}


const gridContainer=document.querySelector('.container');




for(let i=0;i< 800;i++){
    const gridItem=document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.addEventListener('mouseover',function(){
        gridItem.style.backgroundColor='#ff6666';
    });
    gridItem.addEventListener('mouseout',function() {
        gridItem.style.backgroundColor= 'antiqueWhite';
    });
    gridContainer.appendChild(gridItem);
}
