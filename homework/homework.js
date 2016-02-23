/*
  Homework
*/

//declare your variables

function setup(){
  createCanvas(windowWidth,windowHeight);

  //set things up
}

function draw(){

  background ("white");



  if(mouseX < 412){
    fill ("yellow");
  } else if (mouseX < 1000){
    fill ("orange");
  } else if(mouseX < 1300){
    fill ("red");
  } else{
    fill ("yellow");
  }



  if(mouseX < windowWidth/3){
    background("#FBEC4A");
  } if (mouseX > windowWidth/3){
    background ("#F0A421")

  }

  if (mouseIsPressed) {
background ("black");
  }

ellipse(200,200,200,200)
}
