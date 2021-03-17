class Bag {
  constructor() {
    this.r = 100;
    this.x = width;
    this.y = height - this.r;
  }
  move(){
    this.x -= 4;
  }
  show() {
  image(pImg, this.x, this.y-80, this.r, this.r);
  }
}
