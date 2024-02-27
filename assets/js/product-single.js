"use strict";

$(document).ready(function () {

  // product images control

  $(".product-images-button").on("click", function () {
    $(".product-images-button").removeClass("active");
    $(this).addClass("active");
    const index = $(this).index();
    $(".product-images-slick").slick("slickGoTo", index);
  });

});