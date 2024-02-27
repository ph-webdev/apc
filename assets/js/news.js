"use strict";

$(document).ready(function () {

  // show news list

  $(".news-filter-button").on("click", function () {
    $(".news-filter-button").removeClass("active");
    $(this).addClass("active");
    const category = $(this).attr("data-category");
    $(".news-list-slick").each(function () {
      if ($(this).attr("data-category") === category) {
        $(this).fadeIn();
        $(this).slick("refresh");
      } else {
        $(this).hide();
      }
    });
  });

});