/*
 * Class declarations
 */
class Dot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = random(-2, 2);
    this.dy = random(-2, 2);
    this.size = random(10, 30);
    this.col = color(random(255), random(255), random(255));
  }

  display() {
    fill(this.col);
    noStroke();
    circle(this.x, this.y, this.size);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
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
    d.move();
    d.display();
  }
}
// Function to handle mousePressed event
function mousePressed() {
  // Create a new Dot object at the mouse position and add it to the dots array
  let newDot = new Dot(mouseX, mouseY);
  dots.push(newDot);
}