import hamburguerMenu from "./menu_hamburguer.js";
import {alarm, digitalClock} from "./clock.js";
import {moveBall, shortcuts} from "./teclado-pelota.js";
import countdown from "./countdown.js";
import scrollTop from "./boton_up.js";
import darkTheme from "./dark_theme.js";
import responsiveMedia from "./contenido_responsive.js";
import abrirVentana from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_de_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webcam from "./deteccion_webcam.js";
import getGeolocation from "./geolocation.js";
import searchFilters from "./filtros_busqueda.js";
import sorteoDigital from "./sorteo_digital.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_spy.js";
import smartVideo from "./video_inteligente.js";


const d = document;

d.addEventListener("DOMContentLoaded",(e) =>{
  hamburguerMenu(".panel-btn",".panel",".menu a");
  digitalClock("#clock","#startClock","#stopClock");
  alarm("../media/sonar.mp3","#startAlarm","#stopAlarm");
  countdown("countdown","Oct 24, 2020 13:07:00","Fin del Juego");
  scrollTop(".scrollTop-btn","600");
  responsiveMedia("youtube","(min-width: 1024px)",`<a href="https://youtu.be/6IwUl-4pAzc" target= "_blank" rel="noopener">Ver video</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  responsiveMedia("gmaps","(min-width: 1024px)",`<a href="https://goo.gl/maps/xppFFwtrLsA7kfQa9" target= "_blank" rel="noopener">Ver mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661630927099!2d-99.16978803574074!3d19.427020586887433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1603385698945!5m2!1ses!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);
  abrirVentana("formResponsive");
  userDeviceInfo("user-device");
  webcam("webcam");
  getGeolocation("geolocalizacion");
  searchFilters(".card-filter",".card");
  sorteoDigital(".player","#obtenerGanador");
  slider();
  scrollSpy();
  smartVideo();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e,".ball",".box");
});

darkTheme(".darkTheme-btn","dark-mode");
networkStatus();