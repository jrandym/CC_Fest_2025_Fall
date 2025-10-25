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

  // add ray of light from left side which strikes the triangle's left side at an angle slightly less than perpendicular to the triangle
  strokeWeight(5)  
  line(0,450, 500, 400);

  // add the dispersion of the light beam as a white triangle (dispersion triangle) beginning at the point of incidence on the triangle and expanding downward to the right side of the canvas. 
  // dispersion triangle: 
  //  - translucent white
  //  - top vertex at incidence point
  //  - top side at slight angle (2 degrees of incidence)
  //  - expands downward-right at an angle of about 30 degrees from horizontal
  // dispersion triangle: apex at incidence, slight 2° tilt, expands ~30° downward-right
  noStroke();
  fill(255, 255, 255, 150);

  const apex = createVector(500, 400); // point of incidence
  const axisAngle = radians(1); // approx 30° down-right
  const tilt = radians(1); // slight incidence tilt
  const dir = p5.Vector.fromAngle(axisAngle + tilt);
  const length = 5000; // how far the dispersion extend
  const baseCenter = p5.Vector.add(apex, p5.Vector.mult(dir, length));

  const baseWidth = 800; // width of the dispersed beam at the far edge
  const perp = p5.Vector.fromAngle(axisAngle + tilt + HALF_PI);
  const leftBase = p5.Vector.add(baseCenter, p5.Vector.mult(perp, baseWidth * 0.5));
  const rightBase = p5.Vector.add(baseCenter, p5.Vector.mult(perp, -baseWidth * 0.5));

  beginShape();
  vertex(apex.x, apex.y);
  vertex(leftBase.x, leftBase.y);
  vertex(rightBase.x, rightBase.y);
  endShape(CLOSE);
}
function mousePressed(){
  console.log(mouseX, mouseY);
}