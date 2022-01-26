
  function openModal() {
    document.getElementById("myModal").style.display = "flex";
  }

  $('#myModal').click(function(e) {
  if ($(e.target).closest('.popup_our_work, .prev, .next').length == 0) {
    $(this).fadeOut();
  }
});

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("popup_our_work");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "flex";

  }
