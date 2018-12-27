
var directors = ["Kubrick", "Speilberg", "Gilliam", "Lucas", "Tarantino"]
var hints = { Kubrick: "2001 Space Odessy", Speilberg: "Jaws", Gilliam: "12 Monkeys", Lucas: "Star Wars", Tarantino: "Inglorius Basterds" }
var letterGuess = [];
var currentCorrectAnswer = null;
var guessArray = [];
var winCount = 0;
var lossCount = 0;
var guessLeft = 10;

var dirList = document.getElementById("directors")
var hint = document.getElementById("hints")
var winsText = document.getElementById("wins")
var guessText = document.getElementById("guess")
var lossCountText = document.getElementById("losses")
var letterGuessText = document.getElementById("lettersGuessed")

winsText.textContent = "wins:" + winCount;
lossCountText.textContent = "losses:" + lossCount;
guessText.textContent = "Guesses Left:" + guessLeft;
dirList.textContent = "Guess the Director:";
guess.textContent = "";
lossCountText.textContent = "Losses:" + lossCount;
letterGuessText.textContent = "Letters guessed:" + letterGuess;

var startButton = document.getElementsByClassName("start")[0];

startButton.addEventListener('click', function () {
  var blankDirectorNameElem = document.getElementById('blankDirectorName');
  blankDirectorNameElem.innerHTML = guessArray;
  currentCorrectAnswer = null;
  guessedAnswer = null;
  alreadyGuessedArray = [];

  // get a random director from your array
  var randDirector = directors[Math.floor(Math.random() * directors.length)];
  
  currentCorrectAnswer = randDirector;
  console.log(currentCorrectAnswer);
  // get the length of the director's name
  for (var i = 0; i < currentCorrectAnswer.length; i++) {
    // replace array values with underscores 
    guessArray.push('_')
    
  }
  //var remainingLetters = randDirector.length;
  console.log(guessArray);


  //call display function


  // create a string of underscores that is the length of the name


  // append the underscoreString to #blank_director_name
  // insertAdjacentHTML takes 2 args, the position: afterbegin, and the content
 // blankDirectorNameElem.insertAdjacentHTML('afterbegin', guessedAnswer);
});

var hintButton = document.getElementsByClassName('hint');

console.log(hintButton)

hintButton.onclick = function () {
  console.log('clicked');

  var hints = { Kubrick: "2001 Space Odessy", Speilberg: "Jaws", Gilliam: "12 Monkeys", Lucas: "Star Wars", Tarantino: "Inglorius Basterds" }
  console.log(onclick);
  // var directorIndex = dirList.indexOf(directors);
  // var hintIndex = hint.indexOf(hints);
  // showHint.innerHTML = "Hint: - " + hints[directorIndex][hintIndex];
  if (randDirector[0]) {
    var hintk = hints.Kubrick
    document.getElementById("hint").textContent = hintk;
  }
  if (randDirector[1]) {
    var hintk = hints.Speilberg
    document.getElementById("hint").textContent = hintk;
  }
  if (randDirector[2]) {
    var hintk = hints.Gilliam
    document.getElementById("hint").textContent = hintk;
  }
  if (randDirector[3]) {
    var hintk = hints.Lucas
    document.getElementById("hint").textContent = hintk;
  }
  if (randDirector[4]) {
    var hintk = hints.Tarantino
    document.getElementById("hint").textContent = hintk;
  }

};

document.onkeyup = function (event) {

  var letterGuess = event.key;
 
  letterGuessText.append(letterGuess)
  for( i = 0 ; i < currentCorrectAnswer.length; i++){
    currentCorrectAnswer[i]
    for(z=0; z<letterGuess.length; z++){
      if (letterGuess[z] === currentCorrectAnswer[i]) {
        currentCorrectAnswer.push(letterGuess[z])
        console.log("correct " + currentCorrectAnswer)
    } 
  //   else {
  //     .push(guess[z])
  //     console.log("incorrect " + triedCharacters)
  // }
};
  

 
    }



};



// Write Display array function

// function displayArray() {
//   for(var j = 0; j<directors.length; j++)
//   if (director === [directors]) {
//     // replace.indexOf[guessArray]{
//       guessArray[j] = letterGuess;
//       remainingLetters --;
//     }
//   }



    //check letter has been guessed
    //if letter has been guessed display "letter already guessed"
    //if letter is gussed is correct display letter. replace underscore with correct letter

