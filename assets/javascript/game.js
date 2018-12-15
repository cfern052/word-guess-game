
var directors = ["Kubrick", "Speilberg", "Gilliam", "Lucas", "Tarantino"]
var hints = {Kubrick:"2001 Space Odessy", Speilberg:"Jaws", Gilliam:"12 Monkeys", Lucas:"Star Wars", Tarantino:"Inglorius Basterds"}
var letterGuess = []
var currentCorrectAnswer = null


//for loop to create underscores
//in loop, compare




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
lossCountText.textContent = "Losses:" +  lossCount;
letterGuessText.textContent = "Letters guessed:" +  letterGuess;

var startButton =  document.getElementsByClassName("start")[0];

startButton.addEventListener('click', function() {
    var blankDirectorNameElem = document.getElementById( 'blankDirectorName' );
  // start each game by clearing out underscores
  blankDirectorNameElem.innerHTML = "";
    // also start each game by clearing out these vars
  currentCorrectAnswer = null;
  guessedAnswer = null;
  alreadyGuessedArray = [];

    // get a random director from your array
  var randDirector = directors[Math.floor(Math.random() * directors.length)];

  currentCorrectAnswer = randDirector;

  // get the length of the director's name
  var randDirectorStringLength = randDirector.length;

  // create a string of underscores that is the length of the name
  guessedAnswer = "_ ".repeat(randDirectorStringLength);

  // append the underscoreString to #blank_director_name
  // insertAdjacentHTML takes 2 args, the position: afterbegin, and the content
  blankDirectorNameElem.insertAdjacentHTML( 'afterbegin', guessedAnswer );
});

document.onclick = function() {

    var hints = {Kubrick:"2001 Space Odessy", Speilberg:"Jaws", Gilliam:"12 Monkeys", Lucas:"Star Wars", Tarantino:"Inglorius Basterds"}
    console.log(onclick);
    // var directorIndex = dirList.indexOf(directors);
    // var hintIndex = hint.indexOf(hints);
    // showHint.innerHTML = "Hint: - " + hints[directorIndex][hintIndex];
    if(directors[0]){
      var hintk = hints.Kubrick
      document.getElementById("#hint").textContent(hintk);
    }
    if(directors[1]){
      var hintk = hints.Speilberg
      document.getElementById("#hint").textContent(hintk);
    }
    if(directors[2]){
      var hintk = hints.Gilliam
      document.getElementById("#hint").textContent(hintk);
    }
    if(directors[3]){
      var hintk = hints.Lucas
      document.getElementById("#hint").textContent(hintk);
    }
    if(directors[4]){
      var hintk = hints.Tarantino
      document.getElementById("#hint").textContent(hintk);
    }

};

// $(".hint").on("click", function(){

//     var isEqual = function(".hint", directors )

    
// });

document.onkeyup = function(event) {

    var letterGuess = event.key;
    var compDirector = directors[Math.floor(Math.random() * directors.length)];
    letterGuessText.append(letterGuess)

    if (alreadyGuessedArray.includes(letterGuess)) {
        alert("Letter Already Guessed!");
      } if (currentCorrectAnswer.indexOf(letterGuess) > -1) {
        // we replace the underscore string with the updated string with their correct answer in it
        // this is probably going to be tough lol, i gotta think on how to do that
      } else {
        alreadyGuessedArray.push(letterGuess);
      }
  };

   

    //check letter has been guessed
    //if letter has been guessed display "letter already guessed"
    //if letter is gussed is correct display letter. replace underscore with correct letter

