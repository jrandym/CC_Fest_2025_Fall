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
// Number of columns and rows for grid
let cols;
let rows;

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
  // // Set background color using the complement colors
  // bgColor = color(compRed, compGreen, compBlue);
  // Set light gray background color
  bgColor = color(200); 
  background(bgColor);
  // Initialize position of the circle at the center of the canvas
  x = canvasWidth / 2;
  y = canvasHeight / 2;
  // Initialize radius of the circle
  r = 20;
  // Draw a 10x10 grid of circles that fill the canvas
  cols = 10;
  rows = 10;
  r = canvasWidth / (2 * cols); // Adjust radius to fit 10 circles across
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // Set random color for each circle
      rColor = random(255);
      gColor = random(255);
      bColor = random(255);
      circleColor = color(rColor, gColor, bColor);
      fill(circleColor);
      ellipse(r + i * 2*r, r + j * 2*r, r * 2);
    }
  }
}