// Project 1
// Karla Ruiz
// Drawing Machine

var circle = [];
//var line = [];

function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 45; i++) {
    var x = random(width);
    var y = random(height);
    var r = i + 2;
    circle[i] = new Jitter(x, y, r);
    //line[i] =  new Jitter(x%20,y%30,i*2);
  }
  background(204);
}

function draw() {
  for (var i = 0; i < circle.length; i++) {
    circle[i].move();
    circle[i].display();
      
//      for (var j = 0; j < line.length; i++) {
//          line[j].move();
//          
//      }
//      
      
      
  }
}

function Jitter(tempX, tempY, tempDiameter) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 3.5;
  
  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
  
  this.display = function() {
      
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}