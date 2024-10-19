// dom content loaded
document.addEventListener('DOMContentLoaded', () => {
   const colorBoxElem = document.getElementById('colorBox');
   const changeBtnElem = document.getElementById('changeBtn');

   changeBtnElem.addEventListener('click', () => {
       const randomColor = Math.floor(Math.random()*123456789);
       colorBoxElem.style.backgroundColor = `#${randomColor}`;
       console.log(randomColor)
     

   })
});

// const randomColor = Math.floor(Math.random()*16777215).toString(16);
// colorBoxElem.style.backgroundColor = `#${randomColor}`;