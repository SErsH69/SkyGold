$(function() {
    var tfix = $('.header'),
        tfixOffset = tfix.offset(),
        hederHeight = $('.header').outerHeight();
    $(window).scroll(function () {
        if ($(window).scrollTop() > tfixOffset.top) {
            if ($(window).scrollTop() > tfixOffset.top) {
            $('.wrapper').css({
                'paddingTop': hederHeight + 'px'
            });
            tfix.addClass('fixed');
            };
        } else {
            tfix.removeClass('fixed');
            $('.wrapper').css({
                'paddingTop': 0
            });
        };
    });

    $(window).resize(function(){
        if (window.matchMedia("(max-width: 1024px)").matches) {
            $('.footer__menu').appendTo('.footer__l-side');
            $('.header__menu ul').appendTo('.burger_appended');
            $('.header__select .select_price').appendTo('.burger_appended');
            $('.header__buttons .header__body').appendTo('.burger_appended');
            $('.header__in .block_fix').appendTo('.wrapper');
        }
        if (window.matchMedia("(min-width: 1024px)").matches) {
            $('.footer__menu').appendTo($('.footer__item'));
            $('.burger_appended > ul').appendTo($('.header__menu'));
            $('.burger_appended .select_price').appendTo($('.header__select'));
            $('.burger_appended .header__body').appendTo($('.header__buttons'));
            $('.wrapper .block_fix').appendTo($('.header__in'));
        }
    });
    if (window.matchMedia("(max-width: 1024px)").matches) {
        $('.footer__menu').appendTo('.footer__l-side');
        $('.header__menu ul').appendTo('.burger_appended');
        $('.header__select .select_price').appendTo('.burger_appended');
        $('.header__buttons .header__body').appendTo('.burger_appended');
        $('.header__in .block_fix').appendTo('.wrapper');
    }
    if (window.matchMedia("(min-width: 1024px)").matches) {
        $('.footer__menu').appendTo($('.footer__item'));
        $('.burger_appended > ul').appendTo($('.header__menu'));
        $('.burger_appended .select_price').appendTo($('.header__select'));
        $('.burger_appended .header__body').appendTo($('.header__buttons'));
        $('.wrapper .block_fix').appendTo($('.header__in'));
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
    });

    $('.sl_com_js').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 540,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.sl_hot_js').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1160,
                settings: {
                    variableWidth: true
                }
            }
        ]
    });

    $('.faq_block__block').on('click', function(){
        $(this).toggleClass('isActive');
        if ($(this).hasClass('isActive')) {
            $(this).find('.faq_block__txt').show(400);
        } else {
            $(this).find('.faq_block__txt').hide(400)
        }
    });

    var newSelection = "";
    $(".block_sell__btn").click(function(){
        $(".block_sell__blocks").fadeTo(0, 0.10);
        $(".block_sell__btn").removeClass("isActive");
        $('.block_sell__btn').removeClass('isOpened');
        $('.block_sell__cls').removeClass('isActive');
        $(this).addClass("isActive");
        newSelection = $(this).attr("data-attr");
        $(".block_sell__block").not("."+newSelection).slideUp(0);
        $("."+newSelection).slideDown(0);
        $(".block_sell__blocks").fadeTo(0, 1);
    });

    $('.block_sell__cls').on('click', function(){
        $(this).toggleClass("isActive");
        $('.block_sell__btn').toggleClass('isOpened');
    });

    if ($("#count_js").length){
        setTimeout(function(){
                var text = $('#count_js').html();
                var arr = text.split('');
                for ( var i = 0; i<arr.length; i++  ) {
                    arr[i] =  "<span><span>" + arr[i] +  "</span></span>";
                }
                $('#count_js').html(arr);
        }, 100);
    };

    $('.footer__btn').on('click', function(){
        $('.block_fix').removeClass('hide');
    })
    $('.block_fix__close').on('click', function(){
        $('.block_fix').toggleClass('hide');
    });
    $('.block_fix').removeClass('hide');
    setTimeout(function(){
        $('.block_fix').toggleClass('hide');
    }, 30000);
});
$(window).trigger('resize');