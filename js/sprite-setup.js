
function setupSprites() {
  // setup the player sprite
  player = createSprite(200, 200, 50, 50);
  player.addAnimation('fly', mikeJump);
  player.addAnimation('spin', mikeSpin);
  player.addAnimation('walk', mikeStand)
  player.addAnimation('flyL', mikeJumpL)
  player.scale = 1.5;

  // setup the star sprites
  // star 1
  star1 = createSprite(100, 100, 50, 50);
  star1.shapeColor = "aqua";
  star1.addAnimation('twinkle', starAnimation);
  star1.velocityY = 2;
  star1.height = 30;
  star1.width = 30;
  // star 2
  star2 = createSprite(100, 100, 50, 50);
  star2.shapeColor = "aqua";
  star2.addAnimation('twinkle', starAnimation);
  star2.velocityY = 2;
  star2.height = 30;
  star2.width = 30;

  // setup the platform sprites
  //Eddie Added
  // platform 1
  platform1 = createSprite(randomNumber(100, 300), 325, 50, 50);
  platform1.addAnimation("platform", platformAnimation);
  platform1.velocityY = 1;
  //Eddie Added
  // platform 2
  platform2 = createSprite(randomNumber(100, 300), 125, 50, 50);
  platform2.addAnimation("platform", platformAnimation);
  platform2.velocityY = 1;


}