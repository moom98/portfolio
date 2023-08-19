$(function(){
// ここにjQueryを記述

$('#btn').on('click',function(){
    $('#btn__top').toggleClass('rotate-top');
    $('#btn__middle').toggleClass('hide-middle');
    $('#btn__bottom').toggleClass('rotate-bottom');
    $('#gnav').toggleClass('gnavActive');
    $('#gnav__nav').toggleClass('gnav__navActive');
 });


$('.gnav__link').on('click',function(){
    $('#btn__top').removeClass('rotate-top');
    $('#btn__middle').removeClass('hide-middle');
    $('#btn__bottom').removeClass('rotate-bottom');
    $('#gnav').removeClass('gnavActive');
    $('#gnav__nav').removeClass('gnav__navActive');
 });


$('.gnav__link').on('click', function(){
    const html = $(this).attr('href');
    const target = $(html == "#" || html == "" ? 'html' : html);
    const targetPos = $(target).offset().top -100;

    $('html, body').animate({scrollTop: targetPos});

    return false;
});

// --------------
});