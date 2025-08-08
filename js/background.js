
function drawBackground() {
    if (lives <= 0) {   
        background("black");
        noStroke();
        fill("red");
        textSize(32);
        textAlign(CENTER);
        text("Game Over", width / 2, height / 2);
        text("Score " + score, width / 2, height / 1.5);

        return;
    } else if (lives > 0 && score < 10) {
        background1();
    } else if (lives > 0 && score >= 10) {
        background2();
    }
    /*if (score < 10) {
        background1();
    }
    if (score >= 10) {
        background2();
    }*/
}

function background1() {
    background("darkBlue");
    noStroke();
    fill("yellow");
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
    ellipse(340, 50, 60, 60);
    fill("darkBlue");
    ellipse(320, 30, 60, 60);
}

function background2() {
    background("purple");
    noStroke();
    fill("yellow");
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 6, 6);
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 6, 6);
    fill("orange")
    ellipse(340, 50, 60, 60);
}
