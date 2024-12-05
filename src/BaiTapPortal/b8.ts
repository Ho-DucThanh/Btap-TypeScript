function generateRandomNumber(): number {
  return Math.floor(Math.random() * 10) + 1;
}

function checkGuess(userGuess: number, randomNumber: number): string {
  if (userGuess === randomNumber) {
    return "correct";
  } else if (userGuess > randomNumber) {
    return "high";
  } else {
    return "low";
  }
}
