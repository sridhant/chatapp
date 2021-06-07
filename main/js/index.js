

 const burgerDiv = document.querySelector('.burger')
 const burgerImg = document.querySelector('#burgerImg')
 let openClose = true;
 const ul = document.querySelector('.navBarLinks') 
 const audioSrc = document.querySelector('#audioSrc')

 burgerDiv.addEventListener('click' , imgChange = (e) => {
     if(openClose == true){
         burgerImg.src = "main/img/open.svg"
         ul.style.display = "block"
         ul.style.left = "0"
         ul.setAttribute('class' , 'navBarLinks animate__animated animate__bounceInDown')
         openClose = false;
         if(audioSrc.paused){
             audioSrc.play()
         }
     }
     else if (openClose == false){
        burgerImg.src = "main/img/unOpen.svg"
        ul.style.display = "none"
        ul.style.left = "100vw"
        openClose = true;    
        if(audioSrc.paused){
            audioSrc.play()
        }
     }
 })


 //typing
 var typed = new Typed('#typed', {
    strings: [
        'App', 
        'Software',
        'Program',
    ],
    smartBackspace: true ,
    loop : true,
    typeSpeed: 100,
    backSpeed: 100,
  });
