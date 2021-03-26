class Coin{
  constructor(){
    this.r = 100;
    this.x = width;
    this.y = height - this.r;
  }
  move(){
    this.x -= 5;
  }
  show(){
    image(cImg, this.x, this.y - 90, this.r - 50, this.r - 50);
  }
}
