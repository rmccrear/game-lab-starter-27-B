
function respondToUser() {
    if (keyWentDown("LEFT")) {
        player.velocityX = -2;
        /*playSound("../sprites/boop.mp3");*/
    }
    if (keyWentDown("RIGHT")) {
        player.velocityX = 2;
    }
    if (keyWentDown("UP")) {
        player.velocityY = -2;
    }
    if (keyWentDown("DOWN")) {
        player.velocityY = 2;
    }
    if (keyWentDown("SPACE")) {
        player.velocityX = 0;
        player.velocityY = 0;
    }

}
