import './../css/style.css'
import '../css/style.sass'
import icono from './../images/logo.svg';
import imgWorking from './../images/illustration-working.svg';

const logo = document.querySelector('.logo').src = `${icono}`;
const working = document.querySelector('.working').src = `${imgWorking}`;
const iconNav = document.querySelector('.icon-nav');
const nav = document.querySelector('.container-nav');
const closeNav = document.querySelectorAll('.close_nav');

iconNav.addEventListener('click', function(e){
    nav.style.transition = "all .8s";
    nav.classList.toggle('vista');
});

closeNav.forEach(function(element){
    element.addEventListener('click', function(e){
        nav.classList.remove('vista');
    });
});

let altoPantalla = window.screen.height;
let anchoPantalla = window.screen.width;

let anchoImagen = 733; 
let altoImagen = 482; 

let anchoActual;
let altoActual;
