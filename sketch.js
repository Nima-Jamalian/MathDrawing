var rotation;
var R = 0;
var elements = 256;
var e = 256;
var spacing;
function setup() {
  createCanvas(800, 800,WEBGL);
  //createCanvas(1920, 1080,WEBGL);
  colorMode(HSB);
}

function draw() {
  background(0);
  R = map(mouseX, 0, width, 0, 10);
  rotation = map(mouseY, 0, height, 0, 10);
  spacing = TWO_PI/elements; 
  translate(0,0);
  noFill();
  strokeWeight(0.3);
  for (var i = 0; i < e ;i++) {
      stroke(i*2,255,255);
      push();
      rotate(spacing*i*rotation);
      translate(sin(spacing*i*R) * 200, 0);
      box(mouseX/3);
      //torus(mouseX/3,mouseX/3);
      //ellipsoid(mouseX/2,mouseX/3,mouseX/3);
      //cone(mouseX/3,mouseX/3);
      //cylinder(mouseX/3, mouseX/3);
      pop();
  }
}