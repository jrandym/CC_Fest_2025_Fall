/*
 * Class declarations
 */
class Dot {
  constructor(x = 200, y = 200, dx = random(-2, 2), dy = random(-2, 2), size = random(10, 30), col = color(random(255), random(255), random(255))) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = size;
    this.col = col;
  }
  // Method to display the dot
  display(fillColor = this.col, strokeEnabled = false, shape = 'circle') {
    fill(fillColor);
    if (strokeEnabled) {
      stroke(0);
    } else {
      noStroke();
    }
    // Draw the shape based on the specified type
    if (shape === 'circle') {
      circle(this.x, this.y, this.size);
    } else if (shape === 'square') {
      square(this.x, this.y, this.size);
    } else if (shape === 'triangle') {
      triangle(this.x, this.y - this.size/2, this.x - this.size/2, this.y + this.size/2, this.x + this.size/2, this.y + this.size/2);
    }
  }
  // Method to move the dot
  move(dx = this.dx, dy = this.dy) {
    this.x += dx;
    this.y += dy;
    // if caller provided explicit dx/dy, update the dot's velocity
    this.dx = dx;
    this.dy = dy;
  }
}

/*
 * Global variables
 */

// Array for Dot objects
let dots = [];
// Variables for the canvas
let canvasWidth = 400;
let canvasHeight = 400;
// let bgColor;
// Variables for dividing the canvas into a grid of rows and cols
let canvasRows = 10;
let canvasCols = 10;
// let canvasGrid = []
let seed = 10;

/*
 * User-defined functions
 */

function preload() {

}

/*
 * Built-in functions
 */

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(220);

  for (let d of dots) {
    d.display();
    d.move();
  }
}
// Function to handle mousePressed event
function mousePressed() {
  // Create a new Dot object at the mouse position and add it to the dots array
  let newDot = new Dot(mouseX, mouseY);
  dots.push(newDot);
}