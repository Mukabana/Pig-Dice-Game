/*
Game rules:
The goal of the game is to be the first player to get 100 points or more.
The game has 2 players; players take turns rolling a six-sided die.
If a 1 is rolled, then the player gets no points and it becomes the other player's turn.
If the player rolls any other number, i.e. 2 through 6, it is added to their turn total and the player's turn continues
If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn
The first player to score 100 or more points wins
The purpose of this code is to make a program that gives the players options to roll again or hold, generate random numbers, and also be able to add and display each player's scores
*/

$(document).ready(function() {
  function currentPlayer(playerName, score, turnScore) {          //We need two players, so we define the players by using a constructor to create player properties
    this.playerName = playerName;                                //We'll have two players; player1 and player2
    this.score = score;                                         //this is a player's total score at any point in the game
    this.turnScore = turnScore;                                //this is the total number of points accumulated from several rolls of dice

    var player1 = new currentPlayer;
    var player2 = new currentPlayer;
  };

  /*We add the method by which the two players will play. We use JavaScript prototypes. They'll need a 6-sided dice and we need to generate a random number from 1 to 6*/
  Player.prototype.rollDice = function () {
    var rollScore = 0      //this is the score for one roll of dice. We initially set it at zero seeing as no dice has been rolled yet.
    var diceRoll = parseInt(Math.random()*6 + 1);  //this is so we can generate a random number from 1 to 6

    if(dice !==1) {
      rollScore = diceRoll;
      this.turnScore += rollScore
    } else {
      rollScore = 0;
      this.turnScore = 0;
      return "Roll One";
    }
  };

  Player.prototype.stop =function () {
    this.score += this.turnScore
    this.turnScore = 0;
  }
  Player.prototype.newTurn = function () {
    this.turnScore = 0;
  }



});
