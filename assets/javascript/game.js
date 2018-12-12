
var directors = ["Kubrick","Speilberg","Gilliam","PT Anderson"]
var hints = ["2001 Space Odessy","Jaws","12 Monkeys","There Will Be Blood"]
var letterGuess =[]

var winsCount= 0;
var lossCount= 0;
var guessLeft= 12;


var dirList = document.getElementById("directors")
var hint = document.getElementById("hints")
var winsText = document.getElementById("wins")
var guess = document.getElementById("guessLeft")
var lossCountText = document.getElementById("losses")
var letterGuessText = document.getElementById("lettersGuessed")

dirList.textContent =
hint.textContent = 
winsText.textContent = "wins:" + winCount;
guess.textContent = "Letters guessed:" + letterGuess;
lossCountText.textContent = "Losses:" + lossCount;
letterGuessText.textContent = "Letters guessed:" + letterGuess;

hints.onclick = function(){

}

document.onkeyup = function(event) {

    var guess = event.key;
    var compDirector = directors[Math.floor(Math.random() * directors.length)];

};

document.onkeyup = function(event) {


}

winsText.textContent = "wins: " + wins+1;
lossesText.textContent = "losses: " + losses+1;
tiesText.textContent = "Guesses Left: " + ties;