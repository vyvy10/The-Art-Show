class Coin{
  constructor(){
    this.r = 100;
    this.x = width;
    this.y = height - this.r;
  }
  move(){
    this.x -= 4;
  }
  show(){
    image(cImg, this.x, this.y - 80, this.r - 50, this.r - 50);
  }
}
