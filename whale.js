class Whale {
  constructor() {
    this.r = 50;
    this.x = this.r;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 0.6;
    this.score = 0;
  }

  jump() {

    this.vy = -15;

  }

  hits(obs) {

    if ((obs.x >= this.x && obs.x <= (this.x + this.r)) && (obs.y >= this.y && obs.y <= (this.y + this.r))) {
     obs.y = -400;
      this.score++;




    }
  }
  
  


  move() { 
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }
  show() {
    image(wImg, this.x, this.y - 15, this.r + 35, this.r + 20);
    fill(0, 0, 0);
    stroke(225);
    textSize(23);
    textFont('serif');
    text("Total Score:" + this.score,240, 60)
  } 
}
