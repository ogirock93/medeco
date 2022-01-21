$(document).ready(function(){


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
    infinite: true,
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
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
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
  $(".open").click(function () {
      $(".open").hide()
      $(".close_menu, .mobile_menu").show()
      $('body').addClass("lock")
      $('header').addClass("active");
  });

  $(".close_menu").click(function () {
      $(".close_menu, .mobile_menu").hide()
      $(".open").show()
      $('body').removeClass("lock");
      $('header').removeClass("active");
  });
})
// script end
