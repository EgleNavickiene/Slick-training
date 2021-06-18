$(document).ready(function () {
    // Priskiriame HTML elementui, slick functionaluma
    $(".bit-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

$(".bit-slider2").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });

  $(".bit-slider3").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2
  });
});


var tabEl = document.querySelectorAll('button[data-bs-toggle="tab"]');
console.log(tabEl);

for(i = 0; i < tabEl.length; i++) {
    tabEl[i].addEventListener('shown.bs.tab', function (event) {
    
    $(window).resize();
});
}