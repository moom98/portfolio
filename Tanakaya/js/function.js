$(function () {

    $('.btn').on('click', function () {
        $('.btn__top').toggleClass('rotate-top');
        $('.btn__bottom').toggleClass('rotate-bottom');
        $('#gnav').toggleClass('gnav-active');

    });

    $('#gnav a').on('click', function () {
        $('.btn__top').removeClass('rotate-top');
        $('.btn__bottom').removeClass('rotate-bottom');
        $('#gnav').removeClass('gnav-active');

    });

    $('a').on('click', function () {
        const href = $(this).attr('href');
        const target = $(href == "#" || href == "" ? 'html' : href);
        const targetPos = $(target).offset().top;

        $('html, body').animate({scrollTop: targetPos}, 300);

        return false;
    });
});