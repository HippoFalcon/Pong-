//INTERNET SUCKS
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(117, 58, 61);
  rotateX(0.09 * mouseX );
  rotateY(0.09 * mouseY );
  sphere(130,130,100);
}
