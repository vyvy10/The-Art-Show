let whale;
let wImg;
let pImg;
let bag = [];
let score = 0;
let scene;
let currentButton;





function preload() {
  wImg = loadImage("whale.jpg");
  pImg = loadImage("plasticbag.png");
}

function setup() {
  createCanvas(400, 400);
  whale = new Whale();
  bckgrnd = loadImage("ocean.jpeg");
  bckgrnd2 = loadImage("ocean2.jpeg");
  scene = 1;


}

var theButton = function() {
  currentButton = 1;
  noStroke();
  fill(90, 224, 173);
  rect(130, 220, 165, 70, 20);
  textStyle(BOLD);
  textFont('Georgia');
  fill(0, 0, 0);
  textSize(15);
  text("Click here to start!", 140, 260);
}

var theButton2 = function() {
  currentbutton = 2;
  fill(115, 206, 245);
  rect(62, 150, 120, 60, 20);
  fill(0, 0, 0);
  textStyle(BOLD);
  textFont('Georgia');
  textSize(15);
  text("How to play?", 70, 185);
}
var theButton3 = function() {
  fill(164, 165, 237);
  rect(240, 150, 100, 60, 20);
  textFont('Georgia');
  textStyle(BOLD);
  fill(0, 0, 0);
  textSize(20);
  text("About", 260, 185);
}

function keyPressed() {
  if (key == ' ') {
    whale.jump();
  }
}



function draw() {
  if (scene == 1) {

    background(bckgrnd2);

  }
  theButton();
  theButton2();
  theButton3();
  if (mouseIsPressed) {
    scene = 2
  }
  if (scene == 2) {
    if (random(1) < 0.01) {
      bag.push(new Bag());
    }

    background(bckgrnd);
    fill(0, 0, 0);
    stroke(225);
    textSize(23);
    textFont('serif');
    text("Total Score:" + score, 30, 60)
    for (let b of bag) {
      b.move();
      b.show();


    }

    whale.show();
    whale.move();





  }

}
