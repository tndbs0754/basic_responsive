$(function () {



    $('.main_product_slide').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
    });

    $('.main_product02 .arrows .prev').on('click', function () {
        $('.main_product_slide').slick('slickPrev')
    })
    $('.main_product02 .arrows .next').on('click', function () {
        $('.main_product_slide').slick('slickNext')
    })



})