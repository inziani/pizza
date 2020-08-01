let openNavClick=document.querySelector('.nav-slider');
let closeNavClick=document.querySelector('.close-nav-slider');
let navSliderSection=document.querySelector('.nav-slider-section');

openNavClick.onclick=function(){
  navSliderSection.classList.remove('closeNav');
  navSliderSection.classList.add('openNav');
}
closeNavClick.onclick=function(){
  navSliderSection.classList.remove('openNav');
  navSliderSection.classList.add('closeNav');
}