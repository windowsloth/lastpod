//HUMBLE FONTS
//DANIEL LINSEN
let w = 600;
let h = 600;
const cellsize = 10;
const cols = w / cellsize;
const rows = h / cellsize;
let grid = [];
for (let i = 0; i < cols * rows; i++) {
  grid.push(null);
}
let total = data.length;
let most = 0;
for (let person of data) {
  if (person.cons.length > most) {
    most = person.cons.length
  }
}

let fullx = 0;
let fully = 0;
let s = 1;
// let handtool = false;
let handtool = $('#handtool').val();
let strings = [];
let globaltree;

// let diagram = function(p) {

  class Block {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
  }

  class Quadtree {
    constructor(bounds, n) {
      this.bounds = bounds;
      this.capacity = n;
      this.points = [];
      this.subdivided = false;
      this.northwest;
      this.northeast;
      this.southwest;
      this.southeast;
    }

    insert(pin) {
      let point = pin.pos;
      if (!this.checkbounds(point)) {
        return;
      }
      if (this.points.length < this.capacity && !this.subdivided) {
        this.points.push(pin);
      } else if (this.subdivided) {
        this.northwest.insert(pin);
        this.northeast.insert(pin);
        this.southwest.insert(pin);
        this.southeast.insert(pin);
      } else {
        this.subdivide();
        this.northwest.insert(pin);
        this.northeast.insert(pin);
        this.southwest.insert(pin);
        this.southeast.insert(pin);
      }
    }

    checkbounds(point) {
      if (
        point[0] * s > this.bounds.x &&
        point[0] * s < this.bounds.x + this.bounds.w &&
        point[1] * s > this.bounds.y &&
        point[1] * s < this.bounds.y + this.bounds.h
      ) {
        return true;
      }
    }

    subdivide() {
      let subw = this.bounds.w / 2;
      let subh = this.bounds.h / 2;
      let nw = new Block(this.bounds.x, this.bounds.y, subw, subh);
      this.northwest = new Quadtree(nw, 4);
      let ne = new Block(this.bounds.x + subw, this.bounds.y, subw, subh);
      this.northeast = new Quadtree(ne, 4);
      let sw = new Block(this.bounds.x, this.bounds.y + subh, subw, subh);
      this.southwest = new Quadtree(sw, 4);
      let se = new Block(this.bounds.x + subw, this.bounds.y + subh, subw, subh);
      this.southeast = new Quadtree(se, 4);
      this.subdivided = true;

      for (let point of this.points) {
        this.northwest.insert(point);
        this.northeast.insert(point);
        this.southwest.insert(point);
        this.southeast.insert(point);
      }
      this.points.splice(0, this.points.length);
    }
  }

function setup() {
  // noLoop();
  // console.log($(document).width());
  //if ($(document).width() > 600) {
    w = windowWidth;
  //}
  // h = $(document).height() * 5;
  const canvas = createCanvas(w, h);
  canvas.parent('container');
  // background(255);
  colorMode(RGB, 255, 255, 255, 1);
  drawDots(data);
  for (let person of data) {
    person.todraw = person.cons.slice(0, person.cons.length);
  }
  for (let person of data) {
    connectDots(person);
  }
}
function draw() {
  $('.close').click(function() {
    let pinid = $(this).parent().attr('id');
    $('#' + pinid).remove();
    data[pinid].sel=false;
  });
  // s = $('#zoomslider').val();
  // console.log(s);
  // $('#handtool').click(handtool = !handtool);
  let boundary = new Block(-(w / 2) - fullx, -(h / 2) - fully, w, h);
  let tree = new Quadtree(boundary, 4);
  // for (let person of data) {
  //   person.todraw = person.cons.slice(0, person.cons.length);
  // }
  clear();
  translate((w / 2) + fullx, (h / 2) + fully);
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
    // connectDots(person);
    labelDots(tree, person);
  }
  if (handtool) {
    cursor()
  }
  globaltree = tree;
  // loop Tree(tree);
  if (
    mouseX > 0 &&
    mouseY > 0 &&
    mouseX < width &&
    mouseY < height
  ) {
    if (handtool) {
      cursor('grab');
    } else {
      cursor('default');
      currentblock(tree);
    }
  }
}

// function windowResize() {
//   w = windowWidth * .9;
//   resizeCanvas(w, h);
// }

function mouseReleased() {
  if (!handtool) {
    selectperson(globaltree);
  }
  return false;
};

function mouseDragged() {
  if (handtool) {
    cursor('grabbing');
    fullx += mouseX - pmouseX;
    fully += mouseY - pmouseY;
  }
  return false;
}

function currentblock(qtree) {
  let mx = mouseX - ((w / 2) + fullx);
  let my = mouseY - ((h / 2) + fully);
  if (qtree.subdivided) {
    currentblock(qtree.northwest);
    currentblock(qtree.northeast);
    currentblock(qtree.southwest);
    currentblock(qtree.southeast);
  } else {
    if (
      mx > qtree.bounds.x &&
      mx < qtree.bounds.x + qtree.bounds.w &&
      my > qtree.bounds.y &&
      my < qtree.bounds.y + qtree.bounds.h
    ) {
      qtree.points.forEach(person => {
        if (
          mx > (person.pos[0] * s) - 15 &&
          mx < (person.pos[0] * s) + 15 &&
          my > (person.pos[1] * s) - 15 &&
          my < (person.pos[1] * s) + 15
        ) {
          noStroke();
          fill(255, 176, 0, 1);
          circle(person.pos[0] * s, person.pos[1] * s, 7);
          for (let id of person.cons) {
            strokeWeight(2);
            stroke(255, 176, 0, 1);
            line(
              person.pos[0] * s, person.pos[1] * s,
              data[id].pos[0] * s, data[id].pos[1] * s
            );
            fill(254, 97, 0, 1);
            noStroke();
            if (s < 1.5) {
              let name = person.nickname;
              text(name, person.pos[0] * s, person.pos[1] * s + 18);
            } else {
              let name = person.name;
              text(name, person.pos[0] * s, person.pos[1] * s + 18);
            }
          }
          cursor('pointer');
        }
      });
    }
  }
}

function selectperson(qtree) {
  let mx = mouseX - ((w / 2) + fullx);
  let my = mouseY - ((h / 2) + fully);
  if (qtree.subdivided) {
    selectperson(qtree.northwest);
    selectperson(qtree.northeast);
    selectperson(qtree.southwest);
    selectperson(qtree.southeast);
  } else {
    if (
      mx > qtree.bounds.x &&
      mx < qtree.bounds.x + qtree.bounds.w &&
      my > qtree.bounds.y &&
      my < qtree.bounds.y + qtree.bounds.h
    ) {
      qtree.points.forEach(person => {
        if (
          mx > (person.pos[0] * s) - 15 &&
          mx < (person.pos[0] * s) + 15 &&
          my > (person.pos[1] * s) - 15 &&
          my < (person.pos[1] * s) + 15
        ) {
          person.sel = !person.sel;
          if (person.sel) {
            $("#selectedpins").append(`
              <div id='` + person.id + `' class='pin'>
                <button class='close'>	&#128473; </button>
                <h2 class='name'>` + person.name + `</h2>
                <div class='info'>
                  <p>` + person.blurb + `</p>
                </div>
              </div>
            `);
            // for (let ep of person.epfeat) {
            //   $('.eps').append(`
            //     <li>` + ep + `</li>
            //   `);
            // }
          } else {
            $("#" + person.id).remove();
          }
        }
      });
    }
  }
}

function loopTree(qtree) {
  if (qtree.subdivided) {
    loopTree(qtree.northwest);
    loopTree(qtree.northeast);
    loopTree(qtree.southwest);
    loopTree(qtree.southeast);
  }
  stroke(0, 255, 0 , .5);
  strokeWeight(1);
  noFill();
  rect(qtree.bounds.x, qtree.bounds.y, qtree.bounds.w, qtree.bounds.h);
}

drawDots = function(arr) {
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
    // console.log(a);
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
    // if (person.sel) {
    //   strokeWeight(2);
    //   stroke(255, 0, 0, 1);
    //   line(startx, starty, endx, endy);
    // } else {
    //   strokeWeight(1);
    //   stroke(255, 255, 255, .1);
    //   line(startx, starty, endx, endy);
    // }
    // connection.todraw.splice(connection.todraw.indexOf(person.id, 1));
    // console.log(connection.todraw.indexOf(person.id));
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
    fill(105);
    textAlign(CENTER);
    if (person.sel) {
      fill(230, 35, 37, 1);
      // fill(0);
      circle(posx, posy, 5);
      noStroke();
      fill(252, 206, 199, 1);
      textSize(24);
      textFont('Medium');
      // fill(255, 0, 0, 1);
      // stroke(255, 0, 0, 1);
      // strokeWeight(3);
      // text(name, posx, posy + 22);
      // fill(255);
      text(name, posx, posy + 18);
    } else {
      // stroke(255);
      fill(249, 246, 246, 1);
      circle(posx, posy, 5);
      textSize(24);
      textFont('Medium');
      text(name, posx, posy + 18);
    }
  }
}

function whoshown() {
  let shown = []
  for (let person of data) {
    let posx = person.pos[0] * s;
    let posy = person.pos[1] * s;
    if (posx > -300  && posx < 300 && posy > -300 && posy < 300) {
      shown.push(person.name);
    }
  }
  console.log(shown);
}

// new p5(diagram, 'container');
// new p5(controls, 'controls');

// const w = 600;
// const h = 600;
// // const rad = Math.sqrt(w * w + h * h) / 2;
// const cols = 50;
// const rows = 50;
// let grid = [];
// for (let i = 0; i < cols * rows; i++) {
//   grid.push(null);
// }
//
// const total = data.length;
// let most = 0;
// for (let person of data) {
//   // findConnections(person);
//   if (person.cons.length > most) {
//     most = person.cons.length
//   }
// }
//
// let fullx = 0;
// let fully = 0;
// // let s = 600 / w;
// let s = 1;
// let scaleslider;
// let fontRegular, fontBold;
// // let bold;
//
// function preload() {
//   fontRegular = loadFont('./B612Mono-Regular.ttf');
//   fontBold = loadFont('./B612Mono-Bold.ttf');
// }
//
// function setup() {
//   // randomSeed(666);
//   // full = createGraphics(w, h);
//   imageMode(CENTER);
//   colorMode(RGB, 255, 255, 255, 1);
//   // noLoop();
//   const canvas = createCanvas(600, 600);
//   canvas.parent('container');
//   background(255);
//   stroke(0);
//   fill(0);
//   strokeWeight(2);
//
//   scaleslider = createSlider(.5, 3.5, s, .01);
//   scaleslider.position(250, 624);
//   scaleslider.style('width', '100px');
//
//   drawDots(data);
// }
// let orgx = 0;
// let orgy = 0;
//
// function draw() {
//   clear();
//   translate((w / 2) + fullx, (h / 2) + fully);
//   for (let person of data) {
//     person.todraw = person.cons.slice(0, person.cons.length);
//   }
//   for (let person of data) {
//     connectDots(person);
//   }
//   for (let person of data) {
//     labelDots(person);
//   }
//   s = scaleslider.value();
//
//   if (
//     mouseIsPressed &&
//     mouseX > 0 &&
//     mouseY > 0 &&
//     mouseX < width &&
//     mouseY < height
//   ) {
//     fullx = fullx + (mouseX - orgx);
//     fully = fully + (mouseY - orgy);
//     if (fullx > width * .6 * s) {
//       fullx = width * .6 * s;
//     } else if (fullx < width * -.6 * s) {
//       fullx = width * -.6 * s;
//     } else if (fully > height * .6 * s) {
//       fully = height * .6 * s;
//     } else if (fully < height * -.6 * s) {
//       fully = height * -.6 * s;
//     }
//   }
//   orgx = mouseX;
//   orgy = mouseY;
// }
//
// function mouseWheel(event) {
//   if (
//     mouseX > 0 &&
//     mouseY > 0 &&
//     mouseX < width &&
//     mouseY < height
//   ) {
//     if (
//       s + event.delta * .125 >= .5 &&
//       s + event.delta * .125 <= 3.5
//     ) {
//       s += event.delta * .125;
//     }
//     return false;
//   }
//
// }
//
// function mouseClicked() {
//   let mx = mouseX - ((w / 2) + fullx);
//   let my = mouseY - ((h / 2) + fully);
//   // console.log(mx, my);
//   data.forEach(person => {
//     // console.log(mx, mouseY);
//     if (
//       mx > (person.pos[0] - 10) * s &&
//       mx < (person.pos[0] + 10) * s &&
//       my > (person.pos[1] - 10) * s &&
//       my < (person.pos[1] + 10) * s
//     ) {
//       person.sel = !person.sel;
//       redraw();
//     }
//   });
// }
//
// function drawDots(arr) {
//   for (let i = 0; i < cols * rows; i++) {
//     grid.push(null);
//   }
//   // console.log(total);
//   for (let person of arr) {
//     // person.color = color(255, 255, 255, .125);
//     person.sel = false;
//     // person.constodraw = [];
//     // for (let con of person.cons) {
//     //   person.constodraw.push(con);
//     // }
//     // const todraw = person.cons.slice(0, person.cons.length);
//     // person.todraw = todraw;
//     // person.todraw = person.cons.slice(0, person.cons.length);
//     // console.log(person.nickname+": " +person.todraw);
//     person.score = person.cons.length / most;
//
//     if (person.score > .5) {
//       placePoint(person, 1);
//       // console.log(person.name + ": " + person.score);
//     } else if (person.score > .25) {
//       placePoint(person, 2);
//       // console.log(person.name + ": " + person.score);
//     } else {
//       placePoint(person, 3);
//       // console.log(person.name + ": " + person.score);
//     }
//   }
// }
//
// function placePoint(person, section) {
//   let name = person.nickname;
//   const k = total * .25;
//   if (section == 1) {
//     let success = false;
//     for (let i = 0; i < k; i++) {
//       let a = random(TWO_PI);
//       let dist = random((w / 2) * .3);
//       let x = dist * cos(a)/* + w / 2*/;
//       let y = dist * sin(a)/* + h / 2*/;
//       let xcol = floor(x / (w / cols));
//       let ycol = floor(y / (h / rows));
//       let gridpos = xcol + ycol * cols;
//       if (
//         !grid[(xcol - 1) + (ycol - 1) * cols] &&
//         !grid[(xcol    ) + (ycol - 1) * cols] &&
//         !grid[(xcol + 1) + (ycol - 1) * cols] &&
//         !grid[(xcol + 1) + (ycol    ) * cols] &&
//         !grid[(xcol + 1) + (ycol + 1) * cols] &&
//         !grid[(xcol    ) + (ycol + 1) * cols] &&
//         !grid[(xcol - 1) + (ycol + 1) * cols] &&
//         !grid[(xcol - 1) + (ycol    ) * cols]
//       ) {
//         person.pos = [x, y];
//
//         grid[(xcol - 1) + (ycol - 1) * cols] = true;
//         grid[(xcol    ) + (ycol - 1) * cols] = true;
//         grid[(xcol + 1) + (ycol - 1) * cols] = true;
//         grid[(xcol + 1) + (ycol    ) * cols] = true;
//         grid[(xcol + 1) + (ycol + 1) * cols] = true;
//         grid[(xcol    ) + (ycol + 1) * cols] = true;
//         grid[(xcol - 1) + (ycol + 1) * cols] = true;
//         grid[(xcol - 1) + (ycol    ) * cols] = true;
//         success = true;
//
//         break;
//       }
//     }
//     if (success == false) {
//       placePoint(person, 2);
//     }
//   } else if (section == 2) {
//     let success = false;
//     for (let i = 0; i < k; i ++) {
//       let a = random(TWO_PI);
//       let dist = random((w / 2) * .33, (w / 2) * .6);
//       let x = dist * cos(a)/* + w / 2*/;
//       let y = dist * sin(a)/* + h / 2*/;
//       let xcol = floor(x / (w / cols));
//       let ycol = floor(y / (h / rows));
//       let gridpos = xcol + ycol * cols;
//       if (
//         !grid[(xcol - 1) + (ycol - 1) * cols] &&
//         !grid[(xcol    ) + (ycol - 1) * cols] &&
//         !grid[(xcol + 1) + (ycol - 1) * cols] &&
//         !grid[(xcol + 1) + (ycol    ) * cols] &&
//         !grid[(xcol + 1) + (ycol + 1) * cols] &&
//         !grid[(xcol    ) + (ycol + 1) * cols] &&
//         !grid[(xcol - 1) + (ycol + 1) * cols] &&
//         !grid[(xcol - 1) + (ycol    ) * cols]
//       ) {
//         person.pos = [x, y];
//
//         grid[(xcol - 1) + (ycol - 1) * cols] = true;
//         grid[(xcol    ) + (ycol - 1) * cols] = true;
//         grid[(xcol + 1) + (ycol - 1) * cols] = true;
//         grid[(xcol + 1) + (ycol    ) * cols] = true;
//         grid[(xcol + 1) + (ycol + 1) * cols] = true;
//         grid[(xcol    ) + (ycol + 1) * cols] = true;
//         grid[(xcol - 1) + (ycol + 1) * cols] = true;
//         grid[(xcol - 1) + (ycol    ) * cols] = true;
//         success = true;
//
//         break;
//       }
//     }
//     if (success == false) {
//       placePoint(person, 3);
//     }
//   } else {
//     let success = false;
//     for (let i = 0; i < k; i ++) {
//       let a = random(TWO_PI);
//       let dist = random((w / 2) * .66, (w / 2) * .99);
//       let x = dist * cos(a)/* + w / 2*/;
//       let y = dist * sin(a)/* + h / 2*/;
//       let xcol = floor(x / (w / cols));
//       let ycol = floor(y / (h / rows));
//       let gridpos = xcol + ycol * cols;
//       if (
//         !grid[(xcol - 1) + (ycol - 1) * cols] &&
//         !grid[(xcol    ) + (ycol - 1) * cols] &&
//         !grid[(xcol + 1) + (ycol - 1) * cols] &&
//         !grid[(xcol + 1) + (ycol    ) * cols] &&
//         !grid[(xcol + 1) + (ycol + 1) * cols] &&
//         !grid[(xcol    ) + (ycol + 1) * cols] &&
//         !grid[(xcol - 1) + (ycol + 1) * cols] &&
//         !grid[(xcol - 1) + (ycol    ) * cols]
//       ) {
//         person.pos = [x, y];
//
//         grid[(xcol - 1) + (ycol - 1) * cols] = true;
//         grid[(xcol    ) + (ycol - 1) * cols] = true;
//         grid[(xcol + 1) + (ycol - 1) * cols] = true;
//         grid[(xcol + 1) + (ycol    ) * cols] = true;
//         grid[(xcol + 1) + (ycol + 1) * cols] = true;
//         grid[(xcol    ) + (ycol + 1) * cols] = true;
//         grid[(xcol - 1) + (ycol + 1) * cols] = true;
//         grid[(xcol - 1) + (ycol    ) * cols] = true;
//         success = true;
//
//         break;
//       }
//     }
//   }
// }
//
// function buildPos() {
//
// }
//
// function connectDots(person) {
//   // console.log(person.todraw);
//   for (let con of person.todraw) {
//     let connection = data[con];
//     let startx = person.pos[0] * s;
//     let starty = person.pos[1] * s;
//     let endx = connection.pos[0] * s;
//     let endy = connection.pos[1] * s;
//     let c;
//     if (person.sel) {
//       // console.log(person.todraw);
//       c = color(255, 0, 0, 1);
//     } else {
//       c = color(255, 255, 255, .1)
//     }
//     stroke(c);
//     strokeWeight(1);
//     line(startx, starty, endx, endy);
//     // connection.todraw.splice(connection.todraw.indexOf(con), 1);
//   }
// }
//
// function labelDots(person) {
//   let name;
//   if (s < 1.5) {
//     name = person.nickname;
//   } else {
//     name = person.name;
//   }
//   let posx = person.pos[0] * s;
//   let posy = person.pos[1] * s;
//   strokeWeight(1);
//   stroke(255);
//   fill(0);
//   circle(posx, posy, 5);
//   noStroke();
//   fill(255);
//   textAlign(CENTER);
//   // if (person.sel) {
//   //   textFont(fontBold);
//   // } else {
//   //   texFont(fontRegular);
//   // }
//   if (person.sel) {
//     textFont(fontBold);
//     text(name, posx, posy + 12);
//   }
// }
