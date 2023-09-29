var carousel = document.getElementById("carousel");
let cards = document.getElementsByClassName('cards')
let button = document.getElementById('btn')
let form = document.getElementById('form')
let para = document.getElementById('para')

window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) carousel.scrollLeft += 100;
  else carousel.scrollLeft -= 100;
});


if (cards.length < 1) {
  para.textContent = "No books entered yet!"
  carousel.className = 'para-style'
} else {
  para.remove()
}


button.addEventListener('click', () => {
  // para.className="hidden"
  // form.classList.remove("hidden")
  hideForm()
})

function hideForm() {
  if (form.style.display === "none") {
    form.style.display = "flex";
    para.className = "hidden"
  } else {
    form.style.display = "none";
    para.classList.remove("hidden")
  }
}