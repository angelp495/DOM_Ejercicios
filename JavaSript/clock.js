const d =document;

export function digitalClock(clock,start,stop) {
  let clockTempo;

  d.addEventListener("click",e => {
    if(e.target.matches(start)){
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
        d.querySelector("#clock>h3").style.opacity = 0.8;
        

      }, 1000);
      e.target.disabled = true;
      e.target.style.opacity = 0.2;
    };

    if(e.target.matches(stop)){
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = `<h3>00:00:00</h3>`;
      d.querySelector(start).disabled = false;
      d.querySelector(start).style.opacity = 0.95;
    }
  });
}


export function alarm(audio,start,stop){
  let clockTempo;
  const $alarm = d.createElement("audio");
  $alarm.src = audio;

  d.addEventListener("click", e =>{
    if(e.target.matches(start)){
      clockTempo = setTimeout(() => {
        $alarm.play();
      }, 3000);
      e.target.disabled = true;
      e.target.style.opacity = 0.2;
    }

    if(e.target.matches(stop)){
      clearTimeout(clockTempo);
      $alarm.pause();
      d.querySelector(start).disabled = false;
      d.querySelector(start).style.opacity = 0.95;
    }
  });
}