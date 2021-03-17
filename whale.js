class Whale {
  constructor() {
    this.r = 50;
    this.x = this.r;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 0.6;
    
  }
  
  jump() {

    this.vy = -15;

  }
  hits(){
    
  }
  
  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }
  show() {
    image(wImg, this.x, this.y - 10, this.r + 20, this.r + 20);
  }
}
