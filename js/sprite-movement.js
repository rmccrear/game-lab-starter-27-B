
function doSpriteMovement() {
  // Example Code follows.
  // Please delete and replace with your own code.

  //Eddie added
  if (platform1.y > 415) {
    platform1.x = randomNumber(100, 300);
    platform1.y = -25;
  }

  // Eddie added
  if (platform2.y > 415) {
    platform2.x = randomNumber(100, 300);
    platform2.y = -25;
  }

  if (star1.y > 415) {
    star1.x = randomNumber(100, 300);
    star1.y = -25;
  }

  if (star2.y > 415) {
    star2.x = randomNumber(100, 300);
    star2.y = -25;
  }

  if (player.x > 410) {
    player.x = -10;
  }
  if (player.x < -10) {
    player.x = 410;
  }

  if (player.velocityY > 1) {
    player.changeAnimation('spin');

  } else {
    if (player.velocityX < 0) {
      player.changeAnimation('flyL');
    } else {
      player.changeAnimation('fly');
    }
  }



}