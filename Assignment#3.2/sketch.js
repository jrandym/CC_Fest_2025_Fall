// Session 3 — Grid + Random
// BASIC TRACK: Use for loops and random() for color, size, or shape. Learn to see how repetition and chance interact to create visual rhythm.

let rows;
let columns;
let h;
let size;
let seed;
let isComplement = false;

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

// Create a key press function which toggles between original and complement colors
function keyPressed() {
  isComplement = !isComplement; // toggle the state
  background(0, 0, 95); // clear background

  randomSeed(seed);  // use same seed to get same pattern

  // redraw the grid with original or complement colors
  for (let x = 0; x < columns; x = x + 1) {
    for (let y = 0; y < rows; y = y + 1) {

      // get the same random hue and size as original
      h = random(0, 360);
      size = random(20, 40);

      // use original or complement color based on toggle
      if (isComplement) {
        fill((h + 180) % 360, 100, 100);
      } else {
        fill(h, 100, 100);
      }

      // alternate shapes using even/odd logic
      if (x % 2 == 0) {
        ellipse(x * 40 + 20, y * 40 + 20, size);
      } else {
        rect(x * 40 + 20, y * 40 + 20, size);
      }
    }
  }
}

// Create a mouse press function to change the seed and redraw the pattern when the mouse is clicked
function mousePressed() {
  seed = random(1000);  // new random seed
  isComplement = false; // reset to original colors
  background(0, 0, 95); // clear background

  randomSeed(seed);  // set new seed

  // redraw the grid with new random values
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
/* Reflection: answer these questions
 * 1. How did you use `for` loops to structure your pattern?
 *    - the outer for loop was use to create columns of alternating shapes (circles and squares) across the canvas
 *    - the inner for loop was used to create rows of shapes within each column, filling the grid systematically.
 * 2. What variables control color and size variation?
 *    - The variables `h` (hue) and `size` control the color and size of the shapes.
 * 3. How does changing the random seed affect your composition?
 *    - Changing the random seed alters the sequence of random values generated, resulting in a different pattern.
 * 4. What happens if you swap `random()` for a fixed value?
 *   - Swapping `random()` for a fixed value would result in uniformity across the grid, with all shapes having the same color and size, eliminating variation.
 * 5. How did you implement interactivity (key press or mouse press)?
 *   - Key press toggles between original and complement colors.
 *   - Mouse press changes the seed and redraws the pattern.
 */