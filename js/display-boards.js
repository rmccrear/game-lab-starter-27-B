
function showBoards() {
  if(gameState === "play"){
    showScore();
    showLives();
  }
}

function showScore() {
  // control the score display color based on lives count
  if(lives > 0){
    fill(255, 255, 255);
  } else {
    fill(0, 0, 0);
  }
    textSize(16);
    text("Score: " + score, 10, 20);
}

function showLives() {
  // control the lives display color based on lives count
  if(lives > 1){
    fill(255, 255, 255);
  } else if (lives === 1) {
    fill(255, 0, 0);
  } else {
    fill(0, 0, 0);
  }
  textSize(16);
  text("Lives: " + lives, 250, 20);
}

function splashScreen() {
  // display splash screen with game title
  background("black");
  fill("white");
  textSize(32);
  textAlign(CENTER);
  text("Who wants to dance!", width / 2, height / 2 - 40);
  text("Press Space to Start", width / 2, height / 2 + 40);
}

function gameOverDisplay() {
  // display game over message and score
  background("black");
  noStroke();
  fill("red");
  textSize(32);
  textAlign(CENTER);
  text("Game Over", width / 2, height / 2 - 40);
  text("Score: " + score, width / 2, height / 2 + 40);
} 