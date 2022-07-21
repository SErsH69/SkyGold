$(function() {
    $(window).resize(function(){
        if (window.matchMedia("(max-width: 1023px)").matches) {
            $('.footer__menu').appendTo('.footer__l-side');
        }
        if (window.matchMedia("(min-width: 1023px)").matches) {
            $('.footer__menu').appendTo($('.footer__item'));
        }
    });
    if (window.matchMedia("(max-width: 1023px)").matches) {
        $('.footer__menu').appendTo('.footer__l-side');
    }
    if (window.matchMedia("(min-width: 1023px)").matches) {
        $('.footer__menu').appendTo($('.footer__item'));
    }
});
$(window).trigger('resize');