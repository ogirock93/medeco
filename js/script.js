$(document).ready(function(){


  $('.slider_screen_1').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   infinite: false,
   fade: true,
   swipe: false,
   asNavFor: '.table-row_slider',
   speed: 300,
   responsive: [
    {
       breakpoint: 768,
       settings: {
         autoplay: true,
         swipe: true,
         autoplaySpeed: 5000,
       }
     },
   ]

 });
 $('.table-row_slider').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.slider_screen_1',
   dots: false,
   infinite: false,
   swipe: false,
   centerMode: true,
   focusOnSelect: true
 });


  // initalize popup
  $('.popup_work').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: false,
  });
  $(document).on('click', '.popup-dismiss ,.popup-dismiss_mob', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });



if ($(".popup_1").length > 0){
  $('.popup_1').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: false,
  });
  $(document).on('click', '.popup-dismiss ,.popup-dismiss_mob', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
}
})


$(document).ready(function(){

  var $slider = $('.slider');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.slider__label' );

  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;

    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );

    $progressBarLabel.text( calc + '% completed' );
  });
  $('.slider').slick({
    arrows:false,
    infinite: false,
    slidesToShow:4,
    responsive: [
     {
        breakpoint: 1200,
        settings: {
          arrows:false,
          slidesToShow:3,
        }
      },
      {
         breakpoint: 991,
         settings: {
           arrows:false,
           slidesToShow:2,
         }
       },
       {
          breakpoint: 560,
          settings: {
            arrows:true,
            slidesToShow:1,
          }
        },
    ]
  });


  $('.slider_reviews').slick({
    arrows:true,
    infinite: false,
    speed: 300,
    slidesToShow: 2.5,
    centerMode: false,
    variableWidth: false,
    responsive: [
     {
        breakpoint: 1200,
        settings: {
          arrows:true,
        }
      },
      {
         breakpoint: 768,
         settings: {
           arrows:true,
           slidesToShow: 1,
           variableWidth: false,
         }
       },
    ]
  });

if ($("#contact_form").length > 0){
    $("#contact_form").validate({
    rules: {
      first_name: {
         required: true,// "required",
         minlength: 2,
         maxlength: 30,
      },
      last_name: {
         required: true,// "required",
         minlength: 2,
         maxlength: 30,
      },
      phone: {
         required: true,// "required",
      },
      email: {
        email: true,
        required: true
      },
      servise: {
        required: true
      }
    },
    messages: {
      first_name: "Некорректно введены данные",
      last_name: "Некорректно введены данные",
      phone: "Некорректно введены данные",
      email: "Некорректно введены данные",
      servise: "Некорректно введены данные",
    }
  });

  $("input[type='tel']").mask("+38 (099)-999-99-99");

  $('#contact_form button').click(function(e){
    e.preventDefault();
    if ($('#contact_form').valid()){
      location.href="#";
      // me=$('#contact_form')
      // $.ajax({
      //   type: "POST",
      //   data: me.serialize(),
      //   success: function (data) {
      //    me.find('.succ').slideDown(200)
      //     setTimeout(function(){
      //       me.find('.succ').slideUp(200)
      //     },5000)
      //     me.trigger('reset')
      //   }
      // })
      // return false;
    }
  })
}
})

// script burger
$(document).ready(function () {
  $(".buger_btn").click(function (event) {
    $('body').toggleClass("lock")
    $('.mobile_heading').toggleClass("active");
    $('.mobile_menu').slideToggle(200);
   $('.header_mobile').toggleClass("active");
   $('.buger_btn span').toggleClass("open");
    });

$(".menu-item-has-children").click(function (event) {
  $('.sub-menu').slideDown();
  $('.buger_btn span').toggleClass("active_sub");
  });

  jQuery(function($){
    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        var block = $(".menu-item-has-children"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
              // если условия выполняются - скрываем наш элемент
            $('.sub-menu').slideUp()
        }
    });
  });

})
// script end

// script btn_fix
$(document).ready(function () {
  $(".call_btn").click(function () {
    $('.call_btn').addClass("click")
    $('.form_call_white').show()
  });


  $(".chat_btn").click(function () {
    $('.chat_btn').addClass("click")
    setTimeout(function(){
    $('.chat_windows').slideDown(200)
  },500)
  });

  $(".close_chat").click(function (e) {
    $('.chat_windows').slideUp(200)
    setTimeout(function(){
    $('.chat_btn').removeClass("click")
    },500)
    e.stopPropagation()

    return false
  });

})


jQuery(function($){
  $(document).click(function (e){ // отслеживаем событие клика по веб-документу
      var block = $(".call_btn"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
      if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
          && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
          $('.call_btn').removeClass("click") // если условия выполняются - скрываем наш элемент
          $('.form_call_white').hide()
      }
  });
});




jQuery(function($){
  $(document).click(function (e){ // отслеживаем событие клика по веб-документу
      var block = $(".chat_btn"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
      if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
          && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
          $('.chat_windows').slideUp(200)
          setTimeout(function(){
          $('.chat_btn').removeClass("click")
          },500)
            // если условия выполняются - скрываем наш элемент
      }
  });
});
// script_fix end
