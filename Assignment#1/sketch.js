// my first project

// foundation track
// make a 2d design
// three shapes types
// three colors
// based on existing image

// advanced track
// 2d design 800x800
// more shapes types, curves, vertex
// more color, RGB, HSB
// original design 

function setup() {
  // runs once
  // runs top to bottom
  createCanvas(800, 800);
  // all code in here
  
  // grayscale 0 - 255
  // color works via RGB 0 - 255, fill(), stroke()
  // color HSB fill() stroke()
  
  colorMode(HSB);
  
  fill(255, 200, 150);
  
  circle(400, 400, 100);
  // circle(x, y, size)
  rectMode(CENTER);
  
  fill(0, 0, 255);
  rect(400, 400, 50);
  stroke(300, 255, 100);
  strokeWeight(10);
  line(100, 300, 250, 60);
  
  
  triangle(200, 400, 50, 225, 0, 0);
  
 // Start drawing the shape.
  beginShape();

  // Add vertices.
  vertex(147, 41);
  vertex(14, 145);
  vertex(35, 346);
  vertex(208, 284);

  // Stop drawing the shape.
  endShape(CLOSE);
  
}


function mousePressed(){
  console.log(mouseX, mouseY);
}
