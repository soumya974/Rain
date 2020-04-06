var drops = [];

function setup(){
  var canvas = createCanvas(1200,600);
  // noprotect
  for (var i = 0; i < 500; i++) {
    drops[i] = new Rain();
  }
}

function draw() {
  background(230, 230, 250);  
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].display();
  }
}