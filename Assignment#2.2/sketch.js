// Starting position of the circle
let x = 200;
let y = 200;
// Velocity of the circle
let vx = 2;
let vy = 2;
// Radius of the circle
let r = 25;
// Setup function to create the canvas
function setup() {
  createCanvas(400, 400);
}
// Draw function to animate the circle
function draw() {
  background(222);
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
// Create a clicker function to change the size of the circle if the mouse is clicked inside the circle
function mousePressed() {
  let d = dist(mouseX, mouseY, x, y);
  if (d < r) {
    // r = random(10, 50);
    r += 5;
    // Reset radius if it exceeds 50
    if (r > 50) {
      r = 25;
    }
  }
}

