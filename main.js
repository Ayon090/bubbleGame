let timer = 30;
let scores = 0;
let hit = 0;
let bble = document.getElementById("games");
let afterGame = document.getElementById("afterGame");
let loads = document.querySelector(".play");

let target;

// Function to initialize game state
function initializeGame() {
  newHit();
  timerVal();
  newBubbles();
  generateTarget();
}

// Function to generate random target
function generateTarget() {
  target = Math.floor(Math.random() * 100);
  document.getElementById("target").innerHTML = target;
}

// Function to update score
function increaseScores() {
  scores += 5;
  document.getElementById("score").innerHTML = scores;
  
  // Check if scores exceed target and update game outcome
  if (scores > target) {
    document.getElementById("review").innerHTML = "You Won";
    document.getElementById("review").style.color = "green";
  } else {
    document.getElementById("review").innerHTML = "You lose";
    document.getElementById("review").style.color = "red";
  }
}

// Event listener for bubbles
bble.addEventListener("click", function (event) {
  let clickedNum = event.target.textContent;
  if (clickedNum == hit) {
    increaseScores();
    newHit();
    newBubbles();
  }
});

// Function to generate new hit number
function newHit() {
  hit = Math.floor(Math.random() * 10);
  document.getElementById("newHits").innerHTML = hit;
}

// Timer function
function timerVal() {
  let timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.getElementById("timerVal").innerHTML = timer;
    } else {
      clearInterval(timerint);
      bble.style.display = "none";
      afterGame.style.display = "block";
      document.getElementById("points").innerHTML = "You Scored : " + scores;

      loads.addEventListener("click", function () {
        location.reload();
      });
    }
  }, 1000);
}

// Function to generate new bubbles
function newBubbles() {
  let clutter = "";
  for (let i = 0; i < 153; i++) {
    clutter += `<div class="bubbles" id='bble'>${Math.floor(
      Math.random() * 10
    )}</div>`;
  }
  document.getElementById("games").innerHTML = clutter;
}

// Initialize the game
initializeGame();
