const dumplingType = ["DumplingType0", "DumplingType1", "DumplingType2"];
const fillingText = ["FillingType0", "Pork is from south China and is used during the new year.", "FillingType2"];
const sauceText = ["SauceType0", "Lao gan ma is very popular in the south east", "SauceType2"];

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
    cellAlign: 'center',
    contain: false,
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
    updateEndText();
  });

  $carousel1.on( 'settle.flickity', function( event, index ) {
    console.log( 'Second Flickity settled at ' + index );
    fillingIndex = index;
    updateEndText();

  });
  $carousel2.on( 'settle.flickity', function( event, index ) {
    console.log( 'Third Flickity settled at ' + index );
    sauceIndex = index;
    updateEndText();

  });
  updateEndText();


}

function finishedStuff(){
  //show the ending
  //show the text
  //show the map
  //yelp?
}

function updateEndText() {
  const element = document.getElementById("end-text");
  element.innerHTML = dumplingType[dumplingIndex] + "\n" + fillingText[fillingIndex] + "\n" + sauceText[sauceIndex];
}

const scrollBtn = document.getElementById("start-button");
const scrollTarget = document.getElementById("scroll-target");

scrollBtn.addEventListener("click", () => {
  scrollTarget.scrollIntoView({ behavior: "smooth" });
});