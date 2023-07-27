$(function () {

	// loading
	var webStorage = function () {
		if (sessionStorage.getItem('access')) {
			$("#splash").fadeOut(function () {
				$('.splashbg').addClass('pageAnime');
				$('.wrapper').addClass('wrapActive');
			});
			$(".loading").addClass('loadActive');
		} else {
			sessionStorage.setItem('access', 'true');
			$(".loading__animation").addClass('loadAnimeActive');
			setTimeout(function () {
				$(".loading").addClass('loadActive');
				$(".loading__animation").removeClass('loadAnimeActive');
				$("#splash").fadeOut(function () {
					$('.splashbg').addClass('pageAnime');
					$('.wrapper').addClass('wrapActive');
				});
			}, 3000);

		}
	}
	webStorage();

	// mouse stolker
	const stalker = $("#mouse");

	$(document).on("mousemove", function (e) {
		$(document).on("mousemove", function (e) {
			stalker.css({
				transform: 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)'
			});
		});
	});

	// mouse hover
	$(".stkr-target").on({
		"mouseenter": function () {
			stalker.addClass("mouseActive");
		},
		"mouseleave": function () {
			stalker.removeClass("mouseActive");
		}
	});

	$(".stkr-target-txt").on({
		"mouseenter": function () {
			stalker.addClass("mouseActive-txt");
		},
		"mouseleave": function () {
			stalker.removeClass("mouseActive-txt");
		}
	});

	// smooth scroll
	$('a').on('click', function () {
		const href = $(this).attr('href');
		const target = $(href == "#" || href == "" ? 'html' : href);
		const targetPos = $(target).offset().top - 50;

		$('html, body').animate({
			scrollTop: targetPos
		}, 500);

		return false;
	});

	// nav
	$('#btn').on('click', function () {
		$('#gnav').toggleClass('gnavActive');
		$('#btn span').toggleClass('btnActive');
		$('.btn__top').toggleClass('rotate-top');
		$('.btn__middle').toggleClass('rotate-middle');
		$('.btn__bottom').toggleClass('rotate-bottom');
		$('.header__logo, #btn').toggleClass('headerActive');
		$('body').toggleClass('noScroll');
	});

	$('.gnav__link').on('click', function () {
		$('#gnav').removeClass('gnavActive');
		$('#btn span').removeClass('btnActive');
		$('.btn__top').removeClass('rotate-top');
		$('.btn__middle').removeClass('rotate-middle');
		$('.btn__bottom').removeClass('rotate-bottom');
		$('.header__logo, #btn').removeClass('headerActive');
		$('body').removeClass('noScroll');
	});

	//section color change
	$(window).on('scroll load', function () {
		if ($(window).scrollTop() > $('#mv').offset().top + 300 && $(window).scrollTop() < $('#int').offset().top - 200) {
			$('#wrapper').css({
				'background-color': '#fff5f0',
				'color': '#000'
			});
			$('.gnav__link').css({
				'color': '#000'
			});
			$('#btn span, #mouse').css({
				'background-color': '#000'
			});

			$('.mv__scroll').css({
				'opacity': '0'
			});

		} else {
			$('#wrapper').css({
				'background-color': '#000',
				'color': '#fff5f0'
			});
			$('.gnav__link').css({
				'color': '#fff5f0'
			});
			$('#btn span, #mouse').css({
				'background-color': '#fff5f0'
			});

			$('.mv__scroll').css({
				'opacity': '1'
			});
		}
	});


	$(window).scroll(function () {

		// section number
		if ($(window).scrollTop() > $('#about').offset().top - 500 && $(window).scrollTop() < $('#work').offset().top - 200) {
			$('#secScroll').css({
				'opacity': '1'
			});
			$('.secScroll__top').text('01');
		} else if ($(window).scrollTop() > $('#work').offset().top - 200 && $(window).scrollTop() < $('#skill').offset().top - 200) {
			$('#secScroll').css({
				'opacity': '0'
			});
			$('.secScroll__top').text('02');
		} else if ($(window).scrollTop() > $('#skill').offset().top - 300 && $(window).scrollTop() < $('#int').offset().top - 200) {
			$('#secScroll').css({
				'opacity': '1'
			});
			$('.secScroll__top').text('03');
		} else if ($(window).scrollTop() > $('#int').offset().top - 200 && $(window).scrollTop() < $('#footer').offset().top - 200) {
			$('#secScroll').css({
				'opacity': '1'
			});
			$('.secScroll__top').text('04');
		} else if ($(window).scrollTop() > $('#footer').offset().top - 200) {
			$('#secScroll').css({
				'opacity': '1'
			});
			$('.secScroll__top').text('05');

		} else
			$('#secScroll').css({
				'opacity': '0'
			});


		// skill fadeIn
		if ($(window).scrollTop() > $('#skill').offset().top - 300 && $(window).scrollTop() < $('#int').offset().top + 100) {
			$('.skill__box').addClass('fadeIn');
		} else {
			$('.skill__box').removeClass('fadeIn');
		}

		// text slide scroll
		const aboutTop = $('#about').offset().top - 800;
		const intTop = $('#int').offset().top - 500;
		const ST = $(this).scrollTop();

		if (ST > aboutTop) {
			const slideX = ST - aboutTop - 500;
			$('.stroke__about').css({
				'transform': 'translateX(' + -slideX + 'px)',
				'transition': '.2s',
				'transition-timing-function': 'cubic-bezier(0,1.01,1,.91)'
			});
		}

		if (ST > intTop) {
			const slideX = ST - intTop - 500;
			$('.stroke__int').css({
				'transform': 'translateX(' + -slideX + 'px)',
				'transition': '.2s',
				'transition-timing-function': 'cubic-bezier(0,1.01,1,.91)'
			});
		}

		// form txt
		if ($(window).scrollTop() > $('#footer').offset().top - 500) {
			$('.fadeUp').addClass('fadeUp-isActive');
		}

	});


	//works hover
	if (window.matchMedia('(min-width: 1024px)').matches) {
		$('.work__item').hover(function () {

			const target = $(this).data('target');

			$('.work__item, #workScroll').not(this).stop().css('opacity', '0.2');
			$('.work__huge').addClass('workBgActive');
			$(target).addClass('workBgActive');

		}, function () {

			$('.work__item, #workScroll').not(this).stop().css('opacity', '1');
			$('.work__huge').removeClass('workBgActive');
			$('.work__bg').removeClass('workBgActive');
		});
	}


	// footer message
	$('#form').submit(function (event) {
		var formData = $('#form').serialize();
		$.ajax({
			url: "https://docs.google.com/forms/d/e/1FAIpQLScOjSpbU6B4s734c1mqIOLM8m0gQugQQX7hX8L68_kOVhvKUw/viewform?usp=sf_link",
			data: formData,
			type: "POST",
			dataType: "xml",
			statusCode: {
				0: function () {
					$(".form__message").slideDown();
					$(".form__submit").fadeOut();
				},
				200: function () {
					$(".form__false").slideDown();
				}
			}
		});
		event.preventDefault();
	});


	// mail copy
	$('.footer__mail').on('click', function () {
		const text = $('.footer__txtCopy').text();
		$(this).append('<textarea class="clipboard__textarea">' + text + '</textarea>');
		$('.clipboard__textarea').select();
		document.execCommand('copy');
		$('.clipboard__textarea').remove();
		alert('メールアドレスをコピーしました');
	});


});


// work gsap
const listWrapperEl = document.querySelector('.work__sideScroll');
const listEl = document.querySelector('.work__list');

gsap.to(listEl, {
	x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
	ease: 'none',
	scrollTrigger: {
		trigger: '.work',
		start: 'top top',
		end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
		scrub: true,
		pin: true,
		anticipatePin: 1,
		invalidateOnRefresh: true,
	},
});


// interest pic swiper
const swiperPic = new Swiper('.swiper-pic', {
	direction: 'horizontal',
	loop: true,
	effect: 'fade',
	slidesPerView: 1,
	shortSwipes: false,
	longSwipes: false,
	speed: 500
});

// interest txt swiper
const swiperTxt = new Swiper('.swiper-txt', {
	direction: 'horizontal',
	loop: true,
	effect: 'slide',
	slidesPerView: 1,

	speed: 400,

	pagination: {
		el: '.swiper-txt__pagination',
		type: 'fraction',
	},

	navigation: {
		prevEl: '.swiper-txt__prev',
		nextEl: '.swiper-txt__next',
	},

	thumbs: {
		swiper: swiperPic
	}
});


//svg
window.addEventListener('load', function () {
	deSVG('.header__logo, .mv__img, .stroke__Fimg, .stroke__Bimg, .work__img', true);
});