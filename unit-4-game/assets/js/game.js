var randomResult;
var won = 0;
var lost = 0;
var previous = 0;


var newGame = function () {

//Displays random number on page
randomResult = Math.floor(Math.random() * 101) + 19;
$("#result").html(randomResult);

//Displays total points
$("#total").html(previous);

//Displays losses
$("#lost").html("Losses: " + lost);

//Displays wins
$("#won").html("Wins: " + won);

var images = [
    "assets/images/bismuth_crystal-sm.jpg",
    "assets/images/green crystal-sm.jpg",
    "assets/images/purp-geod-sm.jpg",
    "assets/images/rainbow-sm.jpg",
];



//Gets rid of previous crystals
$("#crystals").empty();

//Setting up boxes using a for loop
for (var i = 0; i < 4; i++ ) {

//Gives each box a random value
  var random = Math.floor(Math.random() * 19) + 1;
  console.log(random);

  //Creates div and class of boxes with random numbers assigned to each 
  var crystal = $("<div>");
  //setter 
    crystal.attr({
      "class": 'crystal',
      "data-random": random
  });
  crystal.css({
      "background-image":"url('" + images[i] + "')",
      "background-size":"cover",
      
  });

//Puts  var crystal inside of id crystals on webpage
  $("#crystals").append(crystal);
    console.log("werkin")
};
}

newGame();
console.log(randomResult)
//getter
//Event deligation
$(document).on('click', '.crystal', function () {

    //Turns the string into a number
    var num = parseInt($(this).attr('data-random'));

    //takes the numbers and adds next numbers depending on what box you press
    previous += num;

   //If the total is more than the random number then register a loss
    if (previous > randomResult) {
        lost++;
        $("#lost").html("You've lost: " + lost)
        previous = 0;
        console.log(lost)
        newGame();
    }
    //If the total is equil to the random number register a win
    else if (previous === randomResult) {
        won++;
        $("#won").html("You've won: " + won)
        previous = 0;
        console.log(won)
        newGame();
    }
    console.log(previous);
    //Updates
    $("#total").html(previous);
})

