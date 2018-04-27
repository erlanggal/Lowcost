// function heightAdjuster() {
//     var winHeight = window.innerHeight;
//     var winWidth = window.innerWidth;
//     var img = document.getElementsByClassName("img-fullscreen");
//     var i;
//     for(i=0;i<img.length;i++) {
//         img[i].style.height = winHeight + "px";
//         img[i].style.width = winWidth + "px";
//     }
//     document.getElementById("about").style.height = winHeight;
// }

// window.onresize= heightAdjuster;
// heightAdjuster();

$(document).ready(function () {
    $(".img-fullscreen").css({ height: window.innerHeight, width: window.innerWidth });

    $("#about").css({ height: window.innerHeight - 65 });
    $(".about-wrapper").css({ height: window.innerHeight - 65 });
    $(".about-content").css({ height: window.innerHeight - 65 });
    $(".img-fullscreen-65").css({ height: window.innerHeight - 65 });
    $(".img-fullscreen-65").css({ width: 100 + "%" });

    var scroll_start = 0;
    var startchange = $("#features");
    var offset = startchange.offset();

    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop() + 160;
            if (scroll_start > offset.top) {
                $('.header-wrapper').css('background-color', '#B133E7');
            } else {
                $('.header-wrapper').css('background-color', 'transparent');
            }
        });
    }

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.header-login').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight) {
            $('.header-login').removeClass('header-show').addClass('header-hide');
            $('.header-wrapper').css({ top: 0 });   
        } else {
            if (st + $(window).height() < $(document).height()) {
                $('.header-login').removeClass('header-hide').addClass('header-show');
                $('.header-wrapper').css({ top: 34.34 });
            }
        }

        lastScrollTop = st;
    }
});



function initMap() {
    var loc = { lat: -6.87948, lng: 107.62258 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: loc,
        gestureHandling: 'cooperative'
    });
    var marker = new google.maps.Marker({
        position: loc,
        map: map
    });
}