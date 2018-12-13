
var directors = ["Kubrick","Speilberg","Gilliam","PT Anderson"]
var hints = ["2001 Space Odessy","Jaws","12 Monkeys","There Will Be Blood"]
var letterGuess =[]

var winCount= 0;
var lossCount= 0;
var guessLeft= 12;


var dirList = document.getElementById("directors")
var hint = document.getElementById("hints")
var winsText = document.getElementById("wins")
var guessText = document.getElementById("guess")
var lossCountText = document.getElementById("losses")
var letterGuessText = document.getElementById("lettersGuessed")

winsText.textContent = "wins:" + wins+1;
lossCountText.textContent = "losses:" + lossCount+[];
guessText.textContent = "Guesses Left:" + guessLeft;

dirList.textContent ="";
hint.textContent = "";
guess.textContent = "Letters guessed:" + letterGuess;
lossCountText.textContent = "Losses:" + lossCount;
letterGuessText.textContent = "Letters guessed:" + letterGuess;

hint.onclick = function(){


    console.log(onclick);
    var directorIndex = categories.indexOf(directors);
    var hintIndex = chosenCategory.indexOf(hints);
    showHint.innerHTML = "Hint: - " +  hints [directorIndex][hintIndex];

}

document.onkeyup = function(event) {

    var guess = event.key;
    var compDirector = directors[Math.floor(Math.random() * directors.length)];

};

document.onkeyup = function(event) {


}

