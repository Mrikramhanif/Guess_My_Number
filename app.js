"use strict";

let secretmNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
///You can also use this fucntion for display message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "☹ You have No Number";

    //Player Win
  } else if (guess === secretmNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Answer";
    document.querySelector(".number").textContent = secretmNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;
      console.log(
        (document.querySelector(".highscore").textContent = highscore)
      );
    }
    //guess is not equal to secret Number
  } else if (guess !== secretmNumber) {
    if (score > 1) {
      displayMessage(guess > secretmNumber ? "📈 Too high!" : "📉 Too low!");
      //   document.querySelector(".message").textContent = "You are To High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " 🤔 You Lost the Game";
      document.querySelector(".score").textContent = 0;
    }
    //if guess is greater than secret number
  } else if (guess < secretmNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "You are To Low";
      document.querySelector(".score").textContent = score;
      score--;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game";
    }
  }
});
///////////////////////////Again Handler/////////////////////////////////////////
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretmNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
