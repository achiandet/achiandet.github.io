// MixItUp: This handles the filter and sort animations on portfoliio elements
$(function(){
    $('#portfoliolist').mixitup({
        targetSelector: '.portfolio',
        filterSelector: '.filter',
        effects: ['fade'],
        easing: 'snap'
    });
});