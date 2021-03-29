class Whale {
  constructor() {
    //the sizes of the whale
    this.r = 50;
    //x location
    this.x = this.r; //y location
    this.y = height - this.r;
    //The whale needs the velocity along the y-axis to be able to jump up
    this.vy = 0;
    //The gravity adjust the speed of the whale(acceleration)
    this.gravity = 0.6;
    this.score = 0;
  }
  //Instant force, push it up
  jump() {
    //negative = moving up
    this.vy = -15;

  }
  //If the whale hits an object, the total "score" will increase.
  hits(obs) {

    if ((obs.x >= this.x && obs.x <= (this.x + this.r)) && (obs.y >= this.y && obs.y <= (this.y + this.r))) {
      obs.y = -400;
      this.score++;




    }
  }




  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    //"Ground limit", so that the whale can't go over the "limit"
    this.y = constrain(this.y, 0, height - this.r);
  }
  show() {
    //Where the whale is located (it's staying at a spot)
    image(wImg, this.x, this.y - 15, this.r + 35, this.r + 20);
    fill(0, 0, 0);
    stroke(225);
    textSize(23);
    textFont('serif');
    text("Total Coin:" + this.score, 240, 60)
  }
}
