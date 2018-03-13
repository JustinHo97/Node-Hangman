function Letter(ltr) {
    this.letter = ltr;
    this.guess = false;
    this.guessCheck = function () {
        if (this.guess) {
            return this.letter;
        }
        else if (this.letter === " ") {
            this.guess = true;
            return " ";
        }
        else return "_";
    }
    this.letterCheck = function (input) {
        if (input === this.letter) {
            this.guess = true;
            return true;
        }
        return false;
    }
}

module.exports = Letter;