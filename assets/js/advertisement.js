"use strict";

$(document).ready(function () {

  // video lightbox controls

  $(".advertisement-lightbox-button").on("click", function () {
    if (!$(".sp-nav-menu").hasClass("active")) {
      BigPicture({
        el: $(this).find(".advertisement-thumb")[0],
        ytSrc: $(this).attr("data-vid"),
      });
    }
  });

});