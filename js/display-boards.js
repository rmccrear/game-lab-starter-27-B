
function showBoards() {
  showScore();
  showLives();
}

function showScore() {
    fill(255, 255, 255);
    textSize(16);
    text("Score: " + score, 10, 20);
}

function showLives() {
  if(lives > 1){
    fill(255, 255, 255);
  } else {
    fill(255, 0, 0);
  }
  textSize(16);
  text("Lives: " + lives, 250, 20);
}