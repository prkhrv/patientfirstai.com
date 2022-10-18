/*============================================================================================
                               service
============================================================================================*/
$(function () {

    new WOW().init(); /*annimate on scrool*/

});
/*============================================================================================
                               work
============================================================================================*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*============================================================================================
                               Team
============================================================================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        /*responsiveis use to make the images responoive at xs screen*/
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 3
            }
        }
    });
});
/*============================================================================================
                              testimonials
========================================================================================*/
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
/*================
stats
=================================================*/
/*for counter effect*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});
/*============================================================================================
                               client
============================================================================================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    });
});

/*============================================================================================*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            $("#header").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut(); /*making back-to top button invisible*/

        } else {
            $("#header").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();

        }
    });

});
/*smooth scrolling*/
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        //get/return id like #about ,#work,and etc
        var section = $(this).attr("href");
        $('html,body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});
//close mobile menunon clicl;
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });

});
