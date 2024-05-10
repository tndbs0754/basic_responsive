$(function () {

    $('.main_slide').slick({
        //arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 600,
        dots: true,
        pauseOnHover: false,
    });


    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')
    })
})