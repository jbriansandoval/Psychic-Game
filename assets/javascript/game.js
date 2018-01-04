var letterchoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];

var computerPick = letterchoices[Math.floor(Math.random() * letterchoices.length)];
console.log("CP: " + computerPick);


var newComputerPick = function () {
  this.computerPick = this.letterchoices[Math.floor(Math.random() * letterchoices.length)];
  }

document.onkeyup = function(event) {
  var userPick = (event.key).toLowerCase();
  
  if (letterchoices.indexOf(event.key) > -1) {
    lettersGuessed.push(userPick);
    document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: " + lettersGuessed;
   } else {
    alert("invalidkey");
   }
  
  if (userPick === computerPick){
    wins++;
    console.log("wins:" + wins)
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    guessesLeft = 10;
    lettersGuessed = [];
    newComputerPick();  
  } 

  if (userPick !== computerPick){
    guessesLeft--;
    console.log("CP: " + computerPick);
    console.log("UP: " + userPick);
    console.log( "Guesses Left: " + guessesLeft);
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
   
  }

  if (guessesLeft === 0){
    losses++;
    guessesLeft = 10;
    lettersGuessed = [];
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    
  }
  
}
