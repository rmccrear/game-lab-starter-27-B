
function respondToUser() {
    if (keyWentDown("LEFT")) {
        player.velocityX = -3;
    }
    if (keyWentDown("RIGHT")) {
        player.velocityX = 3;
    }
    if (keyWentDown("UP")) {
        player.velocityY = -3;
    }
    if (keyWentDown("DOWN")) {
        player.velocityY = 3;
    }
    if (keyWentDown("SPACE")) {
        player.velocityX = 0;
        player.velocityY = 0;
    }

}
