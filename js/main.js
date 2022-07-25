$(function() {
    $(window).resize(function(){
        if (window.matchMedia("(max-width: 1024px)").matches) {
            $('.footer__menu').appendTo('.footer__l-side');
            $('.header__menu ul').appendTo('.burger_appended');
            $('.header__select .select_price').appendTo('.burger_appended');
            $('.header__buttons .header__body').appendTo('.burger_appended');
        }
        if (window.matchMedia("(min-width: 1024px)").matches) {
            $('.footer__menu').appendTo($('.footer__item'));
            $('.burger_appended > ul').appendTo($('.header__menu'));
            $('.burger_appended .select_price').appendTo($('.header__select'));
            $('.burger_appended .header__body').appendTo($('.header__buttons'));
        }
    });
    if (window.matchMedia("(max-width: 1024px)").matches) {
        $('.footer__menu').appendTo('.footer__l-side');
        $('.header__menu ul').appendTo('.burger_appended');
        $('.header__select .select_price').appendTo('.burger_appended');
        $('.header__buttons .header__body').appendTo('.burger_appended');
    }
    if (window.matchMedia("(min-width: 1024px)").matches) {
        $('.footer__menu').appendTo($('.footer__item'));
        $('.burger_appended > ul').appendTo($('.header__menu'));
        $('.burger_appended .select_price').appendTo($('.header__select'));
        $('.burger_appended .header__body').appendTo($('.header__buttons'));
    }

    $('.select_price select').niceSelect();

    function burg(){
        var burgerWr = $('.burger-wrap'),
            burgerBtn = $('.burger-btn'),
            burgerBody = $('.burger-body'),
            burgerCloseBtn = $('.burger-close-btn');
    
        burgerBtn.on('click', function(){
            $(burgerWr).addClass('opened');
            $('html').addClass('ovh');
            $('body').addClass('ovh');
            $('.wrapper').addClass('ovh');
        });
    
        burgerCloseBtn.on('click', function(){
            $(burgerWr).removeClass('opened');
            $('html').removeClass('ovh');
            $('body').removeClass('ovh');
            $('.wrapper').removeClass('ovh');
        })
    }
    burg();
    $(document).on('click', function(e){
        if( $(e.target).closest('.burger-btn').length || $(e.target).closest('.burger-body').length)
        return
    
        $('.burger-wrap').removeClass('opened');
        $('html').removeClass('ovh');
        $('body').removeClass('ovh');
        $('.wrapper').removeClass('ovh');
    });

    $('table').wrap('<div class="table_block"></div>');

    $('.sl_rev').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    variableWidth: true
                }
            }
        ]
    })

    $('.faq_block__block').on('click', function(){
        $(this).toggleClass('isActive');
        if ($(this).hasClass('isActive')) {
            $(this).find('.faq_block__txt').show(400);
        } else {
            $(this).find('.faq_block__txt').hide(400)
        }
    })
});
$(window).trigger('resize');