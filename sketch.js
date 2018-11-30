var square;
var triangle;
var triangleControl;
var squareControl;
var squareJump;
var triangleJump;
var GRAVITY = 1;
var beam1;
var beam1a;
var tC, sC;
var unlocked;
var doorH;
var circle;
var control;

// function preload(){
//   circle = loadAnimation("Circle1.png","Circle7.png");
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  triangleControl = true;
  squareControl = false;
  squareJump = false;
  triangleJump = false;
  unlocked = false;
  control = createSprite(50, 50);
  triangle = createSprite(200, 200);
  square = createSprite(150, 150);
  floor = createSprite(300, 600);
  floor.addImage(loadImage('ground-01.png'));
  floor2 = createSprite(600, 300);
  floor2.addImage(loadImage('ground-01.png'));
  beam1 = 0;
  beam1a = 0;
  doorH = 300;
  tC = green;
  sC = blue;
  square.addAnimation('normal', "CircleB1_Sleep.png", "CircleB4_Sleep.png");
  triangle.addAnimation('normal', "TrimanR1.png", "TrimanR9.png");
  control.addAnimation('normal', "TrimanR1.png", "TrimanR9.png");

}



function draw() {
  background(200);
  triangle.velocity.x = 0;
  square.velocity.x = 0;
  if (keyIsDown(65) && triangleControl && triangle.position.x >= 50) {
    //   if(triangle.position.x >=450&&!unlocked){
    //   triangle.velocity.x = 0;
    // }
    //   else{
    triangle.velocity.x = -5;
    //}
  }
  if (keyIsDown(68) && triangleControl) {
    if (triangle.position.x >= 480 && !unlocked && triangle.position.y >= 300)
      triangle.velocity.x = 0;
    else if (triangle.position.x >= 750) {
      triangle.velocity.x = 0;
    } else triangle.velocity.x = 5;
  }
  if (keyIsDown(65) && squareControl && square.position.x >= 50) {
    //   if(square.position.x >=450&&!unlockede.position.y>=250){
    //   square.velocity.x = 0;
    // }
    //   else{
    square.velocity.x = -5;
    //}
  }
  if (keyIsDown(68) && squareControl) {
    if (square.position.x >= 480 && !unlocked && square.position.y >= 300)
      square.velocity.x = 0;
    else if (square.position.x >= 750) {
      square.velocity.x = 0;
    } else //if(square.position.x>=0)
      square.velocity.x = 5;
  }
  if (keyIsDown(87) && squareControl && squareJump)
    square.velocity.y = -30;
  if (keyIsDown(87) && triangleControl && triangleJump)
    triangle.velocity.y = -30;

  //square.position.y+=30;
  //triangle.position.y+=30;
  if (keyIsDown(70)) {
    if (tC == blue) {
      triangle.addAnimation('normal', "TrimanB1.png", "TrimaneB9.png");
      control.addAnimation('normal', "TrimanB1.png", "TrimanB9.png");
    } else if (tC == green) {
      triangle.addAnimation('normal', "TrimanG1.png", "TrimanG9.png");
      control.addAnimation('normal', "TrimanG1.png", "TrimanG9.png");
    } else if (tC == red) {
      triangle.addAnimation('normal', "TrimanR1.png", "TrimanR9.png");
      control.addAnimation('normal', "TrimanR1.png", "TrimanR9.png");
    }
    if (sC == blue)
      square.addAnimation('normal', "CircleB1_Sleep.png", "CircleB4_Sleep.png");
    else if (sC == green)
      square.addAnimation('normal', "CircleG1_Sleep.png", "CircleG4_Sleep.png");
    else if (sC == red)
      square.addAnimation('normal', "CircleR1_Sleep.png", "CircleR4_Sleep.png");
    triangleControl = true;
    squareControl = false;
  }
  if (keyIsDown(37) && triangleControl) {
    tC = green;
    beam1a = 0;
    control.addAnimation('normal', "TrimanG1.png", "TrimanG9.png");
    triangle.addAnimation('normal', "TrimanG1.png", "TrimanG9.png");
  }
  if (keyIsDown(38) && triangleControl) {
    tC = red;
    beam1a = 0;
    control.addAnimation('normal', "TrimanR1.png", "TrimanR9.png");
    triangle.addAnimation('normal', "TrimanR1.png", "TrimanR9.png");
  }
  if (keyIsDown(39) && triangleControl) {
    tC = blue;
    beam1a = 0;
    control.addAnimation('normal', "TrimanB1.png", "TrimanB9.png");
    triangle.addAnimation('normal', "TrimanB1.png", "TrimanB9.png");
  }
  if (keyIsDown(37) && squareControl) {
    sC = green;
    beam1a = 0;
    control.addAnimation('normal', "CircleG1.png", "CircleG9.png");
    square.addAnimation('normal', "CircleG1.png", "CircleG9.png");
  }
  if (keyIsDown(38) && squareControl) {
    square.addAnimation('normal', "CircleR1.png", "CircleR9.png");
    control.addAnimation('normal', "CircleR1.png", "CircleR9.png");
    sC = red;
    beam1a = 0;
  }
  if (keyIsDown(39) && squareControl) {

    control.addAnimation('normal', "CircleB1.png", "CircleB9.png");
    square.addAnimation('normal', "CircleB1.png", "CircleB9.png");
    sC = blue;
    beam1a = 0;
  }
  if (keyIsDown(71)) {

    if (tC == blue)
      triangle.addAnimation('normal', "TrimanB1_Sleep.png", "TrimaneB4_Sleep.png");
    else if (tC == green)
      triangle.addAnimation('normal', "TrimanG1_Sleep.png", "TrimanG4_Sleep.png");
    else if (tC == red)
      triangle.addAnimation('normal', "TrimanR1_Sleep.png", "TrimanR4_Sleep.png");
    if (sC == blue){
      control.addAnimation('normal', "CircleB1.png", "CircleB9.png");
      square.addAnimation('normal', "CircleB1.png", "CircleB9.png");
    }
    if (sC == red){
      control.addAnimation('normal', "CircleR1.png", "CircleR9.png");
      square.addAnimation('normal', "CircleR1.png", "CircleR9.png");
    }
    if (sC == green){
      control.addAnimation('normal', "CircleG1.png", "CircleG9.png");
      square.addAnimation('normal', "CircleG1.png", "CircleG9.png");
    }
    triangleControl = false;
    squareControl = true;
  }
  // if(squareControl){
  //   control.addAnimation('normal',"Circle1.png","Circle7.png" );
  // }
  // else{
  //   control.addAnimation('normal',"Circle1.png","Circle7.png" );
  // }
  if (floor.overlapPixel(triangle.position.x, triangle.position.y + 30) == false && floor2.overlapPixel(triangle.position.x, triangle.position.y + 30) == false)
    triangle.velocity.y += GRAVITY;
  if (floor.overlapPixel(triangle.position.x, triangle.position.y + 30) || floor2.overlapPixel(triangle.position.x, triangle.position.y + 30)) {
    triangle.position.y--;
    triangle.velocity.y = 0;
    triangleJump = true;
  } else {
    triangleJump = false;
  }
  if (floor.overlapPixel(square.position.x, square.position.y + 30) == false && floor2.overlapPixel(square.position.x, square.position.y + 30) == false)
    square.velocity.y += GRAVITY;
  if (floor.overlapPixel(square.position.x, square.position.y + 30) || floor2.overlapPixel(square.position.x, square.position.y + 30)) {
    square.position.y--;
    square.velocity.y = 0;
    squareJump = true;
  } else {
    squareJump = false;
  }
  noStroke();
  if (beam1 <= 300)
    beam1 += 5;
  if (triangle.position.x >= 450 && triangle.position.x <= 550 && triangle.position.y >= 220 && triangle.position.y <= 250 && tC == blue) {
    if (beam1a <= 300)
      beam1a += 5;
    fill(0, 0, 200);
    rect(500, 200, beam1a, 20);
  } else if (triangle.position.x >= 450 && triangle.position.x <= 550 && triangle.position.y >= 220 && triangle.position.y <= 250 && tC == green) {
    if (beam1a <= 300)
      beam1a += 5;
    fill(0, 200, 0);
    rect(500, 200, beam1a, 20);
  } else if (triangle.position.x >= 450 && triangle.position.x <= 550 && triangle.position.y >= 220 && triangle.position.y <= 250 && tC == red) {
    if (beam1a <= 300)
      beam1a += 5;
    fill(200, 0, 0);
    rect(500, 200, beam1a, 20);
  }
  // else {
  //   beam1a = 0;
  //   fill(200,0,200);
  // }
  else if (square.position.x >= 450 && square.position.x <= 550 && square.position.y >= 220 && square.position.y <= 250 && sC == blue) {
    if (beam1a <= 300)
      beam1a += 5;
    fill(0, 0, 200);
    rect(500, 200, beam1a, 20);
  } else if (square.position.x >= 450 && square.position.x <= 550 && square.position.y >= 220 && square.position.y <= 250 && sC == green) {
    if (beam1a <= 300)
      beam1a += 5;
    fill(0, 200, 0);
    rect(500, 200, beam1a, 20);
  } else if (square.position.x >= 450 && square.position.x <= 550 && square.position.y >= 220 && square.position.y <= 250 && sC == red) {
    if (beam1a <= 300)
      beam1a += 5;
    fill(200, 0, 0);
    rect(500, 200, beam1a, 20);
  } else {
    beam1a = 0;
    //fill(200,0,200);
  }
  if ((beam1a >= 300 && square.position.x >= 450 && square.position.x <= 550 && square.position.y >= 220 && square.position.y <= 250 && sC == blue) || (beam1a >= 300 && triangle.position.x >= 450 && triangle.position.x <= 550 && triangle.position.y >= 220 && triangle.position.y <= 250 && tC == blue)) {
    unlocked = true;
  } else {
    unlocked = false;
  }
  fill(200, 200, 200);
  stroke(0);
  strokeWeight(5);
  rect(0, 0, 100, 100);
  noStroke();
  text(square.position.x, 200, 210);
  text(square.position.y, 200, 220);
  fill(250, 250, 250);
  rect(500, 0, 20, beam1);
  fill(100, 100, 100);
  rect(513, 320, 75, doorH);
  drawSprites();

  noStroke();
  rect(800, 0, 100, 300);
  if (unlocked) {
    stroke(0, 100, 250);
    strokeWeight(20);
    if (doorH >= 0)
      doorH -= 5;
  } else {
    stroke(0, 0, 50);
    strokeWeight(10);
    if (doorH <= 290)
      doorH += 20;
  }
  line(800, 213, 800, 302);
  line(800, 302, 550, 302);
  line(550, 302, 550, 325);
  noStroke();
  fill(0, 0, 200);
  ellipse(800, 213, 50, 50);

}
