// Session 4 — Array Visualization (Basic & Adv)
// Goal: Store multiple related values in arrays & draw them with a loop.
/*
 * I'm try to recreate my project from Assignment #3
 * (https://editor.p5js.org/jrandymac/sketches/E6Z7kIjHn)
 * but using arrays.
 * It's still WIP
 */

/*
 * Global Variables
 */
// Create array variables for list of colors, sizes, x and y positions
let xPos = [];
let yPos = [];
let shapeWidth = [];
let shapeHeight = [];

let shapeColor = [];
// let shapeSize = [];
let shapeType = [];
let validShapesTypes = ["ellipse","rectangle"];
// // Create variables rColor, gColor, bColor for color components
// let rColor = "red";
// let gColor = "blue";
// let bColor = "green";
// // Create and initialize variables for color complements
// let compRed;
// let compGreen;
// let compBlue;
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
function preload() {}

/*
 * Built-in functions
 */

function setup() {
  // Create canvas of size 400x400
  // canvasWidth = 400;
  // canvasHeight = 400;
  createCanvas(canvasWidth, canvasHeight);
  colorMode(HSB);
  noStroke();
  background(0, 0, 95);
  randomSeed(seed); // same pattern every draw

  // create the x & y offsets for centering the shapes using col & row indexes
  // xOS will be 1/2 the length of the canvas grid element
  let xOS = canvasWidth / canvasCols / 2;
  // yOS will be 1/2 the height of the canvas grid element
  let yOS = canvasHeight / canvasRows / 2;

  /*
   * Precompute the shape positions
   */
  // set the initial width & height of a shape to be the same as the grid element
  let gridElementWidth = canvasWidth / canvasCols;
  let gridElementHeight = canvasHeight / canvasRows;
  // Loop over number of canvasCols to set shapeWidth
  for (let col = 0; col < canvasCols; col++) {
    shapeWidth[col] = gridElementWidth;
    xPos[col] = col * shapeWidth[col] + xOS;
  }
  // Loop over number of canvasRows to set shapeHeight
  for (let row = 0; row < canvasRows; row++) {
    shapeHeight[row] = gridElementHeight;
    yPos[row] = row * shapeHeight[row] + yOS;
  }

  /* 
   * Fill the grid with alternating ellipses and rectangles along the rows -> alternating columns of ellipses and rectangle nested loops = repetition across rows and columns
   */
  
  for (let col = 0; col < canvasCols; col++) {
    // first create empty column arrays for shape data
    shapeColor[col] = [];
    shapeType[col] = [];
    // next fill the grid with data for each shape
    for (let row = 0; row < canvasRows; row++) {
      shapeColor[col][row] = random(0, 360); // choose a random hue
      // alternate shapes using even/odd logic
      if (col % 2 == 0) {
        shapeType[col][row] = "ellipse";
      } else {
        shapeType[col][row] = "rectangle";
      }
    }
  }
  //   // fill array with colors
  //   arrCol[0] = rColor;
  //   arrCol[1] = gColor;
  //   arrCol[2] = bColor;

  //   // fill array with random sizes
  //   for (let j = 0; j < arrCol.length; j++) {
  //     arrSize[j] = random(40, 120);
  //   }
  // }
}
function draw() {
  background(0, 0, 95);

  // visualize arrays
  for (let col = 0; col < canvasCols; col++) {
    for (let row = 0; row < canvasRows; row++) {
      fill(shapeColor[col][row],100,100);
      // shapes[col][row];
      if (shapeType[col][row] === "ellipse") {
        ellipse(xPos[col], yPos[row], shapeWidth[col], shapeHeight[row]);
      } else {
        rect(xPos[col], yPos[row], shapeWidth[col], shapeHeight[row]);
      }
    }
  }
}
