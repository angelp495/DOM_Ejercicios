const d = document;

export default function searchFilters(input,selector) {

  d.addEventListener("keyup", (e) => {
    if(e.target.matches(input)){
      //console.log(e.key);
      //console.log(e.target.value)
      if(e.key === "Escape") e.target.value ="";

      d.querySelectorAll(selector).forEach((element) =>
        element.textContent.toLowerCase().includes(e.target.value)
         ? element.classList.remove("filter")
         : element.classList.add("filter")
      );
    }
  });
}
