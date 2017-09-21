class Ball {
  constructor(radius, position) {
    this.radius = radius;
    this.position = position;
  }
  render(context){
    context.beginPath();
    context.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = "#990000";
    context.fill();
  }
  move(a, b){
    var canvas = document.getElementById("myCanvas");
    this.position[0] = this.position[0] + a;
    this.position[1] = this.position[1] + b;
  }
}

class Game {
  constructor(ball, leftPaddle, rightPaddle) {
    this.canvas = document.getElementById("myCanvas");
    this.context = this.canvas.getContext("2d");
    this.ball = ball;
    this.leftPaddle = leftPaddle;
    this.rightPaddle = rightPaddle;
  }
  checkPositionX(){
    if(this.ball.position[0] < 0){
      return 10;
    } else if(this.ball.position[0] > this.canvas.heigth) {
      return -10;
    } else {
      return 10;
    }
  }
  checkPositionY(){
      if(this.ball.position[1] < 0) {
        return 10;
      } else if(this.ball.position[1] > this.canvas.width) {
        return -10;
      } else {
        return 10;
      }
  }
  play(){
    setInterval(function(this) {
      this.context.fillStyle = "#000000";
      this,context.fillRect(0,0, 1000, 800);
      this.ball.move(this.checkPositionX, this.checkPositionY);
      this.ball.render(context);
      this.leftPaddle.render()
    },200);
  }
}

class Paddle {
  constructor() {
  }
  render(){
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(20,380,20,100);
  }
}
var ball = new Ball(10, [400,400]);
var paddle = new Paddle();
var paddle2 = new Paddle();
var spiel = new Game(ball, paddle,paddle2 );
spiel.play();
