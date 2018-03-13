var Letter = require("./Letter.js");

var Word = function (guessWord) {
    this.word = []
    this.createWord = function (guessWord) {
        var temp = guessWord.toLowerCase().split("");
        for (var i = 0; i < temp.length; i++) {
            var tempWord = new Letter(temp[i]);
            this.word.push(tempWord);
        }
        this.displayWord();
    }
    this.displayWord = function () {
        var displayWord = [];
        for (var i = 0; i < this.word.length; i++) {
            displayWord.push(this.word[i].guessCheck());
        }
        console.log(displayWord.join(" "));
    }
    this.checkGuess = function (input) {
        var count = 0;
        for (var i = 0; i < this.word.length; i++) {
            if (this.word[i].letterCheck(input)) {
                count++
            }
        }
        if (count > 0) {
            console.log("Correct!!")
            this.displayWord();
            return true;
        }
        this.displayWord();
        return false;
    }
}
module.exports = Word;