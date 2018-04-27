$(document).ready(function () {
    $(".fullheight-p").css({ height: window.innerHeight + 65.33 });
    $(".fullheight-65").css({ height: window.innerHeight - 65.33 });

    $(".fullwidth-img").css({ width: $(".width-col-10").width() });
    $(".fullwidth-img-96").css({ width: $(".width-col-12").width() - 96 });
    $(".footer-sidebar").css({ width: $(".width-col-2").width() });
});