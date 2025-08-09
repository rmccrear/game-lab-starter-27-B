
function drawBackground() {
    // draw background according to game state
    // if gameState is "splash", show splash screen
    if (gameState === "splash") {
        gameSplashScreen();
        // if gameState is "play", show the game play
    } else if (gameState === "play") {
        gamePlay();

        // draw background based on score and lives
        if (lives > 0 && score < 10) {
            background1();
        } else if (lives > 0 && score >= 10) {
            background2();
        }

        // set gameState to "over" if lives are 0
        if (lives < 1) {
            gameState = "over";
        }
        // if gameState is "over", show game over display
    } else if (gameState === "over") {
        gameOver();
    }
}

function gameSplashScreen() {
    background("black");
    splashScreen();     // splash screen text
    // reset game variables
    player.velocityY = 0;
    player.visible = false;
    star1.visible = false;
    star2.visible = false;
    platform1.visible = false;
    platform2.visible = false;
    playSound("sprites/back-music.mp3", true);
}

function gamePlay() {
    // set sprites to visible
    player.visible = true;
    star1.visible = true;
    star2.visible = true;
    platform1.visible = true;
    platform2.visible = true;

}

function gameOver() {
    background("black");
    gameOverDisplay();      // game over text
}

function background1() {
    background("darkBlue");
    noStroke();
    fill("yellow");
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
    ellipse(340, 50, 60, 60);
    fill("darkBlue");
    ellipse(320, 30, 60, 60);
}

function background2() {
    background("purple");
    noStroke();
    fill("yellow");
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 6, 6);
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 6, 6);
    fill("orange")
    ellipse(340, 50, 60, 60);
}