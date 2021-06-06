

 const burgerDiv = document.querySelector('.burger')
 const burgerImg = document.querySelector('#burgerImg')
 let openClose = true;
 const ul = document.querySelector('.navBarLinks') 

 burgerDiv.addEventListener('click' , imgChange = (e) => {
     if(openClose == true){
         burgerImg.src = "main/img/open.svg"
         ul.style.left = "0"
         openClose = false;
     }
     else if (openClose == false){
        burgerImg.src = "main/img/unOpen.svg"
        ul.style.left = "100vw"
        openClose = true;
     }
 })

 console.log(burgerImg.src)
