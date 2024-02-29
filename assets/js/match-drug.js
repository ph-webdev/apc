"use strict";

$(document).ready(function () {

  // match drug

  $(".symptome-button").on("click", function () {
    $(".symptome-button").removeClass("active");
    $(this).addClass("active");
    const symptomeIndex = $(this).attr("data-symptome-index");
    $(".product-list-item").hide();
    $(".product-list-item").each(function () {
      if ($(this).attr("data-symptome-index-list").split(",").includes(symptomeIndex)) {
        $(this).fadeIn();
      }
    });
  });

});