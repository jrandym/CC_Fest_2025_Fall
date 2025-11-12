let x = 200;
let  y = 200;
let vx = 3;
let  vy = 2;
let r = 25;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);

  x += vx;
  y += vy;

  if (x < r || x > width - r) {
    vx *= -1;
  }
  if (y < r || y > height - r) {
    vy *= -1;
  }
  circle(x, y, r * 2);
}
