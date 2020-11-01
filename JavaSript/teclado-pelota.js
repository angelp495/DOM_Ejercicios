const d = document;
let x=0,y=0;

export function moveBall(e,ball,box) {
  const $ball = d.querySelector(ball), $stage = d.querySelector(box),limitsBall = $ball.getBoundingClientRect(),limitStage = $stage.getBoundingClientRect();

  switch (e.keyCode) {
    case 37:
      //left
      e.preventDefault();
      if(limitsBall.left > limitStage.left) x--;
      break;
    case 38:
      //up
      e.preventDefault();
      if(limitsBall.top > limitStage.top) y--;
      break;
    case 39:
      //right
      e.preventDefault();
      if(limitsBall.right < limitStage.right) x++;
      break;
    case 40:
      //down
      e.preventDefault();
      if(limitsBall.bottom < limitStage.bottom) y++;
      break;
  
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`
}
export function shortcuts(e) {
  if(e.key === "a" && e.altKey){
    alert("Haz lanzado una alerta con el teclado");
  }

  if(e.key === "p" && e.altKey){
    prompt("Haz lanzado un prompt con el teclado");
  }

  if(e.key === "c" && e.altKey){
    confirm("Haz lanzado un confirm con el teclado");
  }
}