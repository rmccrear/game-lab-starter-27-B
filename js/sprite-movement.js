
function doSpriteMovement() {
  // set movement for platforms 1 & 2
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

  // set movements for stars 1 & 2
  if (star1.y > 415) {
    star1.x = randomNumber(100, 300);
    star1.y = -25;
  }
  if (star2.y > 415) {
    star2.x = randomNumber(100, 300);
    star2.y = -25;
  }

  // reset location of player if it goes off screen
    // off right side
  if (player.x > 410) {
    player.x = -10;
  }
    // off left side
  if (player.x < -10) {
    player.x = 410;
  }
    // off bottom
  if(player.y > 400){
    lives -= 1;
    player.x = randomNumber(0, 400);
    player.y = 0;
    player.velocityY = 0;
  }

  // change player animation based on velocity
  if (player.velocityY > 1) {
    player.changeAnimation('spin');

  } else {
    if (player.velocityX < 0) {
      player.changeAnimation('flyL');
    } else {
      player.changeAnimation('fly');
    }
  }

  // freeze and hide sprites if lives are 0
  if(lives<=0){
    player.changeAnimation('jump');
    player.visible = false;
    star1.visible = false;
    star2.visible = false;
    platform1.visible = false;
    platform2.visible = false;
    player.velocityY = 0;
    player.velocityX = 0;
    star1.visible = false;
    star2.visible = false;
    platform1.visible = false;
    platform2.visible = false;
  } 
}