let x ;
let y ;
let theta;
let r;
let v1;
let v2;
let v3;
let v4;
function setup() {
  createCanvas(1000, 600);
  //x = width/2 + 200;
  //y = height/2;
  r = 200;
  theta = 0;




}

function draw() {
  background(220);
  translate(width/2, height/2);
  x = r * cos(theta);
  y = r * sin(theta);
  line(-200, 0, 200, 0);
  line(0, -200, 0, 200);
  noFill();
  fill("white");
  ellipse(x, y, 30);
  v1 = createVector(0, 0);
  v2 = createVector(x, y);
  v3 = createVector(x, 0);
  v4 = createVector(0, y);
  drawArrow(v1, v3, "red");
  drawArrow(v1, v4, "green");
  drawArrow(v1, v2, "blue");


  line(x, 0, x, y);
  line(0, y, x, y);
  theta -=0.01;
  noFill();
  ellipse(0, 0, 400);

}
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}
