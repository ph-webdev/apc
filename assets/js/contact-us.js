"use strict";

function initMap() {}

initMap = function () {

  const map = new google.maps.Map(document.getElementById("gmap"), {
    mapId: "814daa32995375f0",
    center: { lat: 22.4603747, lng: 114.1843429 },
    zoom: 14,
    mapTypeControl: false,
    streetViewControl: false,
  });

  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({
    address: "香港新界大埔工業邨大富街12號GMP中心2及3樓",
    language: "zh-HK",
  }, (results, status) => {
    if (status === google.maps.GeocoderStatus.OK) {
      const lat = results[0].geometry.location.lat();
      const lng = results[0].geometry.location.lng();
      new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: { lat: lat, lng: lng },
      });
      map.setCenter({ lat: lat, lng: lng });
    }
  });

}