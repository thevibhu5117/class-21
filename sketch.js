var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect1=createSprite(120,200,40,50);
rect2=createSprite(10,200,40,50);

rect1.velocityX=1;
rect2.velocityX=-1;

}

function draw() {
  background(0,0,0);  

 bounce(movingRect,fixedRect);
 bounce(rect2,rect1);
  drawSprites();
}
