
function respondToUser() {
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
    if (keyDown("SPACE")) {
        player.velocityX = 0;
        player.velocityY = 0;
    }

}
