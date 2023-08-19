    const swiperMV= new Swiper('.swiper-mv',{
            //オプション
            direction: 'horizontal',
            loop: true,
            effect: 'slide',
            slidesPerView: 1.2,
            centeredSlides: true,
            spaceBetween: 10,
            slideActiveClass: 'swiper-mv__isActive',

            speed: 800,
            autoplay : {
                delay: 6000,
                disableOnInteraction: true,
            },

            pagination: {
                el: '.swiper-mv__pagination',
                type: 'bullets',
                clickable: true,
            },

            navigation: {
                prevEl: '.swiper-mv__prev',
                nextEl: '.swiper-mv__next',
            },
        });



    const swiperconS= new Swiper('.swiper-conS',{
            //オプション
            direction: 'horizontal',
            loop: true,
            effect: 'slide',
            slidesPerView: 2, 
            breakpoints: {
                768: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 4,
                }
              },

            speed: 400,

            pagination: {
                el: '.swiper-conS__pagination',
                type: 'fruction',
                clickable: true,
            },

            navigation: {
                prevEl: '.swiper-conS__prev',
                nextEl: '.swiper-conS__next',
            },

            scrollbar: {
                el: '.swiper-conS__scrollbar',
                draggable: true,
            }

        });


    const swiperconB= new Swiper('.swiper-conB',{
            //オプション
            direction: 'vertical', 
            loop: false, 
            effect: 'fade', 
            slidesPerView: 1, 
            slideActiveClass: 'swiper-conB__isActive', 

            speed: 1200,
            autoplay : {
                delay: 2000,
                disableOnInteraction: true,
            },

            pagination: {
                el: '.swiper-conB__pagination',
                type: 'bullets',
                clickable: true,
            }

        });


    const mediaQuery = window.matchMedia('(min-width: 768px)')
        if (mediaQuery.matches) {
        const swiperMV= new Swiper('.swiper-mv',{
        //オプション
        direction: 'horizontal',
        loop: true,
        effect: 'slide',
        slidesPerView: 2.5,
        centeredSlides: true,

        speed: 800,
        autoplay : {
            delay: 6000,
            disableOnInteraction: true,
        },

        pagination: {
            el: '.swiper-mv__pagination',
            type: 'bullets',
            clickable: true,
        },

        navigation: {
            prevEl: '.swiper-mv__prev',
            nextEl: '.swiper-mv__next',
        },
    });
}  

