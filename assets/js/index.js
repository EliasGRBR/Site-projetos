window.onload = () =>{
const timer = ms => new Promise(res => setTimeout(res, ms))

async function fadeIn (elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
    elements[i].classList.add("fadeIn");
    await timer(1000);
  }
}
    elements = document.querySelectorAll(".card");
    fadeIn(elements);
}