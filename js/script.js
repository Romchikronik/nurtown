$(document).ready(function () {
    new WOW().init();
    $('.header-slider').slick({
        prevArrow: '<button class="header-slider__prev"><img src="img/arrow-right.png" alt=""></button>',
        nextArrow: '<button class="header-slider__next"><img src="img/arrow-right.png" alt=""></button>'
    })
    $('.gallery-slider').slick({
        prevArrow: '<button class="gallery-slider__prev"><img src="img/arrow-right.png" alt=""></button>',
        nextArrow: '<button class="gallery-slider__next"><img src="img/arrow-right.png" alt=""></button>'
    })
    $('.our-projects-slider').slick({
        prevArrow: '<button class="our-projects-slider__prev"><img src="img/arrow-right.png" alt=""></button>',
        nextArrow: '<button class="our-projects-slider__next"><img src="img/arrow-right.png" alt=""></button>'
    })
    $('.sertificate-slider').slick({
        prevArrow: '<button class="sertificate-slider__prev"><img src="img/arrow-right.png" alt=""></button>',
        nextArrow: '<button class="sertificate-slider__next"><img src="img/arrow-right.png" alt=""></button>'
    })
    $('.content__feedback').click(function(){
        $('.content-form__wrap').addClass('content-form__wrap_open');
        $('.content-form__overlay').show();
    })
    $('.content-form__close').click(function(){
        $('.content-form__wrap').removeClass('content-form__wrap_open');
        $('.content-form__overlay').hide();
    })
    $('.content-form').submit(function(e){
        e.preventDefault();
        $('.content-form__wrap').css('display', 'none').animate({
            opacity: 0,
            top: '-100%'
        }, function(){
            $(this).removeClass('content-form__wrap_open').css('display', 'block').css('opacity', 1);
            $('.success').animate({
                top: '50%'
            },0)
        })
    })
    $('.success__btn, .success__close').click(function(){
        $('.success').animate({
            top: '-100%'
        },0)
        $('.content-form__overlay').hide();
    })
    $('.contact .contact-form').submit(function(e){
        e.preventDefault();
        $('.content-form__overlay').show();
        $('.success').animate({
            top: '50%'
        },0)
    })
    $('.header-menu__burger').click(function(){
        if(!$(this).hasClass('open')){
            $(this).addClass('open');
            $('.header-menu').addClass('menu-open');
            $('.header-nav').addClass('fixed-top');
        }
        else{
            $(this).removeClass('open');
            $('.header-menu').removeClass('menu-open');
                $('.header-nav').removeClass('fixed-top');
        }
    })
});