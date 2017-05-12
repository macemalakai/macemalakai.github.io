$(document).ready(function (){
  console.log("js and jQuery loaded!");



// Global Variables and objects


var allLocations = {
  locationsToChooseFrom: [
    "Gun Shop",
    "Small Home",
    "Suburban Home",
    "Under the Bridge",
    "Restaurant",
    "Motel: Side of the Road",
    "Police Station"
  ]
};


// Functions for Mousing over and clicking buttons.
// Come back to later and try to wrap all of this up in a function or two.

$("#top-left-button").on("mouseenter", function() {
  $(this).css("background-color", "rgba(255,255,255, .3)");
});

$("#top-left-button").on("mouseleave", function() {
  $(this).css("background-color", "rgba(0,0,0, .5)");
});

$("#top-left-button").on("click", function() {
  $(this).addClass("clicked");
  $(this).off();
});

//Wrapping up Top Left Button functionality

$("#top-right-button").on("mouseenter", function() {
  $(this).css("background-color", "rgba(255,255,255, .3)");
});

$("#top-right-button").on("mouseleave", function() {
  $(this).css("background-color", "rgba(0,0,0, .5)");
});

$("#top-right-button").on("click", function() {
  $(this).addClass("clicked");
  $(this).off();
});
// Top Right Button Clicking.

$("#top-middle-button").on("mouseenter", function() {
  $(this).css("background-color", "rgba(255,255,255, .3)");
});

$("#top-middle-button").on("mouseleave", function() {
  $(this).css("background-color", "rgba(0,0,0, .5)");
});

$("#top-middle-button").on("click", function() {
  $(this).addClass("clicked");
  $(this).off();
});
//Top middle button clicking.

$("#bottom-left-button").on("mouseenter", function() {
  $(this).css("background-color", "rgba(255,255,255, .3)");
});

$("#bottom-left-button").on("mouseleave", function() {
  $(this).css("background-color", "rgba(0,0,0, .5)");
});
$("#bottom-left-button").on("click", function() {
  $(this).addClass("clicked");
  $(this).off();
});

//Bottom left button clicking.

$("#bottom-middle-button").on("mouseenter", function() {
  $(this).css("background-color", "rgba(255,255,255, .3)");
});

$("#bottom-middle-button").on("mouseleave", function() {
  $(this).css("background-color", "rgba(0,0,0, .5)");
});

$("#bottom-middle-button").on("click", function() {
  $(this).addClass("clicked");
  $(this).off();
});
//Bottom Middle button clicking

$("#bottom-right-button").on("mouseenter", function() {
  $(this).css("background-color", "rgba(255,255,255, .3)");
});

$("#bottom-right-button").on("mouseleave", function() {
  $(this).css("background-color", "rgba(0,0,0, .5)");
});

$("#bottom-right-button").on("click", function() {
  $(this).addClass("clicked");
  $(this).off();
});

//Bottom Right Button Clicking








var randomLocation = function(array) {
  return allLocations.locationsToChooseFrom[(Math.ceil(Math.random() * allLocations.locationsToChooseFrom.length - 1))]
}
console.log(randomLocation(allLocations.locationsToChooseFrom));








// Set the background image to cover.
//We'll be selecting 6 random array values for buttons for the user to select. Gun shop and police station will always be shown, however.















});
