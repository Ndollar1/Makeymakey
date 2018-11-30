var r,g,b;
var ypos,xpos;
var radius;
var color;

function setup() {
  createCanvas(600,800);
  ellipseMode(RADIUS);
  color = ceil(random(4));
  xpos = 300;
  ypos = 300;
  radius = 20;
  generateColor();
}

function generateColor(){
  if(color==1)//green
  {
    r = random(100);
    g = random(150,220);
    b = random(100);
  }
  if(color==2)//red
  {
    r = random(150,220);
    g = random(100);
    b = random(100);
  }
  if(color==3)//blue
  {
    r = random(100);
    g = random(100);
    b = random(150,220);
  }
  if(color==4)//yellow
  {
    r = random(180,220);
    g = random(180,220);
    b = random(100);
  }

}
function draw() {
  background(200);
  fill(220,40,40);
  rect(50,50,100,100);
  fill(40,220,40);
  rect(450,50,100,100);
  fill(40,40,220);
  rect(50,450,100,100);
  fill(220,220,40);
  rect(450,450,100,100);
  fill(r,g,b);
  ellipse(xpos,ypos,radius,radius);
  //var d = dist(mouseX,mouseY,xpos,ypos);
  if(mouseIsPressed)
  {
    xpos = mouseX;
    ypos = mouseY;
    textSize(30);
    fill(0,0,0);
    if(xpos>=50&&xpos<=150&&ypos>=50&&ypos<=150){
      text(r, 200,50);
      text(g, 200,90);
      text(b, 200,130);
    }
    if(xpos>=50&&xpos<=150&&ypos>=450&&ypos<=550){
      text("This is blue", 200,50);
    }
    if(xpos>=450&&xpos<=550&&ypos>=450&&ypos<=550){
      text("This is yellow", 200,50);
    }
    if(xpos>=450&&xpos<=550&&ypos>=50&&ypos<=150){
      text("This is green", 200,50);
    }
  }
  textSize(30);
  fill(0,0,0);
    text(color, 200,450);


}
