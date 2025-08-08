
function respondToUser() {
    // set the gravity for the player
    player.velocityY += gravity;

    // wait for user to press space to start the game
    if(keyWentDown("SPACE")){
        gameState = "play";
    }

    // set the player velocity based on key presses
    if (keyDown("LEFT")) {
        if (keyDown("CTRL")) {
            player.velocityX = -6;
        } else {
            player.velocityX = -3;
        }
    }
    if (keyDown("RIGHT")) {
        if (keyDown("CTRL")) {
            player.velocityX = 6;
        } else {
            player.velocityX = 3;

        }
    }
    if (keyDown("UP")) {
        if (keyDown("CTRL")) {
            player.velocityY = -6;
        } else {
            player.velocityY = -3;
        }
    }
    if (keyDown("DOWN")) {
        if (keyDown("CTRL")) {
            player.velocityY = 6;
        } else {
            player.velocityY = 3;
        }
    }
        // stop the player if space is pressed
    if (keyDown("SPACE")) {
        player.velocityX = 0;
        player.velocityY = 0;
    }
}
