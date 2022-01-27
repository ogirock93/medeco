
  function openModal() {
    document.getElementById("myModal").style.display = "flex";
  }

  $('#myModal, #myModal_2').click(function(e) {
  if ($(e.target).closest('.review, .popup_our_work, .prev, .next').length == 0) {
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








  function openModal_2() {
    document.getElementById("myModal_2").style.display = "flex";
  }



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
