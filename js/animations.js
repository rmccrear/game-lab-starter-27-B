
function setupAnimations() {
  // Example Code follows.
  // Please delete and replace with your own code.
  mikeStand = loadSpriteSheet("sprites/mike.png", 17, 49, 3);
  mikeSpin = loadSpriteSheet("sprites/mikeSpin.png",19, 55, 5)
  mikeJump = loadAnimation("sprites/mikeJump.png")
  mikeJumpL = loadAnimation("sprites/mikeJumpL.png")

  starAnimation = loadAnimation("sprites/star-1.png", "sprites/star-2.png", "sprites/star-3.png", "sprites/star-4.png");

  // Eddie added
  platformAnimation = loadAnimation("sprites/platform.png");
}