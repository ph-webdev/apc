"use strict";

$(document).ready(function () {

  // product filter
  // workaround because slickFilter doesn't work in grid mode

  const gridOptions = {
    rows: 3,
    slidesPerRow: 3,
    adaptiveHeight: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    dots: true,
    arrows: false,
    draggable: true,
    swipe: true,
    touchMove: true,
    responsive: [
      { breakpoint: 768, settings: { slidesPerRow: 2 } },
    ],
  };

  const productSlickOptions = {
    ...gridOptions,
    draggable: false,
    swipe: false,
    touchMove: false,
    dotsClass: "slick-paginate",
    responsive: [
      { breakpoint: 768, settings: { slidesPerRow: 2 } },
      { breakpoint: 576, settings: { slidesPerRow: 1 } },
    ],
  };

  $(".products-slick").slick("unslick");
  const productsSlickClone = $(".products-slick").clone(true);
  $(".products-slick").slick(productSlickOptions);

  $(".product-filter-button").on("click", function () {
    $(".product-filter-button").removeClass("active");
    $(this).addClass("active");
    const category = $(this).attr("data-category");
    const productsSlickNew = productsSlickClone.clone(true);
    if (category !== "all") {
      productsSlickNew.children().each(function () {
        if ($(this).attr("data-category") !== category) {
          $(this).remove();
        }
      });
    }
    $(".products-slick").replaceWith(productsSlickNew);
    $(".products-slick").slick(productSlickOptions);
  });

});