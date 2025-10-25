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

// code to preload a background image
// let img; // Declare a variable to hold the image

// function preload() {
//   // Load the image file before the sketch starts
//   // Make sure the path to your image is correct.
//   img = loadImage('Optical-dispersion.png'); 
//   // If it's in an 'assets' folder: img = loadImage('assets/myBackground.jpg');
// }

function setup() {
  // runs once
  // runs top to bottom
  createCanvas(1200, 800);
  // all code in here

}

function draw() {
  // Set the loaded image as the background
  // Use RGB color with alpha values in the range 0-1.
  // colorMode(RGB, 255, 255, 255, 1);
  background(0)

  // Set up diffuse stroke
  drawingContext.shadowBlur = 20; // adjust for softness
  drawingContext.shadowColor = color(255, 255, 255, 100); // soft blue glow  
  stroke(255,255,255);
  strokeWeight(5);
  // Create the iconic prism as an equilateral triangle
  beginShape();
  // Set the fill color to slightly less black
  
  fill(16)
  // Add vertices.
  vertex(600,200);
  vertex(400,600);
  vertex(800,600);
  
  endShape(CLOSE);
  
  // Reset shadow for other drawings
  drawingContext.shadowBlur = 0;
  
  // add ray of light from left side 
  // which strikes the triangle's left side
  // at an angle slightly less than perpendicular to the triangle
  strokeWeight(5)  
  line(0,450, 500, 400);
}
function mousePressed(){
  console.log(mouseX, mouseY);
}