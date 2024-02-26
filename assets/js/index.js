"use strict";

$(document).ready(function () {

  // expand video on scroll

  const videoObserver = new IntersectionObserver((entries) => {
    const isActive = entries[0].intersectionRatio > 0;
    const scale = (entries[0].boundingClientRect.top > 0) ? Math.min(entries[0].intersectionRatio * 1.25, 1) : 1;
    $(".video-embed").toggleClass("active", isActive);
    $(".video-embed").css("--scale", scale);
  }, { threshold: [...Array(1001).keys()].map((n) => n / 1000) });
  videoObserver.observe($(".video-wrapper")[0]);

  // show recent social responsibilities slider with button

  $(".hp-csr-recent-button").on("click", function () {
    const index = $(this).attr("data-csr-index");
    $(".hp-csr-slick").each(function () {
      if ($(this).attr("data-csr-index") === index) {
        $(this).fadeIn();
        $(this).slick("refresh");
      } else {
        $(this).hide();
      }
    });
  });

});