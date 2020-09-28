let w;
let h = 600;
const cellsize = 10;
let cols, rows;
let grid=[];

let s = 1;

let total = data.length;
let most = 0;
for (let person of data) {
  if (person.cons.length > most) {
    most = person.cons.length
  }
  person.todraw = person.cons.slice(0, person.cons.length);
}
let strings = [];

function setup() {
  w = windowWidth;
  cols = w / cellsize;
  rows = h / cellsize;
  const canvas = createCanvas(w, h);
  canvas.parent('container');
  drawDots(data);
}

function draw() {
  clear();
  const boundary = new Block(-w / 2, -h / 2, w, h);
  let tree = new Quadtree(boundary, 4);
}

function drawDots(arr) {
  for (let i = 0; i < cols * rows; i++) {
    grid.push(null);
  }
  for (let person of arr) {
    person.sel = false;
    person.score = person.cons.length / most;
    stickPin(person, person.score);
  }
}
function stickPin(person, score) {
  const k = total * .25;
  let success = false;
  for (let i = 0; i < k; i++) {
    let a = random(TWO_PI);
    let terma = (w * w) * pow(sin(a), 2);
    let termb = (h * h) * pow(cos(a), 2);
    let rad = ((w * h) / sqrt(terma + termb)) / 2;
    let dist = (rad * .8) * (1 - score) + (rad * .1);
    let x = cos(a) * dist;
    let y = sin(a) * dist;
    let xcol = floor(x / cellsize);
    let ycol = floor(y / cellsize);
    let gridpos = xcol + ycol * cols;
    if (
      !grid[(xcol - 1) + (ycol - 1) * cols] &&
      !grid[(xcol    ) + (ycol - 1) * cols] &&
      !grid[(xcol + 1) + (ycol - 1) * cols] &&
      !grid[(xcol + 1) + (ycol    ) * cols] &&
      !grid[(xcol + 1) + (ycol + 1) * cols] &&
      !grid[(xcol    ) + (ycol + 1) * cols] &&
      !grid[(xcol - 1) + (ycol + 1) * cols] &&
      !grid[(xcol - 1) + (ycol    ) * cols]
    ) {
      person.pos = [x, y];

      grid[(xcol - 1) + (ycol - 1) * cols] = true;
      grid[(xcol    ) + (ycol - 1) * cols] = true;
      grid[(xcol + 1) + (ycol - 1) * cols] = true;
      grid[(xcol + 1) + (ycol    ) * cols] = true;
      grid[(xcol + 1) + (ycol + 1) * cols] = true;
      grid[(xcol    ) + (ycol + 1) * cols] = true;
      grid[(xcol - 1) + (ycol + 1) * cols] = true;
      grid[(xcol - 1) + (ycol    ) * cols] = true;
      success = true;

      break;
    }
  }
  if (!success) {
    stickPin(person, (person.cons.length + 2) / length)
  }
}
