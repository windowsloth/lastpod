let w;
let h = 600;
const cellsize = 10;
let cols, rows;
let grid=[];

let s = 1;
let fullx = 0;
let fully = 0;

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
  colorMode(RGB, 255, 255, 255, 1);
  w = windowWidth;
  cols = w / cellsize;
  rows = h / cellsize;
  const canvas = createCanvas(w, h);
  canvas.parent('container');
  drawDots(data);
  for (let person of data) {
    connectDots(person);
  }
}

function draw() {
  clear();
  translate((w / 2) + fullx, (h / 2) + fully);
  const boundary = new Block(-w / 2, -h / 2, w, h);
  let tree = new Quadtree(boundary, 4);
  for (let connection of strings) {
    let x1 = connection.a.pos[0] * s;
    let y1 = connection.a.pos[1] * s;
    let x2 = connection.b.pos[0] * s;
    let y2 = connection.b.pos[1] * s;
    if (connection.a.sel || connection.b.sel) {
      strokeWeight(2);
      stroke(170, 35, 31, 1);
      line(x1, y1, x2, y2);
    } else {
      strokeWeight(1);
      stroke(246, 243, 243, .25);
      line(x1, y1, x2, y2);
    }
  }
  for (let person of data) {
    labelDots(tree, person);
  }
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
function connectDots(person) {
  for (let con of person.todraw) {
    let connection = data[con];
    let startx = person.pos[0] * s;
    let starty = person.pos[1] * s;
    let endx = connection.pos[0] * s;
    let endy = connection.pos[1] * s;
    data[con].todraw.splice(data[con].todraw.indexOf(person.id), 1);
    let result = {
      a: person,
      b: connection
    }
    strings.push(result);
  }
}
function labelDots(tree, person) {
  let posx = person.pos[0] * s;
  let posy = person.pos[1] * s;
  let name;
  if (
    posx > -(w / 2) - fullx &&
    posx < (w / 2) - fullx &&
    posy > -(h / 2) - fully &&
    posy < (h / 2) - fully
  ) {
    tree.insert(person);
    if (s < 1.5) {
      name = person.nickname;
    } else {
      name = person.name;
    }
    noStroke();
    textAlign(CENTER);
    textSize(24);
    textFont('Medium');
    if (person.sel) {
      fill(230, 35, 37, 1);
      circle(posx, posy, 5);
      fill(252, 206, 199, 1);
      text(name, posx, posy + 18);
    } else {
      fill(249, 246, 246, 1);
      circle(posx, posy, 5);
      text(name, posx, posy + 18);
    }
  }
}
