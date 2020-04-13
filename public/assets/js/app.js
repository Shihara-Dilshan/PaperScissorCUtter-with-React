let userScore = 0;
let computerScore = 0;
let startAlert = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const winsound = document.getElementById("winSound");
const Lostsound = document.getElementById("lostSound");
const Tiedsound = document.getElementById("tiedSound");
const imgContainer = document.querySelector(".choices");
const result = document.querySelector(".result");
const nevRestart = document.querySelectorAll(".restart");
const nevDeveloper = document.querySelectorAll(".adeveloper");
const imageDev = document.querySelector(".choices");
const nevGame = document.querySelectorAll(".agame");

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
  finalscore();
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
  finalscore();
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
  finalscore();
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
    if (startAlert === 0) {
      M.toast({ html: "Round Started" });
      startAlert++;
    }
  });

  paper_div.addEventListener("click", function () {
    game("p");
    if (startAlert === 0) {
      M.toast({ html: "Round Started" });
      startAlert++;
    }
  });

  scissor_div.addEventListener("click", function () {
    game("s");
    if (startAlert === 0) {
      M.toast({ html: "Round Started" });
      startAlert++;
    }
  });
  sideNev();
}

function finalscore() {
  if (userScore >= 10 && computerScore < 10) {
    let text = (document.createElement("h3").innerHTMl =
      "<h4>Congrats YOU WON</h4> <br><br>");

    imgContainer.innerHTML = text;
    //create Restart button
    let btn_try = document.createElement("btn");
    btn_try.classList.add("btn");
    btn_try.style.width = "40%";
    btn_try.innerHTML = "Restart";
    btn_try.addEventListener("click", () => location.reload());

    //create Exit button
    let btn_quite = document.createElement("btn");
    btn_quite.classList.add("btn");
    btn_quite.classList.add("red");
    btn_quite.style.width = "40%";
    btn_quite.innerHTML = "Exit";
    btn_quite.addEventListener("click", () => close());

    //create break tag
    let breakTag = document.createElement("br");

    btn_quite.style.marginTop = "10px";

    imgContainer.appendChild(btn_try);
    imgContainer.appendChild(breakTag);
    imgContainer.appendChild(btn_quite);
    result.classList.add("hide");
  } else if (userScore == 10 && computerScore == 10) {
    imgContainer.innerHTML = "<h4>ROUND TIED</h4><br><br>";
    //create Restart button
    let btn_try = document.createElement("btn");
    btn_try.classList.add("btn");
    btn_try.style.width = "40%";
    btn_try.innerHTML = "Restart";
    btn_try.addEventListener("click", () => location.reload());

    //create Exit button
    let btn_quite = document.createElement("btn");
    btn_quite.classList.add("btn");
    btn_quite.classList.add("red");
    btn_quite.style.width = "40%";
    btn_quite.innerHTML = "Exit";
    btn_quite.addEventListener("click", () => close());

    //create break tag
    let breakTag = document.createElement("br");

    btn_quite.style.marginTop = "10px";

    imgContainer.appendChild(btn_try);
    imgContainer.appendChild(breakTag);
    imgContainer.appendChild(btn_quite);
    result.classList.add("hide");
  } else if (userScore < 10 && computerScore >= 10) {
    imgContainer.innerHTML = "<h4>OOPS! YOU LOST</h4 <br><br>";

    //create Restart button
    let btn_try = document.createElement("btn");
    btn_try.classList.add("btn");
    btn_try.style.width = "40%";
    btn_try.innerHTML = "Restart";
    btn_try.addEventListener("click", () => location.reload());

    //create Exit button
    let btn_quite = document.createElement("btn");
    btn_quite.classList.add("btn");
    btn_quite.classList.add("red");
    btn_quite.style.width = "40%";
    btn_quite.innerHTML = "Exit";
    btn_quite.addEventListener("click", () => close());

    //create break tag
    let breakTag = document.createElement("br");

    btn_quite.style.marginTop = "10px";

    imgContainer.appendChild(btn_try);
    imgContainer.appendChild(breakTag);
    imgContainer.appendChild(btn_quite);
    result.classList.add("hide");
  } else {
  }
}

function sideNev() {
  nevRestart.forEach(function (event) {
    event.addEventListener("click", function () {
      computerScore = 0;
      userScore = 0;
      computerScore_span.innerHTML = computerScore;
      userScore_span.innerHTML = userScore;
      result_p.innerHTML = "click on a following start the round";
    });
  });

  nevDeveloper.forEach(function (event) {
    event.addEventListener("click", function () {
      let img = document.createElement("img");
      img.setAttribute("alt", "");
      img.src = "81445069.jpg";
      scoreBoard_div.innerHTML = `<img id="img1" 
      src="https://raw.githubusercontent.com/Shihara-Dilshan/PaperScissorCUtter-with-React-and-MaterializeCSS/master/public/assets/images/81445069.jpg" ><br>
      <h6>ShiharaD</h6>
     
       `;
      result.innerHTML = `<h6 id="git">GitHub<br> 
      <a href="https://github.com/Shihara-Dilshan">https://github.com/Shihara-Dilshan</a><br>
      </h6><h6>Linkedin <br> <a href="https://www.linkedin.com/in/shihara-dilshan-5297711a4/">
      https://www.linkedin.com/in/shihara-dilshan-5297711a4/</a><br></h6><br>
      <button class="btn" id="profile_btn"> Go Back </button>`;
      imageDev.innerHTML = ``;
      scoreBoard_div.style.border = "0px";

      profile_btn.addEventListener("click", function () {
        location.reload();
      });
    });
  });

  nevGame.forEach(function (event) {
    event.addEventListener("click", function () {
      let img = document.createElement("img");
      img.setAttribute("alt", "");
      img.src = "81445069.jpg";
      scoreBoard_div.innerHTML = `<img id="img1" 
      src="https://raw.githubusercontent.com/Shihara-Dilshan/PaperScissorCUtter-with-React-and-MaterializeCSS/master/public/assets/images/PSC.jpg" ><br>
      <h6>ShiharaD</h6>
     
       `;
      result.innerHTML = `<h6 id="git">GitHub<br> 
      <a href="https://github.com/Shihara-Dilshan">https://github.com/Shihara-Dilshan</a><br>
      </h6><h6>Linkedin <br> <a href="https://www.linkedin.com/in/shihara-dilshan-5297711a4/">
      https://www.linkedin.com/in/shihara-dilshan-5297711a4/</a><br></h6><br>
      <button class="btn" id="profile_btn"> Go Back </button>`;
      imageDev.innerHTML = ``;
      scoreBoard_div.style.border = "0px";

      profile_btn.addEventListener("click", function () {
        location.reload();
      });
    });
  });
}

main();
