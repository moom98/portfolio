$(function(){
// nav
const menu = $('#gnav'),
    menuBtn = $('#navbtn'),
    body = $(document.body),   
    layer = $('.layer'),
    menuWidth = menu.outerWidth(),
    link = $('.gnav__link, .resbtn__link, .sns__link, .gnav__backbtn')                
         
    menuBtn.on('click', function(){
        $('.navbtn__top').toggleClass('rotate-top');
        $('.navbtn__middle').toggleClass('hide-middle');
        $('.navbtn__bottom').toggleClass('rotate-bottom');

        body.toggleClass('open');
            if(body.hasClass('open')){
                $(".layer").show();
                body.animate({'left' : menuWidth }, 300);
                menu.animate({'left' : 0 }, 300);                    
            } else {
                $(".layer").hide();
                menu.animate({'left' : -menuWidth + 70 }, 300);
                body.animate({'left' : 0 }, 300);            
            }             
    });

    layer.on('click', function(){
        $('.navbtn__top').removeClass('rotate-top');
        $('.navbtn__middle').removeClass('hide-middle');
        $('.navbtn__bottom').removeClass('rotate-bottom');

        menu.animate({'left' : -menuWidth +70 }, 300);
        body.animate({'left' : 0 }, 300).removeClass('open');
        layer.hide();
    });

    link.on('click', function(){
        $('.navbtn__top').removeClass('rotate-top');
        $('.navbtn__middle').removeClass('hide-middle');
        $('.navbtn__bottom').removeClass('rotate-bottom');

        menu.animate({'left' : -menuWidth +70 }, 300);
        body.animate({'left' : 0 }, 300).removeClass('open');
        layer.hide();

            const href = $(this).attr('href');
            const target = $(href == "#" || href == "" ? 'html' : href);
            const targetPos = $(target).offset().top - 100;
    
            $('html, body').animate({scrollTop: targetPos}, 400);
    
            return false;
    });

    // fadein
    $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();
    
        $('.fadein').each(function () {
          const targetPosition = $(this).offset().top;
          if (scroll > targetPosition - windowHeight + 100) {
            $(this).addClass("is-fadein");
          }
        });
    });
    
});


// swiper
const swiperTxt = new Swiper('.swiper-txt', {
    centeredSlides: true,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 800
});

const swiperPic = new Swiper('.swiper-pic', {
    centeredSlides: true,
    loop: true,
    speed: 800,
    slidesPerView: 1.8,
    spaceBetween: 40,
    autoplay: {
        delay: 5000,
    },
    thumbs: {
        swiper: swiperTxt
    },
    grabCursor: true,
    slideToClickedSlide: true,
    slideActiveClass: 'swiper-pic_isActive'
});



