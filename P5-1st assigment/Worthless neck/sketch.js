function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
	var firstColor=color(0,0,0);
	var secondColor=color('yellow');
	var thirdColor=color(255,255,255);
	var forthColor=color('pink');
	var fifthColor=color('gray');
	//set all the color
	ellipse(200,170,150,150);
	//draw the face
	fill(forthColor);
	//fill the face with pink
	push();
		fill(secondColor);
		ellipse(165, 155, 20, 20);
		fill(secondColor);
		translate(65,0);
		//draw the eyes and fill with yellow color
		//translate 65 to the right
		ellipse(165,155,20,20);
		fill(fifthColor);
		ellipse(135,200,50,20);
	
  pop();
}