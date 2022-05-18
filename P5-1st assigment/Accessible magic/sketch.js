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
  var forthColor = color(35, 300,500);
  //set the color
  fill(forthColor);
  rect(130,20,150,350,50,50);
  //draw the big rectangle and fill the gray
  fill(firstColor);
  ellipse(203,200,20,20);
  //draw the small circle(the top one)
  //fill with black
  textSize(50);
	fill(firstColor);
  text('5:11',165,80)
  textSize(13);
	fill(firstColor);
  text('Monday, 22 January',145,95);
  textSize(13);
	fill(firstColor);
  text('Weather:',145,120);
  textSize(20);
	fill('blue');
  text('❄️',205,125);
  textSize(13);
	fill(firstColor);
  text('Temperature: 26.6 F',145,145);
  textSize(20);
	fill(firstColor);
  text('remote',170,175);
  //write some text and fill with color
  push();
  	fill(thirdColor);
  	rect(197,25,10,10,5);
  	//draw the small rectangle
  	//fill out with gray
    fill(firstColor);
  	ellipse(205,250,70,70);
  	//draw the big circle (middle one)
  	//fill out with black
  	fill(thirdColor);
  	ellipse(205,250,50,50);
  	//draw the big circle (the one inside the black one)
  	//fill out with gray
  pop();
  
  push();
  fill(firstColor);
  	ellipse(170,315,20,20);
  	translate(35,0);
  	ellipse(170,315,20,20);
  	translate(35,0);
  	ellipse(170,315,20,20);
  	translate(0,25);
  	ellipse(170,315,20,20);
  	translate(-35,0);
  	ellipse(170,315,20,20);
    translate(-35,0);
  	ellipse(170,315,20,20);
  	//draw the 6 small circle
  	//use translate to move it
		//fill with black
  pop();
  
  
  
}