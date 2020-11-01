const d = document, w = window;

export default function scrollTop(button,medida) {
  const $scrollBtn = d.querySelector(button);

  
  w.addEventListener("scroll", e => {
    let $scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    if($scrollTop > medida){
      $scrollBtn.classList.remove("hidden");
    }else{
      $scrollBtn.classList.add("hidden");
    }
    //console.log(w.pageYOffset, d.documentElement.scrollTop);
  });

  d.addEventListener("click", e => {
    if(e.target.matches(button)){
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      })
    }
  }); 
}