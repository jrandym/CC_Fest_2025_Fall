// Session 3 — Grid + Random
// Goal: Use for loops and random() to make a colorful grid

let rows;
let columns;
let h;
let size;
let seed;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  noStroke();

  // setup variables
  rows = 10;
  columns = 10;
  size = 40;
  seed = 10;   // change this number for a new pattern
  
  background(0, 0, 95);

  randomSeed(seed);  // same pattern every draw

  // nested loops = repetition across rows and columns
  for (let x = 0; x < columns; x = x + 1) {
    for (let y = 0; y < rows; y = y + 1) {

      // choose a random hue and shape size
      h = random(0, 360);
      size = random(20, 40);

      // set fill color using HSB
      fill(h, 100, 100);

      // alternate shapes using even/odd logic
      if (x % 2 == 0) {
        ellipse(x * 40 + 20, y * 40 + 20, size);
      } else {
        rect(x * 40 + 20, y * 40 + 20, size);
      }
    }
  }
}

