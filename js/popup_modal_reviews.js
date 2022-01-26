function openModal_2() {
  document.getElementById("myModal_2").style.display = "flex";
}

$('#myModal_2').click(function(e) {
if ($(e.target).closest('.review, .prev, .next').length == 0) {
  $(this).fadeOut();
}
});

var slideIndex_2 = 1;
showSlides(slideIndex_2);

function plusSlides_2(n) {
  showSlides(slideIndex_2 += n);
}

function currentSlide_2(n) {
  showSlides(slideIndex_2 = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("review");
  if (n > slides.length) {slideIndex_2 = 1}
  if (n < 1) {slideIndex_2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex_2-1].style.display = "flex";

}
