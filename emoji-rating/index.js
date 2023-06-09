const emojisEl = document.querySelectorAll(".fa-regular");
const starsEl = document.querySelectorAll(".fa-star");
const colorArray = ['red','orange','lightblue','lightgreen','green'];

updateRating(0);


starsEl.forEach((element,index) => element.addEventListener('click',()=>{
  updateRating(index)
}));

function updateRating(index){
  starsEl.forEach((element,idx) => {
    if(idx < index + 1){
      element.classList.add("active");
    }
    else{
      element.classList.remove("active");
    }
  });
  
emojisEl.forEach(emojiEl => {
  emojiEl.style.transform = `translateX(-${index * 50}px)`;
  emojiEl.style.color = colorArray[index];
})
}