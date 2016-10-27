//INTERNET SUCKS
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  pointLight(255, 0, 0, width/2, height/2, 400);
}

function draw(){
  background(117, 58, 61);
  rotateX(0.09 * mouseX );
  rotateY(0.09 * mouseY );
  fill(130,45,7)
  sphere(130,130,100);
}
