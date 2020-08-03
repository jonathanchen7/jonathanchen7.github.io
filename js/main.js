$(document).ready(function () {
    $(window).scroll(function () {
        var light_pos = $('#projects').offset().top;
        var light_height = $('#projects').height();
        var scroll = $(window).scrollTop() + 30;

        if (scroll > light_pos && scroll < (light_pos + light_height)) {
            $('nav').addClass('color-black');
            $('nav').removeClass('color-white');
        } else {
            $('nav').removeClass('color-black');
            $('nav').addClass('color-white');
        }

    })
})

$(document).ready(function () {
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        focusOnSelect: true,
        dots: true,
        initialSlide: 1,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 900,
              settings: {
                arrows: false,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    });
});