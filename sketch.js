var hr, mn, sc;


function setup() {
  createCanvas(650,600); 
}


function draw() {

  background(0); 

  //getting values of time
  hr = hour();
  mn = minute();
  sc = second();
  
  //displaying written time
  fill(255);
  textSize(20);
  textFont("Garamond");
  text(hr+" : "+mn+" : "+sc, 270, height-20);


  translate(300, 300);
  rotate(-90);
  angleMode(DEGREES);

  stroke(255);
  strokeWeight(7);  
  noFill();

  //second arc
  var scAngle = map(sc,0,60,0,360);
  stroke("#0300AB") 
  arc(0,0,500,500,0, scAngle);

  //minute arc
  var mnAngle = map(mn,0,60,0,360); 
  stroke("#0FFF00");
  arc(0,0,480,480,0, mnAngle);

  //hour arc
  var hrAngle = map(hr%12,0,12,-0,360); 
  stroke("#FF0000"); 
  arc(0,0,460,460,0, hrAngle);

  //second hand
  push();
  strokeWeight(5);
  stroke("#0300AB");
  rotate(scAngle);
  line(0, 0, 200, 0)
  pop();

  //minute hand
  push();
  strokeWeight(8);
  stroke("#0FFF00");
  rotate(mnAngle);
  line(0, 0, 160, 0)
  pop();

  //hour hand
  push();
  strokeWeight(12);
  stroke("#FF0000");
  rotate(hrAngle);
  line(0, 0, 100, 0)
  pop();

  //center of the clock
  stroke(255);
  fill(255);
  ellipse(0, 0, 12);

}


