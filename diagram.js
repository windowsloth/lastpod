let w;
let h = 600;

function setup() {
  w = windowWidth;
  const canvas = createCanvas(w, h);
  canvas.parent('container');
}

function draw() {
  const boundary = new Block(-w / 2, -h / 2, w, h);
  let tree = new Quadtree(boundary, 4);
}
