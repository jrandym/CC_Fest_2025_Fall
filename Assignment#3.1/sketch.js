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

// Create a seed variable for random number generation for consistent results
let seed;

// Setup function to create the canvas
function setup() {
  // // Create and initialize variables for color complements
  // compRed = 255 - rColor;
  // compGreen = 255 - gColor;
  // compBlue = 255 - bColor;

  // Set the seed for consistent noise/random values
  seed = 10
  // randomSeed(seed);

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
      // // Set random color for each circle
      // rColor = random(255);
      // gColor = random(255);
      // bColor = random(255);

      // This code block generates smooth color variations for each circle in the grid using Perlin noise
      // noise() returns a value between 0-1 based on input coordinates, multiplied by 255 to get RGB values
      // i and j coordinates are scaled by 0.5 to create smoother transitions between colors
      // Adding offsets (100, 200) to coordinates creates different noise patterns for G and B channels
      // seed parameter ensures consistent noise values between runs
      rColorOffset = 100;
      gColorOffset = 200;
      bColorOffset = 400;
      rColor = noise(i * 0.5, j * 0.5 + rColorOffset, seed) * 255;
      gColor = noise(i * 0.5 + gColorOffset, j * 0.5 + gColorOffset, seed) * 255;
      bColor = noise(i * 0.5 + bColorOffset, j * 0.5 + bColorOffset, seed) * 255;
      // Creates final RGB color from the noise-generated values
      circleColor = color(rColor, gColor, bColor);
      fill(circleColor);
      ellipse(r + i * 2*r, r + j * 2*r, r * 2);
    }
  }
}