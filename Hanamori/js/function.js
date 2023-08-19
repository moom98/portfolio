$(function(){
    const mediaQuery = window.matchMedia('(max-width: 768px)')


    //スムーススクロール
    $('.header__link, .gnavsp__link, gnavpc__link').on('click', function(){
        const href = $(this).attr('href');
        const target = $(href == "#" || href == "" ? 'html' : href);
        const targetPos = $(target).offset().top -120;

        $('html, body').animate({scrollTop: targetPos}, 400, 'swing');

        return false;
    });

    //nav
    $('#btn').on('click', function(){
    if (mediaQuery.matches) {
            $('#gnavsp').toggleClass('gnavActive');
            $('body').toggleClass('noScroll');
    } else {
            $('#gnavpc').toggleClass('gnavActive');
            $('body').toggleClass('noScroll');
        }
    });

    $('#btn').on('click', function(){
        $('#btn').toggleClass('btnActive');
        $('.btn__top').toggleClass('rotate-top');
        $('.btn__bottom').toggleClass('rotate-bottom');
        $('.header__ttl, .sBtn__txt, .sBtn__icon').toggleClass('headerActive');
    });
    
    $('.gnavsp__link, .gnavpc__link').on('click',function(){
        $('#gnavsp, #gnavpc').removeClass('gnavActive');
        $('#btn').removeClass('btnActive');
        $('.btn__top').removeClass('rotate-top');
        $('.btn__bottom').toggleClass('rotate-bottom');
        $('.header__ttl, .sBtn__txt, .sBtn__icon').removeClass('headerActive');
        $('body').removeClass('noScroll');
    });
    
    //リサイズヘッダー
    const mvH =$('#mv').height(); 
    $(window).on('scroll', function(){
        const ST = $(window).scrollTop();

        if(ST >= mvH){
            $('#header').addClass('changeColor small');
            $('.btn').addClass('btnColor');
            $('.header__link, .sBtn__txt, .sBtn__icon').addClass('headerActive');

        }else{

            $('#header').removeClass('changeColor small');
            $('.btn').removeClass('btnColor');
            $('.header__link, .sBtn__txt, .sBtn__icon').removeClass('headerActive');
        }
    });

    //ページ下部でヘッダー消す
    const shopH =$('#shop').offset().top; 
    $(window).on('scroll', function(){
        const ST = $(window).scrollTop();

        if(ST >= shopH){
            $('#header').addClass('none');

        }else{

            $('#header').removeClass('none');
        }
    });

     //モーダル
    $('.cont__link').on('click', function(){
    
         const modal = $(this).attr('data-modal');
    
         $(modal).fadeIn(function(){
              $(this, '.modal__close').on('click', function(){
                      $(this).fadeOut();
                  });
                });
                
                     return false;
                
    });

    //コンテンツフェードイン
    $(function(){
        $(window).on('load scroll',function (){
            $('.fadeIn').each(function(){
                const target = $(this).offset().top;
                const scroll = $(window).scrollTop();
                const height = $(window).height();
                if (scroll > target - height){
                    $(this).addClass('active');
                }else{
                    $(this).removeClass('active');
                }
            });
        });
    });

});