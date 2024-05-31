$(function () {

    $('.main_visual .main_visual_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $("#bgndVideo").YTPlayer({
        videoURL: 'https://youtu.be/d3go9ig7-zs',
        containment: '.main_movie',
        showControls: false,
        playOnlyIfVisible: true,
    });

    let sw = true;

    $('.main_movie .swich').on('click', function () {
        $(this).toggleClass('on');
        if (sw) {
            $('#bgndVideo').YTPPause();
        } else {
            $('#bgndVideo').YTPPlay();
        }
        sw = !sw;
    })


    $('.main_product_slide').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
    });


    $('.main_product .arrows .prev').on('click', function () {
        $('.main_product_slide').slick('slickPrev')
    });

    $('.main_product .arrows .next').on('click', function () {
        $('.main_product_slide').slick('slickNext')
    });

    $('.main_event_slide').slick({
        slidesToShow: 5,
        centerMode: true,
        centerPadding: 0,
        arrows: false,
    });

    $('.main_event .arrows .prev').on('click', function () {
        $('.main_event_slide').slick('slickPrev')
    });
    $('.main_event .arrows .next').on('click', function () {
        $('.main_event_slide').slick('slickNext')
    });

})