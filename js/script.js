$(document).ready(function()
  {$('.slider').slick({
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
})
