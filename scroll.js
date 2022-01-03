const parrafoheader = document.getElementById('parrafoheader');
const botonheader = document.getElementById('botonheader');
const knowanime = document.getElementById('knowanime');
const titleaboutanime = document.getElementById('title-aboutanime');
const parrafoaboutanime = document.getElementById('parrafo-aboutanime');
const buttonleanmoreanimete = document.getElementById('button-leanmore-animete');
const videoaboutanime = document.getElementById('video-about-anime');
const ourtablet=document.getElementById('our-tablet');
const knowdesktop=document.getElementById('know-desktop');
const titledesktopabout=document.getElementById('title-desktop-about');
const parrafodesktopabout=document.getElementById('parrafo-desktop-about');
const videodesktopabout=document.getElementById('video-desktop-about');
const learnmoredesktop=document.getElementById('learn-more-desktop');
const servicestitle=document.getElementById('services-title');
const servicestitlee=document.getElementById('services-title2');
const itemservicestablet=document.getElementById('item-services-tablet');
const article1projectsmobilescroll=document.getElementById('article1-projects-mobile-scroll');
const article2projectsmobilescroll=document.getElementById('article2-projects-mobile-scroll');
const itemprojectstabletscroll=document.getElementById('item-projects-tablet-scroll');
const article2scroll=document.getElementById('article-2-scroll');
const article3scroll=document.getElementById('article-3-scroll');
const itemservicesdesktopscroll=document.getElementById('item-services-desktop-scroll');
const itemprojectsdesktopscroll=document.getElementById('item-projects-desktop-scroll');

const accion = ( elementos, observador) =>{
    
        elementos.forEach((elemento) =>{
           if(elemento.isIntersecting){
               elemento.target.classList.add("anime");
           } 
        });
            
    }

const observador = new IntersectionObserver(accion, {
   root:null,
   rootMargin: '0px',
   threshold: 0.5
});

observador.observe(parrafoheader);
observador.observe(botonheader);
observador.observe(knowanime);
observador.observe(titleaboutanime);
observador.observe(parrafoaboutanime);
observador.observe(buttonleanmoreanimete);
observador.observe(videoaboutanime);
observador.observe(ourtablet);
observador.observe(knowdesktop);
observador.observe(titledesktopabout);
observador.observe(parrafodesktopabout);
observador.observe(videodesktopabout);
observador.observe(learnmoredesktop);
observador.observe(servicestitle);
observador.observe(servicestitlee);
observador.observe(itemservicestablet);
observador.observe(article1projectsmobilescroll);
observador.observe(article2projectsmobilescroll);
observador.observe(itemprojectstabletscroll);
observador.observe(article2scroll);
observador.observe(article3scroll);
observador.observe(itemservicesdesktopscroll);
observador.observe(itemprojectsdesktopscroll);