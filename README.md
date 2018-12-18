# PIG DICE GAME
#### This is a game created using J Query, 2018
#### By Florence Kong'ani
## Description
Pig Dice is a game in which two players race to reach 100 points. Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player holds and scores the sum of the rolls. If the player rolls a 1, the player scores nothing and it becomes the opponent's turn.If the player rolls 2 - 6,the number is added to the player's turn total and the player's turn continues. If the player holds, the turn total is added to the player's score and it becomes the opponent's turn.
## Setup/Installation Requirements
Generate a random number 1-6. Add roll to scoreTurn. If a 1 is rolled, scoreTurn is 0. When turn is over add scoreTurn to the total score, and scoreTurn should reset to 0. If a player's total score reaches 100 the game is over and that player wins.

## BDD SPECIFICATIONS
|BEHAVIOUR                            |INPUT                   |OUTPUT                                          |
|---------------------------------------------------------------------------------------------------------------|
|1. Player-1 clicks 'Roll Dice' button|Click 'Roll Dice' button|Random number is generated                      |
|2. Die rolled is from 2-6            |Roll = 3                |Round total = 2                                 |
|3. Die rolled is 1                   |Roll = 1                |Round total = Total score = 2 / Player 2 begins |
|4. Repeat for Player 2               |Roll = 1                |Round total = 0,Total score = 0; Player 1 begins|
|5. If a player holds                 |Click 'Hold'            |Roll added to total score. Next player begins   |
|6. Player total reaches 100 or more  |Player total score = 100|Winner alert. Game resets                       |
## Known Bugs
There are no known bugs for this quiz board.I, however, had a lot of trouble setting up a function to process the scores.
## Technologies Used
HTML, CSS, JavaScript, and J Query
## Support and contact details
Contribution to this code is welcome. I can be contacted at konganiflorence@gmail.com
### License
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2018 FLORENCE KONG'ANI
