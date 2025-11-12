// Create variables rColor, gColor, bColor for color components

let rColor;
let gColor;
let bColor;
// Create and initialize variables for color complements
let compRed;
let compGreen;
let compBlue;
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
// Initialize variables rColor, gColor, bColor for color components
// Note this need to be done here because random() needs to be called after setup starts
rColor = random(255);
gColor = random(255);
bColor = random(255);
// Create and initialize variables for color complements
compRed = 255 - rColor;
compGreen = 255 - gColor;
compBlue = 255 - bColor;

  // Create canvas of size 400x400
  canvasWidth = 400;
  canvasHeight = 400;
  createCanvas(canvasWidth, canvasHeight);
  // Set background color using the complement colors
  bgColor = color(compRed, compGreen, compBlue);
  background(bgColor);
  // Initialize position of the circle at the center of the canvas
  x = canvasWidth / 2;
  y = canvasHeight / 2;
  // Initialize radius of the circle
  r = 25;
  // Initialize velocity of the circle
  vx = random(-5, 5);
  vy = random(-5, 5);
  // Set initial color of the circle using random colors components
  circleColor = color(rColor, gColor, bColor);
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
    // Change the color of the circle by generating new random colors components
    rColor = random(255);
    gColor = random(255);
    bColor = random(255);
    circleColor = color(rColor, gColor, bColor);
    // Reset radius if it exceeds 50
    if (r > 50) {
      r = 25;
    }
    // Change the background color using new random colors components
    compRed = 255 - rColor;
    compGreen = 255 - gColor;
    compBlue = 255 - bColor;
    bgColor = color(compRed, compGreen, compBlue);
  }
}

