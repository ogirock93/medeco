function openModal_2() {
  document.getElementById("myModal_2").style.display = "flex";
}

$('#myModal_2').click(function(e) {
if ($(e.target).closest('.review, .prev, .next').length == 0) {
  $(this).fadeOut();
}
});

var slideIndex_2 = 1;
showSlides_2(slideIndex_2);

function plusSlides_2(r) {
  showSlides_2(slideIndex_2 += r);
}

function currentSlide_2(r) {
  showSlides_2(slideIndex_2 = r);
}

function showSlides_2(r) {
  var ir;
  var slides = document.getElementsByClassName("review");
  if (r > slides.length) {slideIndex_2 = 1}
  if (r < 1) {slideIndex_2 = slides.length}
  for (ir = 0; ir < slides.length; ir++) {
      slides[ir].style.display = "none";
  }

  slides[slideIndex_2-1].style.display = "flex";

}
