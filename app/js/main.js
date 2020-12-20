
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

// moving point

gsap.to('#point', {
    scrollTrigger: {
        trigger: "#curve",
        start: "top 300",
        end: "bottom",
        scrub: true,
        toggleActions: "play none none none"
    },
    motionPath: "#curve",
    y: $('#curve').height()
})



//header slider settings

$(document).ready(function(){
    $('.header__slider').slick({
        arrows: false,
        dots: true
    });
});
$('.header__slider-arrow-left').on('click', function(){
    $('.header__slider').slick('slickPrev')
});
$('.header__slider-arrow-right').on('click', function(){
    $('.header__slider').slick('slickNext')
});
$(document).ready(function(){
    $('.slick-dots li').append("<div class='slick-dot-inner'></div>")
});

//menu 

$('.menu .menu__link').on('click', function(){
    $('.menu .menu__link').removeClass('menu__link--active');
    $(this).addClass('menu__link--active');
})

$('.menu__burger').click(function(){
    $('.menu__list').toggle("slow")
});


//team slider setting

$(document).ready(function(){
    $('.team__small-img-prev, .team__small-img-next, .team__info, .team__members-name').slick({
        arrows: false,
        dots: false,
        infinite: false,
        fade: true,
        speed: 100
    });

    let rev = $('.team__slider-images');
    rev.on('init', function(event, slick, currentSlide) {
        let
            cur = $(slick.$slides[slick.currentSlide]),
            next = cur.next(),
            next2 = cur.next().next(),
            prev = cur.prev();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');  
        next2.addClass('slick-snext2');  
        cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2');
        slick.$prev = prev;
        slick.$next = next;
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        let cur = $(slick.$slides[nextSlide]);
        slick.$prev.removeClass('slick-sprev');
        slick.$next.removeClass('slick-snext');
        slick.$next.next().removeClass('slick-snext2');
        next = cur.next(),  
        prev = cur.prev();
        //prev2.prev().prev();
        //next2.next().next();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        next.next().addClass('slick-snext2');
        slick.$prev = prev;
        slick.$next = next;
        cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2');
    });

    rev.slick({
        speed: 1000,
        arrows: false,
        dots: false,
        infinite: false,
        waitForAnimate: false
    });
});



$('.team__small-img-next').on('click', function(){
    $('.team__slider-images, .team__small-img-prev, .team__small-img-next, .team__info, .team__members-name').slick('slickNext')
});
$('.team__small-img-prev').on('click', function(){
    $('.team__slider-images, .team__small-img-prev, .team__small-img-next, .team__info, .team__members-name').slick('slickPrev')
});
