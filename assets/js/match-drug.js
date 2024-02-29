"use strict";

$(document).ready(function () {

  // match drug

  $(".symptom-button").on("click", function () {
    $(".symptom-button").removeClass("active");
    $(this).addClass("active");
    const symptomIndex = $(this).attr("data-symptom-index");
    $(".product-list-item").hide();
    $(".product-list-item").each(function () {
      if ($(this).attr("data-symptom-index-list").split(",").includes(symptomIndex)) {
        $(this).fadeIn();
      }
    });
  });

});