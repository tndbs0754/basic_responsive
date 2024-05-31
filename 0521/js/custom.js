$(function () {


    $('.main_content .right_slide').slick({
        arrows: false,
        dots: true
    });


    $('.main_content .arrows .prev').on('click', function () {
        $('.main_content .right_slide').slick('slickPrev')
    });

    $('.main_content .arrows .next').on('click', function () {
        $('.main_content .right_slide').slick('slickNext')
    });

    $('.main_solution .solution_slide').slick({
        centerMode: true,
        centerPadding: '300px',
        dots: true,
        arrows: false
    });

    $('.main_solution .solution_slide').on('afterChange', function (e, s, c) {
        $('.main_solution .slide_pop .desc')
            .eq(c)
            .addClass('on')
            .siblings()
            .removeClass('on');

        $('.main_solution .num span').text('0' + (c + 1))
    })

    $('.main_solution .arrows .prev').on('click', function () {
        $('.main_solution .solution_slide').slick('slickPrev')
    });

    $('.main_solution .arrows .next').on('click', function () {
        $('.main_solution .solution_slide').slick('slickNext')
    });


})