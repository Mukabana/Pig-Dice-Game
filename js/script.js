// Business Logic
//Create players (and generate random number)
var Player = function() {
  this.name = name;
  this.roll = function() {
    Math.floor((Math.random() * 6) + 1);
    return roll;
  };
}

var player1 = new Player();
var player2 = new Player();

//Set start game
var Player = function(turn) {
  this.turn = turn;
  this.totalScore = 0;
  this.turnScore = 0;
};

// User Interface Logic
$(document).ready(function() {
  var player1Name;
  var player2Name;

  totalRoll = parseInt($("#rolled-total").text());

  $("#signup-form").submit(function(event) {
    playerOneName = $("#player-1-signup").val();
    playerTwoName = $("#player-2-signup").val();

    if (player1Name == "" || player2Name == "") {
      alert("Please enter a name for each player");
      return;
    }
    event.preventDefault();
  });// end of submit


  //player 1 starts playing
  $(".roll-1 btn").click(function() {
    if (player1.turn === true) {
      if (player1.scoreTotal >= 100 || player2.scoreTotal >= 100) {
        alert("You\'ve   ;)");
      } else {
        player - 1. roll();
        if (player - 1. turnScore === 1) {
          player - 2. takeTurn();
          totalRoll = 0;

          else {
            totalRoll += player - 1. turnScore;
            player - 1. takeTurn();
            totalRoll += player - 1. turnScore;
          }
        }
      } else {
        if (player2.scoreTotal >= 100 || player1.scoreTotal >= 100) {
          alert("You\'ve   ;)");
        } else {
          player - 2. roll();
          if (player - 1. turnScore === 1) {
            player - 1. takeTurn();
            totalRoll = 0;

            else {
              totalRoll += player - 2. turnScore;
              player - 2. takeTurn();
              totalRoll += player - 2. turnScore;
            }
          }
        }
      }
    }
    event.preventDefault();
  }); // end of click roll

  $(".hold-1 btn").click(function() {
    if (player1.turn === true) {
      player1.takeTurn();
      player1.addPoints(totalRoll);
      totalRoll = 0;

    } else {
      player2.takeTurn();
      player2.addPoints(totalRoll);
      totalRoll = 0;
    }
    event.preventDefault();
  });

 // end ready
