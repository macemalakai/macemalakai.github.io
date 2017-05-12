$(document).ready(function (){
  console.log("js and jQuery loaded!");



  // Global Variables and objects

  var $ammoCount = 0;

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



  var chosenLocations = [];
  // Function to choose 6 random locations to push to buttons. Not pushed yet.
  var randomLocation = function(array) {
    for(let i = 0; i < 6; i++){
      var randomIndex = Math.ceil(Math.random() *  array.length - 1);

      chosenLocations.push(array[randomIndex]);

      array.splice(randomIndex, 1);
    }
  };

  randomLocation(allLocations.locationsToChooseFrom);
  console.log(chosenLocations, "CHOSEN LOCATIONS");


  var pushToButtons = function() {

    var current = Math.ceil(Math.random() *  chosenLocations.length - 1);

    $("#top-left-button").html(chosenLocations[current]).css("font-family", "terminator").css("color", "white").css("text-shadow", "2px 2px #000000").css("text-align", "center").css("padding-top", "25px").css("padding-left", "5px").css("padding-right", "10px");
    chosenLocations.splice(current, 1);
    console.log(chosenLocations, "CHOSEN LOCATIONS 1");
    current = Math.ceil(Math.random() *  chosenLocations.length - 1);

    $("#top-middle-button").html(chosenLocations[current]).css("font-family", "terminator").css("color", "white").css("text-shadow", "2px 2px #000000").css("text-align", "center").css("padding-top", "25px").css("padding-left", "5px").css("padding-right", "10px");
    chosenLocations.splice(current, 1);
    console.log(chosenLocations, "CHOSEN LOCATIONS 2");
    current = Math.ceil(Math.random() *  chosenLocations.length - 1);

    $("#top-right-button").html(chosenLocations[current]).css("font-family", "terminator").css("color", "white").css("text-shadow", "2px 2px #000000").css("text-align", "center").css("padding-top", "25px").css("padding-left", "5px").css("padding-right", "10px");
    chosenLocations.splice(current, 1);
    console.log(chosenLocations, "CHOSEN LOCATIONS 3");
    current = Math.ceil(Math.random() *  chosenLocations.length - 1);

    $("#bottom-left-button").html(chosenLocations[current]).css("font-family", "terminator").css("color", "white").css("text-shadow", "2px 2px #000000").css("text-align", "center").css("padding-top", "25px").css("padding-left", "5px").css("padding-right", "10px");
    chosenLocations.splice(current, 1);
    console.log(chosenLocations, "CHOSEN LOCATIONS 4");
    current = Math.ceil(Math.random() *  chosenLocations.length - 1);

    $("#bottom-middle-button").html(chosenLocations[current]).css("font-family", "terminator").css("color", "white").css("text-shadow", "2px 2px #000000").css("text-align", "center").css("padding-top", "25px").css("padding-left", "5px").css("padding-right", "10px");
    chosenLocations.splice(current, 1);
    console.log(chosenLocations, "CHOSEN LOCATIONS 5");
    current = Math.ceil(Math.random() *  chosenLocations.length - 1);

    $("#bottom-right-button").html(chosenLocations[current]).addClass("button-text");
    chosenLocations.splice(current, 1);
    console.log(chosenLocations, "CHOSEN LOCATIONS 6");
    current = Math.ceil(Math.random() *  chosenLocations.length - 1);
  };




  $(".yellow-pages").on("click", pushToButtons);
});




// $(".yellow-pages").on("click", pushToButtons());






//TRYING to add box-shadow when clicked. DON'T WORRY ABOUT IT.

// $(".yellow-pages").on("click", function() {
//   console.log("clicked");
//   $(this).addClass("clicked");
// });




// Function to PUSH random locales to the actual buttons




//Push 6 random locations to chosenLocations,





// Set the background image to cover.
//We'll be selecting 6 random array values for buttons for the user to select. Gun shop and police station will always be shown, however.
