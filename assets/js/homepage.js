// only to be included on homepage

$(document).on('scroll', function() {

    // scroll menu styles
    if ($(document).scrollTop() > 610) {
        $('nav.homepage').removeClass('homepage');
        $('.mast').addClass('padded');
    } else {
        $('.mast').removeClass('padded');
        $('nav').addClass('homepage');
    }

});

$(document).ready(function() {

    // check cookie
    var visited = $.cookie('blueprint_visited');

    if (visited == null) {
        $('body').scrollTop(0);
        $('head').append('<link rel="stylesheet" href="/css/animate-custom.css">');
        $('body').prepend('<div id="firstoverlay" class="animated fadeOut"></div>');
        $('.leader h2 span').addClass('fadeIn').addClass('animated');
        $('.leader a.register').addClass('fadeInUpBig').addClass('animated');
        setTimeout(function() {
            $('#firstoverlay').remove();
        }, 4000);

        $.cookie('blueprint_visited', 'yes');
    }

    // set cookie
    $.cookie('blueprint_visited', 'yes', {
        expires: 365,
        path: '/'
    });

});