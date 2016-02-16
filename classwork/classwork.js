/*
  Classwork
*/
var ballX = 0;
var ballY = 0;
var speed1 = 5;
var speed2 = 5;





function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background("white");

  
	if (mouseIsPressed) {
		background(255);
		fill(0, 255, 0);
  }

  ellipse(ballX, height/2, 50,50);
  ellipse(width/2, ballY, 50,50);

  if (ballX >= width){
    speed1 = -5;

  }
    if (ballX <= 0){
    speed1 = 5;

  }

  if (ballY >= height){

    speed2 = -5;
  }

  if (ballY <= 0){
    speed2 = 5;
  }




  ballX = ballX + speed1;
  ballY = ballY + speed2;
  }
