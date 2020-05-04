
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(8);
  noFill();
  
  
  stroke(205, 10, 150);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);


  stroke(15, 255, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);
  
  stroke(180, 255, 25);
  let hourAngle = map(hr%24, 0, 24, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);
  
  
  push();
  rotate(secondAngle);
  stroke(205, 10, 150);
  strokeWeight(2);
  line(0, 0, 100, 0);
  pop();
  
  push();
  rotate(minuteAngle);
  stroke(15, 255, 255);
  strokeWeight(4);
  line(0, 0, 80, 0);
  pop();
  
  push();
  rotate(hourAngle);
  stroke(180, 255, 25);
  strokeWeight(8);
  line(0, 0, 60, 0);
  pop();
  
  
  stroke(255);
  point(0,0);

  
  rotate(90);
  fill(255);
  noStroke();
  text(nf(hr, 2) + ":" + nf(mn, 2) + ":" + nf(sc,2), -20, 90);
  
  
}


function mousePressed(){
	saveFrames("clock", "png", 15, 1);
}