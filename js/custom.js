/*===================================
SERVICES
===================================== */
$(document).ready(function () {
  //animate on scroll
  new WOW().init();
});
/*===================================
WORK
===================================== */
$(document).ready(function () {
  $("#work").magnificPopup({
    delegate: "a", //child item selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true
    }
  });
});
/*===================================
TEAM
===================================== */
$(document).ready(function () {
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      //breakpoint from 0 up
      0: {
        items: 1
      },
      //breakpoint from 480 up
      480: {
        items: 2
      },
      //breakpoint from 768 up
      768: {
        items: 3
      }
    }
  });
});
/*===================================
Testimonials
===================================== */
$(document).ready(function () {
  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 300,
    loop: true,
    autoplayHoverPause: true
  });
});
/*===================================
STATS
===================================== */
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });
});
/*===================================
CLIENTS
===================================== */
$(document).ready(function () {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      //breakpoint from 0 up
      0: {
        items: 1
      },
      //breakpoint from 480 up
      480: {
        items: 3
      },
      //breakpoint from 768 up
      768: {
        items: 5
      },
      //breakpoint from 992 up
      992: {
        items: 6
      }
    }
  });
});
/*===================================
NAVIGATION
===================================== */
// show/hide the transparent/black navigation
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      //hide the navigation
      $("nav").removeClass("vesco-top-nav");
      //hide the back to top button
      $("#back-to-top").fadeOut();
    } else {
      //show the navigation
      $("nav").addClass("vesco-top-nav");
      $("#back-to-top").fadeIn();
    }
  });
});
// to close mobile menu on click
$(function () {
  $(".navbar-collapse ul li a").on("click touch", function () {
    $(".navbar-toggle").click();
  });
});
/*===================================
Smooth Scrolling
===================================== */
$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    //get or return id like #about, #work
    var section = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(section).offset().top - 64
    }, 1250, "easeInOutExpo");
  });
});