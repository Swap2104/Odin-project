var carousel = document.getElementById("carousel");
let cards = document.getElementsByClassName('cards')

window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) carousel.scrollLeft += 100;
  else carousel.scrollLeft -= 100;
});

let para = document.getElementById('para')

  
if (cards.length < 1) {
  para.textContent = "No books entered yet!"
  carousel.className='para-style'
} else {

}