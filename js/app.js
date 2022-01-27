$(function () {
  $("#img-button").on({
    mouseenter: function () {
      $(".ca-img").attr('src', './img/black-Property 23.png');
    },
    mouseleave: function () {
      $(".ca-img").attr('src', './img/Property 23.png');
    }
  });

  $("#img-button1").on({
    mouseenter: function () {
      $(".ca-img1").attr('src', './img/black-sound.png');
    },
    mouseleave: function () {
      $(".ca-img1").attr('src', './img/sound.png');
    }
  });

  $("#img-button2").on({
    mouseenter: function () {
      $(".ca-img2").attr('src', './img/black-music.png');
    },
    mouseleave: function () {
      $(".ca-img2").attr('src', './img/music.png');
    }
  });

  $("#img-button3").on({
    mouseenter: function () {
      $(".ca-img3").attr('src', './img/black-recording.png');
    },
    mouseleave: function () {
      $(".ca-img3").attr('src', './img/recording.png');
    }
  });

  $("#img-button4").on({
    mouseenter: function () {
      $(".ca-img4").attr('src', './img/black-costumer suport.png');
    },
    mouseleave: function () {
      $(".ca-img4").attr('src', './img/costumer suport.png');
    }
  });

});
//   all ------------------
function initParadoxWay() {
  "use strict";

  if ($(".testimonials-carousel").length > 0) {
    var j2 = new Swiper(".testimonials-carousel .swiper-container", {
      preloadImages: false,
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: false,
      grabCursor: true,
      mousewheel: false,
      centeredSlides: true,
      pagination: {
        el: '.tc-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.listing-carousel-button-next',
        prevEl: '.listing-carousel-button-prev',
      },
      breakpoints: {


        1024: {
          slidesPerView: 1,
        },

      }
    });
  }


}

//   Init All ------------------
$(document).ready(function () {
  initParadoxWay();
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 10) {
    $(".header_section").addClass("header-bg");
  } else {
    $(".header_section").removeClass("header-bg");
  }
})