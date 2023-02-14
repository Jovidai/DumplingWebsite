const dumplingType = ["DumplingType1", "DumplingType2", "DumplingType3"];
const fillingText = ["FillingType1", "FillingType2", "FillingType3"];
const sauceText = ["SauceType1", "SauceType2", "SauceType3"];

var dumplingIndex = 0;
var fillingIndex = 0;
var sauceIndex = 0;

$(document).ready(function() {

  init();

});

function init(){
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
  
  // init Flickity with jQuery
  var $carousel = $('.main-carousel').flickity();
  var $carousel1 = $('.main-carousel1').flickity();
  var $carousel2= $('.main-carousel2').flickity();
  
  // access properties
  //var fillingArray = {1, 2, "The gyoza is from Japn..."}
  $carousel.on( 'settle.flickity', function( event, index ) {
    console.log( 'First Flickity settled at ' + index );
    dumplingIndex = index;
    const element = document.getElementById("end-text");
    element.src = dumplingType[dumplingIndex] + fillingText[fillingIndex + sauceText[sauceIndex]];
  });
  $carousel1.on( 'settle.flickity', function( event, index ) {
    console.log( 'Second Flickity settled at ' + index );
    fillingIndex = index;
  });
  $carousel2.on( 'settle.flickity', function( event, index ) {
    console.log( 'Third Flickity settled at ' + index );
    sauceIndex = index;
  });
}



function updateEndText(p1, p2) {
  
}