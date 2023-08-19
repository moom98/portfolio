$(function () {
    const mvH = $('#mv').height();
    $(window).on('scroll', function () {
        const ST = $(window).scrollTop();

        if (ST >= mvH - 300) {
            $('.rp-fixed').addClass('hide');

        } else {
            $('.rp-fixed').removeClass('hide');
        }

        if (window.matchMedia('(min-width: 768px)').matches) {

            if (ST >= 10) {
                $('#header').addClass('header-small');
                $('.gnav').addClass('gnav-small');
                $('.gnav__container').addClass('none');
                $('.gnav__nav').css({
                    'padding': '0'
                });
                $('source').attr({
                    'srcset': 'images/logo_rectangle.svg'
                });
                $('.header__logo img').css({
                    'width': '130%'
                });
                $('.header__ttl').css({
                    'margin': '0',
                    'padding': '10px 20px'
                });

            } else {

                $('#header').removeClass('header-small');
                $('.gnav').removeClass('gnav-small');
                $('.gnav__container').removeClass('none');
                $('.gnav__nav').css({
                    'padding-top': '60px'
                });
                $('source').attr({
                    'srcset': 'images/logo_square.svg'
                });
                $('.header__logo img').css({
                    'width': '100%'
                });
                $('.header__ttl').css({
                    'margin-top': '20px',
                    'padding': '0'
                });
            }
        }

    });

    $('.rp-fixed').on({
        'mouseenter': function () {
            $(this).removeClass('hide');
        },
        'mouseleave': function () {
            $(this).addClass('hide');
        }
    });

    $('#btn').on('click', function(){
        $('#gnav').toggleClass('gnavActive');
        $('.btn__top').toggleClass('rotate-top');
        $('.btn__bottom').toggleClass('rotate-bottom');

        // const btnTarget = $('.btn__txt');
        // if ($(btnTarget).){
        //     $(btnTarget).html('メニュー');
        // }else{
        //     $(btnTarget).html('close');
        // }
    });

    $('.gnav__link').on('click',function(){
        $('#gnav').removeClass('gnavActive');
        $('.btn__top').removeClass('rotate-top');
        $('.btn__bottom').toggleClass('rotate-bottom');
        // $(btnTarget).html('メニュー')
    });

    $('.header__link, .gnav__link, .spmenu__link').on('click', function(){
        const href = $(this).attr('href');
        const target = $(href == "#" || href == "" ? 'html' : href);
        const targetPos = $(target).offset().top -120;

        $('html, body').animate({scrollTop: targetPos}, 400, 'swing');

        return false;
    });
});