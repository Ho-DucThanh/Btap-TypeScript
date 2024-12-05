"use strict";
function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
function checkGuess(userGuess, randomNumber) {
    if (userGuess === randomNumber) {
        return "correct";
    }
    else if (userGuess > randomNumber) {
        return "high";
    }
    else {
        return "low";
    }
}
