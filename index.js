var Word = require("./Word.js");
var inquirer = require("inquirer");
var guesses = 10;

function enterWord () {
    inquirer.prompt([
        {
            type: "password",
            message: "Enter a word to guess",
            name: "guessWord"
        }
    ]).then(function (input) {
        var word = new Word(input.guessWord);
        word.createWord(input.guessWord);
        promptGuess(word);
    })
}

function promptGuess(word) {
    if (checkWinLoss(word)){
        inquirer.prompt([
            {
                message: "Enter a Leter to guess",
                name: "charGuess",
                validate: function (name) {
                    if (name.length === 1) {
                        return true;
                    }
                    return false;
                }
            }
        ]).then(function(input) {
            var check = word.checkGuess(input.charGuess);
            if (!check) {
                guesses--
                console.log(`Incorrect! ${guesses} guesses left!`)
            }
            promptGuess(word);
        })
    }
    else {
        console.log("Good Job! You win!");
        resetWord();
    }
}

function checkWinLoss (word) {
    if (guesses === 0) {
        console.log("Too bad! You lose!")
        resetWord();
    }
    for (var i = 0; i < word.word.length; i++) {
        if (!word.word[i].guess) {
            return true;
        }
    }
    return false;
}

function resetWord() {
    guesses = 10;
    enterWord();
}
enterWord();