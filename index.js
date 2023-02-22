const settingSlider = {
    dots: true,
    arrows: false,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    focusOnSelect: true,
    autoplaySpeed: 2000,
    mobileFirst: true,}

$(document).ready(function () {
    $('.slider').slick(settingSlider);
})


const settingSlidersection2 = {
    dots: true,
    arrows: false,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    focusOnSelect: true,
    autoplaySpeed: 2000,
    mobileFirst: true,

}
/* responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },

    {
      breakpoint: 1200,
      settings: 'unslick'
    }
  ]*/

$(document).ready(function () {
    $('.section-2-slider').slick(settingSlidersection2);
})

$(".anchor").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
});



$(window).on('resize', function () {
    if ($(window).width() > 320 && !$('.slider').hasClass('slick-initialized')) {
        $('.slider').slick(settingSlider);
    }
    if ($(window).width() >= 2500 && $('.slider').hasClass('slick-initialized')) {
        $('.slider').slick('unslick');
    }
});



