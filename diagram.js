let w;
let h = 600;

const grid=[];

let total = data.length;
let most = 0;
for (let person of data) {
  if (person.cons.length > most) {
    most = person.cons.length
  }
  person.todraw = person.cons.slice(0, person.cons.length);
}

function setup() {
  w = windowWidth;
  const canvas = createCanvas(w, h);
  canvas.parent('container');
}

function draw() {
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
    // stickPin(person, person.score);
  }
}
