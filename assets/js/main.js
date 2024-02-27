"use strict";

$(document).ready(function () {

  // utility: accordion toggle

  $(".accordion-toggle").on("click", function () {
    $(this).closest(".accordion").toggleClass("active");
  });

  // utility: clickable dropdown toggle

  $(".dropdown-click .dropdown-toggle").on("click", function () {
    $(this).closest(".dropdown").toggleClass("active");
  });

  // header: change header style on stick

  $(window).on("scroll", function () {
    const isSticking = $("html").scrollTop() > 0 || $("body").scrollTop() > 0;
    $("header").toggleClass("sticking", isSticking);
  });

  // header: mobile nav controls

  $(".sp-nav-open").on("click", function () {
    $(".sp-nav-menu").addClass("active");
  });
  $(".sp-nav-close").on("click", function () {
    $(".sp-nav-menu").removeClass("active");
  });
  $(".sp-nav-menu a").on("click", function () {
    $(".sp-nav-menu").toggleClass("active", !(this.pathname === location.pathname));
  });

  // initialise slick carousels

  const baseOptions = {
    pauseOnFocus: false,
    pauseOnHover: false,
    waitForAnimate: false,
    arrows: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    swipeToSlide: true,
  };

  const gridOptions = {
    rows: 3,
    slidesPerRow: 3,
    adaptiveHeight: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    waitForAnimate: false,
    dots: true,
    arrows: false,
    draggable: true,
    swipe: true,
    touchMove: true,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 768, settings: { slidesPerRow: 2 } },
    ],
  };

  $(".top-carousel-slick").on("init", function (event, slick) {
    setInterval(() => {
      $(this).slick("slickGoTo", $(this).slick("slickCurrentSlide") + 2);
    }, 4000);
  })
  $(".top-carousel-slick").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    $(this).find(".slick-slide").removeClass("hidden");
    $(this).find(".slick-slide").each(function () {
      if ((parseInt($(this).attr("data-slick-index")) + slick.slideCount + 1) % slick.slideCount === nextSlide) {
        $(this).addClass("hidden");
      }
    });
  });
  $(".top-carousel-slick").slick({
    ...baseOptions,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '12.5%',
    speed: 2000,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  });

  $(".product-scroller-slick").slick({
    ...baseOptions,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 3 } },
    ],
  });

  $(".product-spotlight-slick").slick({
    ...baseOptions,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $(".hp-factory-slick").slick({
    ...baseOptions,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $(".hp-csr-slick").on("init", function (event, slick) {
    if ($(this).attr("data-csr-index") !== "0") {
      $(this).hide();
    }
  });
  $(".hp-csr-slick").slick({
    ...baseOptions,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    draggable: true,
    swipe: true,
    touchMove: true,
    dotsClass: "slick-dots small white",
  });

  $(".csr-slick").slick({
    ...gridOptions,
    dotsClass: "slick-dots white",
  });

  $(".csr-single-slick").slick({
    ...baseOptions,
    arrows: true,
  });

  $(".factory-slick").slick({
    ...gridOptions,
    dotsClass: "slick-dots red",
  });

  $(".products-slick").slick({
    ...gridOptions,
    draggable: false,
    dotsClass: "slick-paginate",
    responsive: [
      { breakpoint: 768, settings: { slidesPerRow: 2 } },
      { breakpoint: 576, settings: { slidesPerRow: 1 } },
    ],
  });

  $(".product-images-slick").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    $(".product-images-button").removeClass("active");
    $(".product-images-button").eq(nextSlide).addClass("active");
  });
  $(".product-images-slick").slick({
    ...baseOptions,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: true,
    swipe: true,
    touchMove: true,
  });

  $(".product-recommendations-slick").slick({
    ...baseOptions,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '10%',
    draggable: true,
    swipe: true,
    touchMove: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  });

  $(".news-list-slick").on("init", function (event, slick) {
    if ($(this).index(".news-list-slick") !== 0) {
      $(this).hide();
    }
  });
  $(".news-list-slick").slick({
    ...gridOptions,
    rows: 5,
    slidesPerRow: 1,
    adaptiveHeight: false,
    draggable: false,
    dotsClass: "slick-paginate",
    responsive: [],
  });

  // fix: jump to correct position after layout shifts

  if (location.hash) {
    $("html, body").scrollTop(0);
    setTimeout(() => {
      const scrollTop = $(location.hash).offset().top - $("header").outerHeight();
      $("html, body").scrollTop(scrollTop);
    }, 0);
  }

});