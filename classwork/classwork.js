/*
  Classwork
*/
var circleX = 0;
var speed = 3;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background("white");
  ellipse(circleX, height/2, 50,50);

  if (circleX >= width){
    speed = -3;
  }

  circleX = circleX + speed;

}
