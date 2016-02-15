/*
  Classwork
*/
var ballX = 0;
var speed = 3;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background("white");
  ellipse(ballX, height/2, 50,50);

  if (ballX >= width){
    speed = -3;
  }

  ballX = ballX + speed;

}
