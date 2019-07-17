$(function () {

    var section1OffsetTop = $('.section1').offset().top;
    var section2OffsetTop = $('.section2').offset().top;
    var section3OffsetTop = $('.section3').offset().top;
    var section4OffsetTop = $('.section4').offset().top;

    $(document).on('scroll', function () {
        var scrollTop = $(document).scrollTop();
        var activeLi;

        if (scrollTop < (section2OffsetTop - 100)) {
            activeLi = $('.menu-items>li:nth-child(1)');
        } else if (scrollTop < section3OffsetTop - 100) {
            activeLi = $('.menu-items>li:nth-child(2)');
        } else if (scrollTop < section4OffsetTop - 100) {
            activeLi = $('.menu-items>li:nth-child(3)');
        } else {
            activeLi = $('.menu-items>li:nth-child(4)');
        }

        activeLi.addClass('active');
        $('.menu-items>li').not(activeLi).removeClass('active');

        $('.progress-bar-79').each(function () {
            const imagePos = $(this).offset().top;
            const topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + window.innerHeight) {
                $(this).addClass('photoshop');
            }
        })

        $('.progress-bar-90').each(function () {
            const imagePos = $(this).offset().top;
            const topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + window.innerHeight) {
                $(this).addClass('html-css');
            }
        })

        $('.progress-bar-69').each(function () {
            const imagePos = $(this).offset().top;
            const topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + window.innerHeight) {
                $(this).addClass('javascript');
            }
        })

        $('.progress-bar-25').each(function () {
            const imagePos = $(this).offset().top;
            const topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + window.innerHeight) {
                $(this).addClass('wordpress');
            }
        })
    });
    
});