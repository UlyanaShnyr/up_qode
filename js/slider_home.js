let start = $('#sliders_home').find('.active').attr('data-interval');
let time = setTimeout("$('#sliders_home').carousel({interval: 1000});", start - 1000);

$('#sliders_home').on('slid.bs.carousel', function () {
    clearTimeout(time);
    var interval = $(this).find('.active').attr('data-interval');
    $('#sliders_home').carousel('pause');
    time = setTimeout("$('#sliders_home').carousel();", interval - 1000);
});

$('.carousel-control-next').on('click', function () {
    clearTimeout(time);
});

$('.carousel-control-prev').on('click', function () {
    clearTimeout(time);
});