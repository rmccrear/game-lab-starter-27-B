function doSpriteInteraction() {
    // Example Code follows.
    // Please delete and replace with your own code.
    if(player.isTouching(star1)){
        score += 1;
        star1.x = 0 - randomNumber(0, 10);
        star1.y = randomNumber(10, 390);
    }
    if(player.isTouching(star2)){
        score += 1;
        star2.x = 0 - randomNumber(0, 10);
        star2.y = randomNumber(10, 390);
    }
}