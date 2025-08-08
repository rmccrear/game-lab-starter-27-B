function doSpriteInteraction() {
    // Check for collisions with player and stars 1 & 2
    if (player.isTouching(star1)) {
        score += 1;
        star1.x = randomNumber(0, 10);
        star1.y = randomNumber(10, 390);
    }
    if (player.isTouching(star2)) {
        score += 1;
        star2.x = randomNumber(0, 10);
        star2.y = randomNumber(10, 390);
    }

    // check for collisions with platforms
    if (player.isTouching(platform1)) {
        player.collide(platform1);
    }
    if (player.isTouching(platform2)) {
        player.collide(platform2);
    }
}