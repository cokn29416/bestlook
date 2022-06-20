const navSlide = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu');


  burger.addEventListener('click', () => {
    //Toggle nav
    nav.classList.toggle('nav-active');

    // Animation links
    navLinks.forEach((link,index) => {
      if(link.style.animation){
        link.style.animation = '';
      }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    //Burger Animatione
    burger.classList.toggle('toggle');
  });

}

navSlide();
//Buger menu//



//Slide//
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 2){
    counter = 1;
  }
}, 4000);
