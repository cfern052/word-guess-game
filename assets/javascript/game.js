
var directors = ["Kubrick","Speilberg","Gilliam","PT Anderson"]
var hints = ["2001 Space Odessy","Jaws","12 Monkeys","There Will Be Blood"]

var wins= 0;
var losses= 0;
var guessLeft= 12;




hints.onclick = function(){

}

document.onkeyup = function(event) {

    var userGuess = event.key;
    var compDirector = directors[Math.floor(Math.random() * directors.length)];

}

winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        tiesText.textContent = "Guesses Left: " + ties;