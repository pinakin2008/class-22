var m,f;

function setup() {
  createCanvas(800,400);
 f =  createSprite(400, 100, 50, 50);
 m = createSprite(400,300,50,50);
 m.shapeColor = "red";
 f.shapeColor = "red";
m.velocityY = -4;
f.velocityY = 4;
}

function draw() {

 
  background(0,0,0); 
  if(f.x-m.x<f.width/2+m.width/2
    &&m.x-f.x<f.width/2+m.width/2) {
      m.velocityX = m.velocityX*(-1);
      f.velocityX = f.velocityX*(-1);
    }
    if(f.y-m.y<f.width/2+m.width/2
      &&m.y-f.y<f.width/2+m.width/2) {
        m.velocityY = m.velocityY*(-1);
        f.velocityY = f.velocityY*(-1);
      }
 /* 
 
  m.y = mouseY
  m.x = mouseX

  if(f.x-m.x<f.width/2+m.width/2 
    &&m.x-f.x<f.width/2+m.width/2
    &&f.y-m.y<f.width/2+m.width/2
    &&m.y-f.y<f.width/2+m.width/2) {
      m.shapeColor = "green";
      f.shapeColor = "green"; 
    }
    else{
      m.shapeColor = "red";
      f.shapeColor = "red";
    }
    */
  drawSprites();
}