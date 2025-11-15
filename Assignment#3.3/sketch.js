// Session 3 — Grid + Noise
// ADVANCED TRACK – Generative Variation with noise() + Interaction. 
// Goal: Use noise() to make smooth, organic variation, and experiment with animation or mouse interaction.
let rows;
let columns;
let h;
let size;
let t;  // time variable for animation

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  noStroke();

  // setup variables
  rows = 10;
  columns = 10;
  size = 40;
  t = 0;   // start time
}

function draw() {
  background(0, 0, 95);

  // nested loops make a grid
  for (let x = 0; x < columns; x = x + 1) {
    for (let y = 0; y < rows; y = y + 1) {

      // use noise() for smooth changes across space + time
      let n = noise(x * 0.2, y * 0.2, t);
      h = map(n, 0, 1, 150, 300);
      size = map(n, 0, 1, 10, 40);

      fill(h, 100, 100);

      // alternate shapes for variety
      if (x % 2 == 0) {
        ellipse(x * 40 + 20, y * 40 + 20, size);
      } else {
        rect(x * 40 + 20, y * 40 + 20, size);
      }
    }
  }

  // slowly animate the noise field
  t = t + 0.01;
}
