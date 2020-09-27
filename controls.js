let slider, hand;
// function preload() {
//   regular = loadFont('./B612Mono-Regular.ttf')
// }
function setup() {
  const canvas = createCanvas(600, 50);
  canvas.parent('controls');
  background(0);
  slider = createSlider(.5, 3.5, s, .01);
  slider.position(200, 25);
  hand = createButton('&#9995;');
  hand.position(100, 25);
  hand.mousePressed(togglehand);
  fill(255);
  // textFo?nt(regular);
  text('Zoom', 400, 36);
}

function draw() {
   s = slider.value();
}

function togglehand() {
  handtool = !handtool;
}
