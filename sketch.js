var snow1 = []

function setup() {
  createCanvas(800,400);

//scale=1
}
function preload(){
  bg =loadImage("snow3.jpg")
  snow = loadImage("snow4.webp")
}

function draw() {
  background(bg);  
  drawSprites();
  if (frameCount%60==0){
    ICE()
  }

}
function ICE(){
 var snow1 = createSprite(random(800,0),0,500,1000)
  snow1.addImage(snow)
  snow1.scale =0.1
  snow1.velocityY = 2
}