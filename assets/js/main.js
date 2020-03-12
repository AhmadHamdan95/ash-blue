$(document).ready(function () {

    // cover swiper of home
    var coverSwiper = new Swiper('.cover-slider .swiper-container', {
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
    });

    // var mySwiper = document.querySelector('.cover-slider .swiper-container').swiper

    $(".cover-slider .swiper-container").mouseenter(function() {
      document.querySelector('.cover-slider .swiper-container').swiper.autoplay.stop();
    });

    $(".cover-slider .swiper-container").mouseleave(function() {
      document.querySelector('.cover-slider .swiper-container').swiper.autoplay.start();
    });

    // instant swiper of home
    var instantSwiper = new Swiper('.instant .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
              slidesPerView: 3,
              spaceBetween: 30,
          },
        }
    });

    // header start
    if ($(window).scrollTop() > 0){
      $(".fixed-header .header").css("background-color", "#454545");
    }
    else if ($(window).scrollTop() == 0){
      $(".fixed-header .header").css("background-color", "transparent");
    };

    $(window).scroll(function(){
        if ($(window).scrollTop() > 0){
          $(".fixed-header .header").css("background-color", "#454545");
        }
        else if ($(window).scrollTop() == 0){
          $(".fixed-header .header").css("background-color", "transparent");
        };
    });

    $('.header .nav-btn').on('click', function () {
      $('body').toggleClass('mobile-menu-active');
    });

    $('.languages .dropdown-toggle').on('click', function () {
      $('body').removeClass('mobile-menu-active');
    });

    $('.header .languages').on('click', '.ar', function () {
      $('body').removeClass('english');
      $('body').addClass('arabic');
      $('html').attr('lang', 'ar');
    });

    $('.header .languages').on('click', '.en', function () {
      $('body').removeClass('arabic');
      $('body').addClass('english');
      $('html').attr('lang', 'en');
    });

    // header end

});