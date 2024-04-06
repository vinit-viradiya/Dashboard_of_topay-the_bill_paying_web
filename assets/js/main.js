var swiper = new Swiper(".slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000
  },
  breakpoints: {
    '576': {
      slidesPerView: 1.3
    }
  },
});

function img2svg() {
  jQuery('.in-svg').each(function (i, e) {
    var $img = jQuery(e);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');
      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', ' ' + imgClass + ' replaced-svg');
      }
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });
}
img2svg();

AOS.init();

$(document).ready(function () {
  $('#example').DataTable();
  $('.loader-wrapper').fadeOut("slow");
});

$(".hamburger-menu").click(function () {
  $(".left-sidebar").toggleClass("sidebar-min");
  $("header .logo").toggleClass("small");
  $(".left-sidebar a span ,.left-sidebar button span").toggleClass("d-none");
  $(".left-sidebar button").toggleClass("d-block");
  $("body").toggleClass("ms-85");
  $(".left-sidebar .accordion .accordion-collapse").toggleClass("hovered-accordion");
  $(".left-sidebar .accordion button").toggleClass("disabled");
});

if (parseInt($(window).width()) < 991) {

  $('.hamburger-menu').trigger('click');

}