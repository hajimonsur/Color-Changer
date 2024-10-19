// handle click to change color event //


   const colorBoxElem = document.getElementById('colorBox');
   const changeBtnElem = document.getElementById('changeBtn');

   changeBtnElem.addEventListener('click', () => {
       const randomColor = Math.floor(Math.random()*123456789);
       colorBoxElem.style.backgroundColor = `#${randomColor}`;
      
       console.log(randomColor)
     

   })




