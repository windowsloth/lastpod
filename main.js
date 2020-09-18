const w = 600;
const h = 600;
// const rad = Math.sqrt(w * w + h * h) / 2;
const cols = 50;
const rows = 50;
let grid = [];
for (let i = 0; i < cols * rows; i++) {
  grid.push(null);
}

const total = data.length;
let most = 0;
for (let person of data) {
  // findConnections(person);
  if (person.cons.length > most) {
    most = person.cons.length
  }
}

let fullx = 0;
let fully = 0;
// let s = 600 / w;
let s = 1;
let scaleslider;

function setup() {
  // randomSeed(666);
  // full = createGraphics(w, h);
  imageMode(CENTER);
  colorMode(RGB, 255, 255, 255, 1);
  // noLoop();
  createCanvas(600, 600);
  background(255);
  stroke(0);
  fill(0);
  strokeWeight(2);

  scaleslider = createSlider(.5, 3.5, s, .01);
  scaleslider.position(250, 624);
  scaleslider.style('width', '100px');

  drawDots(data);
}
let orgx = 0;
let orgy = 0;
function draw() {
  clear();
  translate((w / 2) + fullx, (h / 2) + fully);
  // noStroke();
  // fill(0, 255, 0, .15);
  // circle(0, 0, s * w * .3);
  // circle(0, 0, s * w * .6);
  // circle(0, 0, s * w);
  for (let person of data) {
    person.constodraw = [];
    for (let con of person.cons) {
      person.constodraw.push(con);
    }
  }
  for (let person of data) {
    connectDots(person);
  }
  for (let person of data) {
    labelDots(person);
  }
  s = scaleslider.value();

  if (
    mouseIsPressed &&
    mouseX > 0 &&
    mouseY > 0 &&
    mouseX < width &&
    mouseY < height
  ) {
    fullx = fullx + (mouseX - orgx);
    fully = fully + (mouseY - orgy);
    if (fullx > width * .6 * s) {
      fullx = width * .6 * s;
    } else if (fullx < width * -.6 * s) {
      fullx = width * -.6 * s;
    } else if (fully > height * .6 * s) {
      fully = height * .6 * s;
    } else if (fully < height * -.6 * s) {
      fully = height * -.6 * s;
    }
  }
  orgx = mouseX;
  orgy = mouseY;
}

function mouseWheel(event) {
  if (
    mouseX > 0 &&
    mouseY > 0 &&
    mouseX < width &&
    mouseY < height &&
    s + event.delta > .5 &&
    s + event.delta < 3.5
  ) {
    s += event.delta * .5;
    scaleslider.value(s);
  }
}

function drawDots(arr) {
  for (let i = 0; i < cols * rows; i++) {
    grid.push(null);
  }
  // console.log(total);
  for (let person of arr) {
    // person.constodraw = [];
    // for (let con of person.cons) {
    //   person.constodraw.push(con);
    // }
    const todraw = person.cons.slice(0, person.cons.length);
    person.todraw = todraw;
    person.score = person.cons.length / most;

    if (person.score > .5) {
      placePoint(person, 1);
      // console.log(person.name + ": " + person.score);
    } else if (person.score > .25) {
      placePoint(person, 2);
      // console.log(person.name + ": " + person.score);
    } else {
      placePoint(person, 3);
      // console.log(person.name + ": " + person.score);
    }
  }
}

function placePoint(person, section) {
  let name = person.nickname;
  const k = total * .25;
  if (section == 1) {
    let success = false;
    for (let i = 0; i < k; i++) {
      let a = random(TWO_PI);
      let dist = random((w / 2) * .3);
      let x = dist * cos(a)/* + w / 2*/;
      let y = dist * sin(a)/* + h / 2*/;
      let xcol = floor(x / (w / cols));
      let ycol = floor(y / (h / rows));
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
    if (success == false) {
      placePoint(person, 2);
    }
  } else if (section == 2) {
    let success = false;
    for (let i = 0; i < k; i ++) {
      let a = random(TWO_PI);
      let dist = random((w / 2) * .33, (w / 2) * .6);
      let x = dist * cos(a)/* + w / 2*/;
      let y = dist * sin(a)/* + h / 2*/;
      let xcol = floor(x / (w / cols));
      let ycol = floor(y / (h / rows));
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
    if (success == false) {
      placePoint(person, 3);
    }
  } else {
    let success = false;
    for (let i = 0; i < k; i ++) {
      let a = random(TWO_PI);
      let dist = random((w / 2) * .66, (w / 2) * .99);
      let x = dist * cos(a)/* + w / 2*/;
      let y = dist * sin(a)/* + h / 2*/;
      let xcol = floor(x / (w / cols));
      let ycol = floor(y / (h / rows));
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
  }
}

function findConnections(person) {
  const others = data.slice(0, data.indexOf(person)).concat(data.slice(data.indexOf(person) + 1, data.length));
  let connections = [];
  for (let ep of person.epfeat) {
    const results = others.filter(candidate => candidate.epfeat.includes(ep));
    for (result of results) {
      if (!connections.includes(result)) {
        connections.push(result);
      }
    }
  }
  person.cons = connections;
}

function connectDots(person) {
  for (let con of person.todraw) {
    let connection = data[con];
    let startx = person.pos[0] * s;
    let starty = person.pos[1] * s;
    let endx = connection.pos[0] * s;
    let endy = connection.pos[1] * s;
    stroke(255, 0, 0, 1);
    strokeWeight(2);
    line(startx, starty, endx, endy);
    let delindex = connection.todraw.indexOf(person.id);
    connection.towdraw.splice(delindex, 1);
  }
  // if (person.cons) {
  //   for (connection of person.constodraw) {
  //     let startx = person.pos[0] * s;
  //     let starty = person.pos[1] * s;
  //     let endx = connection.pos[0] * s;
  //     let endy = connection.pos[1] * s;
  //     stroke(255, 0, 0, 1);
  //     strokeWeight(2);
  //     line(startx, starty, endx, endy);
  //     let delindex = connection.constodraw.indexOf(person);
  //     connection.constodraw.splice(delindex, 1);
  //   }
  // }
}

function labelDots(person) {
  let name;
  if (s < 1.5) {
    name = person.nickname;
  } else {
    name = person.name;
  }
  let posx = person.pos[0] * s;
  let posy = person.pos[1] * s;
  noStroke();
  fill(0);
  circle(posx, posy, 5);
  textAlign(CENTER)
  text(name, posx, posy + 12);
}
