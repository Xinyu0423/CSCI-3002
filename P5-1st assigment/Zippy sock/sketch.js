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
  //set the color
  fill(thirdColor);
  rect(130,20,150,350,50,50);
  //draw the big rectangle and fill the gray
  fill(firstColor);
  ellipse(203,70,30,30);
  //draw the small circle(the top one)
  //fill with black
  push();
  	fill(thirdColor);
  	rect(195,30,15,15,5);
  	//draw the small rectangle
  	//fill out with gray
    fill(firstColor);
  	ellipse(205,140,100,100);
  	//draw the big circle (middle one)
  	//fill out with black
  	fill(thirdColor);
  	ellipse(205,140,65,65);
  	//draw the big circle (the one inside the black one)
  	//fill out with gray
  pop();
  
  push();
  fill(firstColor);
  	ellipse(170,215,25,25);
  	translate(35,0);
  	ellipse(170,215,25,25);
  	translate(35,0);
  	ellipse(170,215,25,25);
  	translate(0,40);
  	ellipse(170,215,25,25);
  	translate(-35,0);
  	ellipse(170,215,25,25);
    translate(-35,0);
  	ellipse(170,215,25,25);
  	//draw the 6 small circle
  	//use translate to move it
		//fill with black
  pop();
  
  
}