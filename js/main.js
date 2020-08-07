$(document).ready(function () {
  $(window).scroll(function () {
    var about_position = $('#about-me').offset().top;
    var project_position = $('#projects').offset().top;
    var height = $('#projects').height();
    var scroll = $(window).scrollTop();

    if (scroll + 40 > project_position && scroll + 40 < (project_position + height)) {
      $('nav').addClass('color-blue');
      $('nav').removeClass('color-white');
    } else {
      $('nav').removeClass('color-blue');
      $('nav').addClass('color-white');
    }

    if (scroll - 10 > about_position && scroll + 150 < (about_position + height)) {
      $('nav').removeClass('background-light-blue');
      $('nav').addClass('background-dark-blue');
    } else if (scroll - 10 > project_position && scroll + 150 < (project_position + height)) {
      $('nav').removeClass('background-dark-blue');
      $('nav').addClass('background-light-blue');
    } else {
      $('nav').removeClass('background-dark-blue');
      $('nav').removeClass('background-light-blue');
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
    responsive: [{
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