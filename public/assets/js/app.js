let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const winsound = document.getElementById("winSound");
const Lostsound = document.getElementById("lostSound");
const Tiedsound = document.getElementById("tiedSound");

function getComputerChoice() {
  const choices = ["r", "p", "s"];

  return choices[Math.floor(Math.random() * 3)];
}

function win(user, computer) {
  winsound.play();
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML =
    "Computer picked " + convertName(computer) + " : YOU WON";
  document.getElementById(user).classList.add("green-glow");
  document.getElementById(computer).classList.add("red-glow");
  document.getElementById("head").classList.add("headerwon");

  setTimeout(function () {
    document.getElementById(user).classList.remove("green-glow");
  }, 1500);
  setTimeout(function () {
    document.getElementById(computer).classList.remove("red-glow");
  }, 1500);
  setTimeout(function () {
    document.getElementById("head").classList.remove("headerwon");
  }, 1500);
}

function draw(user, computer) {
  Tiedsound.play();
  result_p.innerHTML =
    "Computer picked " + convertName(computer) + " : ROUND TIED";
  document.getElementById(user).classList.add("grey-glow");
  document.getElementById(computer).classList.add("grey-glow");
  document.getElementById("head").classList.add("headertied");

  setTimeout(function () {
    document.getElementById(user).classList.remove("grey-glow");
  }, 1500);
  setTimeout(function () {
    document.getElementById(computer).classList.remove("grey-glow");
  }, 1500);
  setTimeout(function () {
    document.getElementById("head").classList.remove("headertied");
  }, 1500);
}

function loose(user, computer) {
  Lostsound.play();
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML =
    "Computer picked " + convertName(computer) + " : YOU LOST";
  document.getElementById(user).classList.add("green-glow");
  document.getElementById(computer).classList.add("red-glow");
  document.getElementById("head").classList.add("headerloose");

  setTimeout(function () {
    document.getElementById(user).classList.remove("green-glow");
  }, 1500);
  setTimeout(function () {
    document.getElementById(computer).classList.remove("red-glow");
  }, 1500);
  setTimeout(function () {
    document.getElementById("head").classList.remove("headerloose");
  }, 1500);
}

function convertName(name) {
  switch (name) {
    case "r":
      return "rock";
      break;
    case "p":
      return "paper";
      break;
    case "s":
      return "scissor";
      break;
  }
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
    default:
      loose(userChoice, computerChoice);
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissor_div.addEventListener("click", function () {
    game("s");
  });
}

main();
