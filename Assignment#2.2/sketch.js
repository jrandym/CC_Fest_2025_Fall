// Variables for the canvas
let canvasWidth;
let canvasHeight;
let bgColor;

// Variables for circle
// Position of the circle
let x;
let y;
// Radius of the circle
let r;
// Velocity of the circle
let vx;
let vy;
// Color of the circle
let circleColor;

// Setup function to create the canvas
function setup() {
  // Create canvas of size 400x400
  canvasWidth = 400;
  canvasHeight = 400;
  createCanvas(canvasWidth, canvasHeight);
  // Set background color
  bgColor = color(222);
  background(bgColor);
  // Initialize position of the circle at the center of the canvas
  x = canvasWidth / 2;
  y = canvasHeight / 2;
  // Initialize radius of the circle
  r = 25;
  // Initialize velocity of the circle
  vx = random(-5, 5);
  vy = random(-5, 5);
  // Set initial color of the circle
  circleColor = color(random(255), random(255), random(255));
}
// Draw function to animate the circle
function draw() {
  background(bgColor);
  // Set fill color for the circle
  fill(circleColor);
  // Update position of the circle based on velocity
  x += vx;
  y += vy;
  // Check for collision with canvas edges and reverse velocity if needed
  if (x < r || x > width - r) {
    vx *= -1;
  }
  if (y < r || y > height - r) {
    vy *= -1;
  }
  // Draw the circle at the updated position
  circle(x, y, r * 2);
}
// Create a clicker function to change the size and color of the circle if the mouse is clicked inside the circle
// Also change the color of the background
function mousePressed() {
  let d = dist(mouseX, mouseY, x, y);
  if (d < r) {
    // r = random(10, 50);
    r += 5;
    // Change the color of the circle
    circleColor = color(random(255), random(255), random(255));
    // Reset radius if it exceeds 50
    if (r > 50) {
      r = 25;
    }
    // Change the background color
    bgColor = color(random(255), random(255), random(255));
  }
}

