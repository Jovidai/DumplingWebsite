
$('.main-carousel').flickity({
  // options
  cellAlign: 'center',
  contain: true
});

$('.main-carousel1').flickity({
  // options
  cellAlign: 'left',
  contain: false,
  adaptiveHeight: true
});

$('.main-carousel2').flickity({
  // options
  cellAlign: 'center',
  contain: true
});

const flickityCarousel = document.getElementById("first-carousel");
console.log(flickityCarousel);

console.log(flickityCarousel.tabIndex);

// init Flickity with jQuery
var $carousel = $('.main-carousel').flickity();
var $carousel1 = $('.main-carousel1').flickity();
var $carousel2= $('.main-carousel2').flickity();

// get instance
var flkty = $carousel.data('flickity');
var flkty1 = $carousel1.data('flickity');
var flkty2 = $carousel2.data('flickity');


// access properties
//var fillingArray = {1, 2, "The gyoza is from Japn..."}
$carousel.on( 'settle.flickity', function( event, index ) {
  console.log( 'First Flickity settled at ' + index );
});
$carousel1.on( 'settle.flickity', function( event, index ) {
  console.log( 'Second Flickity settled at ' + index );
});
$carousel2.on( 'settle.flickity', function( event, index ) {
  console.log( 'Third Flickity settled at ' + index );
});