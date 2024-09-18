function preload(){
  img01 = loadImage("images/SeymourZayon_GeometricStairs.jpg")
}
function setup() {
  createCanvas(500, 676);
  background(30, 30, 30);

  //image(img01, 0, 0, 500, 676);

  let trans = 255;

  //yellow circle
  push();
  strokeWeight(0)
  fill(234, 165, 0, trans);
  circle(139, 60, 45)
  pop()
  
  //red rectangle
  push();
  strokeWeight(0)
  fill(192, 36, 13, trans);
  rect(158, 72, 59, 180)
  pop()

  //white triangle
  push();
  strokeWeight(0)
  fill(225, 212, 204, trans);
  triangle(217, 115, 452, 37, 412, 117);
  pop()

  //blue triangle
  push();
  strokeWeight(0)
  fill(84, 127, 232, trans);
  triangle(41, 231, 105, 151, 158, 230);
  pop()

  //brown square
  push();
  strokeWeight(0)
  fill(133, 40, 35, trans);
  rect(217, 179, 131, 135)
  pop()

  //green quad
  push();
  strokeWeight(0)
  fill(25, 135, 108, trans);
  quad(348, 287, 389, 252, 424, 292, 390, 328);
  pop()

  //green rectangle
  push();
  strokeWeight(0)
  fill(14, 104, 94, trans);
  rect(0, 314, 217, 141)
  pop()

  //grey circle
  push();
  strokeWeight(0)
  fill(110, 112, 125, trans);
  circle(258, 396, 78)
  pop()

  //blue rectangle
  push();
  strokeWeight(0)
  fill(68, 116, 224, trans);
  rect(0, 455, 85, 53)
  pop()

  //yellow rectangle
  push();
  strokeWeight(0)
  fill(247, 187, 1, trans);
  rect(85, 455, 57, 105)
  pop()

  //white square
  push();
  strokeWeight(0)
  fill(235, 234, 232, trans);
  rect(65, 560, 20, 20)
  pop()


}

function draw() {
  
}