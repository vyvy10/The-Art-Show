let whale;
let wImg;
let pImg;
let cImg;
let bag = [];
let coin = [];
let scene;
//let score = 0;
// function to load Images/sounds, etc,...
function preload() {
  wImg = loadImage("whale.png");
  pImg = loadImage("plasticbag.png");
  cImg = loadImage("coin.jpeg");
  //mySound = loadSound("_natureocean.mp3")

}

function setup() {
  createCanvas(400, 400);
  whale = new Whale();
  bckgrnd = loadImage("ocean(1).jpg");
  bckgrnd2 = loadImage("ocean2.jpeg");
  scene = 1;
  //mySound.play();
  //mySound.setVolume(0.6);



}
//The button that allow the player to switch on to the main game scene
var theButton = function() {

  noStroke();
  fill(100, 224, 173);
  rect(120, 220, 165, 70, 20);
  textStyle(BOLD);
  textFont('serif');
  fill(0, 0, 0);
  textSize(17);
  text("Click here to start!", 135, 260);
}

//var theButton2 = function() {

// fill(115, 206, 245);
// rect(62, 150, 120, 60, 20);
// fill(0, 0, 0);
//  textStyle(BOLD);
//  textFont('Georgia');
//textSize(15);
// text("How to play?", 70, 185);
//}
//var theButton3 = function() {
// fill(164, 165, 237);
// rect(240, 150, 100, 60, 20);
// textFont('Georgia');
// textStyle(BOLD);
//  fill(0, 0, 0);
//  textSize(20);
// text("About", 260, 185);
//}

//If the player pressed the spacebar the whale will jumps up
function keyPressed() {
  if (key == ' ') {
    whale.jump();
  }
}




function draw() {
  //Scene #1 (The opening scene)
  if (scene == 1) {
    background(bckgrnd2);
    fill(9, 12, 102);
    textFont("Georgia");
    textStyle(BOLD);
    textSize(18);
    text("WELCOME TO THE MARINE MISSION!", 10, 60);
    text("Let's try to protect our whale!", 70, 100);
    //mySound.play();
    //mySound.setVolume(0.02);
  }

  theButton();
  // theButton2();
  // theButton3();
  if (mouseIsPressed) {
    scene = 2;
  }
  //Scene 2 (Main game scene)
  if (scene == 2) {

    //Random chance of adding a new plastic bag each time
    if (random(1) < 0.01) {
      bag.push(new Bag());
    }
    // A random chance of adding coins into the game each time
    if (random(1) < 0.006) {
      coin.push(new Coin());
    }
    background(bckgrnd);
    //fill(0, 0, 0);
    // stroke(225);
    //textSize(23);
    // textFont('serif');
    //text("Total Score:" + score, 30, 60)


    for (let b of bag) {
      b.move();
      b.show();

    }

    for (let c of coin) {
      c.show();
      c.move();
      whale.hits(c);


    }

    whale.show();
    whale.move();







  }


}
