$(function(){
// section scroll
$.scrollify({
    section:'.scrollify',
    easing: 'swing',
    scrollSpeed: 500,
    updateHash: false
  });


// opening
  $(window).on('load',function(){
    $('.splash').delay(1500).queue(function(){
      $(this).addClass('fadeOut');
    });
  });

// nav
$('#btn').on('click',function(){
    $('#btn__top').toggleClass('rotate-top');
    $('#btn__middle').toggleClass('hide-middle');
    $('#btn__bottom').toggleClass('rotate-bottom');
    $('html body').toggleClass('noScroll');

    if($('#btn').hasClass('off')){
        $('#btn').removeClass('off');
        $('#gnav').animate({'marginLeft':'100vw'},500).addClass('on');
      }else{
        $('#btn').addClass('off');
        $('#gnav').animate({'marginLeft':'0px'},500);
      }
 });

$('a').on('click',function(){
    $('#gnav').animate({'marginLeft':'0px'},500);
    $('#btn__top').removeClass('rotate-top');
    $('#btn__middle').removeClass('hide-middle');
    $('#btn__bottom').removeClass('rotate-bottom');
    $('html body').removeClass('noScroll');

    if($('#btn').hasClass('off')){
      $('#btn').removeClass('off');
      $('#gnav').animate({'marginLeft':'100vw'},500).addClass('on');
    }else{
      $('#btn').addClass('off');
      $('#gnav').animate({'marginLeft':'0px'},500);
    }

    const html = $(this).attr('href');
    const target = $(html == "#" || html == "" ? 'html' : html);
    const targetPos = $(target).offset().top;
   
    $('html, body').animate({scrollTop: targetPos});
   
    return false;

 });

// text fadein bottom
$(window).scroll(function () {
    const WH = $(window).height();
    const ST = $(window).scrollTop();

    $('.fadeIn').each(function () {
      const targetPosition = $(this).offset().top;
      if (ST > targetPosition - WH) {
        $(this).css({'opacity':'1', 'visibility':'visible', 'transform':'translateY(0)'});
        $('.concept__bgtxt').addClass('is-fadeInS');
        $('.concept__bgtxt-inner').addClass('is-fadeInS-inner');
      } else {
        $(this).css({'opacity':'0', 'visibility':'hidden', 'transform':'translateY(30px)'});
        $('.concept__bgtxt').removeClass('is-fadeInS');
        $('.concept__bgtxt-inner').removeClass('is-fadeInS-inner');
      }
    });
  });
});


// cafemenu swiper
const swiper = new Swiper(".swiper", {
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    speed: 2000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    }
});
