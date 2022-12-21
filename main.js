let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Update message
const uiMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Update score
const uiScore = function (score) {
  document.querySelector(".score").textContent = score;
};

let userInput = document.getElementById("userInput");
userInput.addEventListener("submit", function (e) {
  e.preventDefault();
  let userNumber = parseInt(document.querySelector(".user-number").value);

  // No number entered
  if (!userNumber) {
    uiMessage("No number. Please introduce a number");
    // User wins
  } else if (userNumber === secretNumber) {
    uiMessage("The number is correct!");
    document.querySelector(".secret-number").textContent = secretNumber;
    // Set highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // Wrong guess
  } else if (score > 1) {
    // Hint
    if (userNumber != secretNumber) {
      uiMessage(
        userNumber > secretNumber
          ? "The secret number is lower"
          : "The secret number is higher"
      );
      score--;
      uiScore(score);
    }
    // Lost the game
  } else {
    uiMessage("You lost the game. Try again");
    uiScore(0);
  }
});

let tryAgain = document.querySelector(".again");
tryAgain.addEventListener("click", function (e) {
  e.preventDefault();

  secretNumber = document.querySelector(".secret-number").textContent =
    Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".secret-number").textContent = "?";
  score = 20;
  uiScore(20);
  uiMessage("Introduce a number");
  document.querySelector(".user-number").value = "";
});
