/* Desarrollar un video que cuando entre al foco de la ventana reproducir, cuando lo pierda se detenga.

Adicional a esto, cuando el video se encuentre reproduciendo y se cambie de pestaña, detener el video.*/

const d = document, w = window;

export default function smartVideo(id) {
  const $videos = d.querySelectorAll("video[data-smart-video]");

  const cb = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.play();
      }else{
        entry.target.pause();
      }

       w.addEventListener("visibilitychange", (e) =>{
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause();
    });
    });
    
   
  }

  const observer = new IntersectionObserver(cb,{threshold: 0.5});

  $videos.forEach((el) => observer.observe(el));
}