//Author: Xinyu Jiang
//Date: 01/21/2017
//Coding 1 - P5 Drawing
function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  var firstColor=color('black');
  var secondColor=color('white');
  var thirdColor=color('gray');
  var forthColor=color('blue');
  var fifthColor = color(35, 200,500);
  //set the color
  fill(thirdColor);
  rect(75,75,250,250,100,100);
  //draw the big rectangle
  //fill out with gray
  textSize(40);
  fill('secondColor');
  text('75',150,220);
  textSize(40);
  fill(fifthColor);
  text('*',170,170);
  textSize(10);
  fill(secondColor);
  text('raining 35%',150,180);
  textSize(20);
  fill(secondColor);
  text('ecobee',150,300);
  //write texts on it 
  push();
  	fill(firstColor);
  	ellipse(250,205,35,35);
  	textSize(15);
  	fill(forthColor);
  	text('75',240,210);
  //draw the middle circle (the black one)
  //and fill out with black
  //write '75' inside the circle
  pop();
  
  push();
  	fill(fifthColor);
  	ellipse(250,175,15,15);
  	translate(0,-18);
  	ellipse(250,175,13,13);
    translate(0,-16);
  	ellipse(250,175,11,11);
  	translate(0,-14);
  	ellipse(250,175,9,9);
  	translate(0,-12);
  	ellipse(250,175,7,7);
  	translate(0,-10);
  	ellipse(250,175,5,5);
  	//draw the top small circle
  	//fill it with light blue
  pop();
  
  push();
  	fill(secondColor);
  	ellipse(250,235,15,15);
  	translate(0,18);
  	ellipse(250,235,13,13);
    translate(0,16);
  	ellipse(250,235,11,11);
  	translate(0,14);
  	ellipse(250,235,9,9);
  	translate(0,12);
  	ellipse(250,235,7,7);
  	translate(0,10);
  	ellipse(250,235,5,5);
  	//draw the bottom small circle
  	//fill it with white
  pop();
}