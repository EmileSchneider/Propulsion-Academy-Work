class Ball {
  constructor() {
    this.radius = 3;
    this.canvas = document.getElementById("myCanvas");
    this.context = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.position = [this.width / 2, this.height / 2];
    this.velocity = [10,10];
  }
  render(context){
    context.beginPath();
    context.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = "#990000";
    context.fill();
  }
  onTopOrBottom(){
    return this.position[1] === this.radius || this.position[1] === this.heigth - this.radius;
  }
  onSideWalls(){
    return this.position[0] === this.radius || this.position[0] === this.width - this.radius;
  }
}
