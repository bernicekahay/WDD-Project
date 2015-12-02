$(document).ready(function() {


// $("#carousal").click(function() {
//         $("#home-message").hide();
//     });
//when you click on the message it disappears
    

$(".carousel-item > div:gt(0)").hide();

setInterval(function() {
  $('.carousel-item > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.carousel-item');
}, 4000);


});