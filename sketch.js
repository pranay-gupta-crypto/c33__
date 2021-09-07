  const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;

var Character, CharacterImg; 
var backgroundImg;
var snowmanImg,snowman;
var engine, world; 
var snowParticle = []
function preload(){

  backgroundImg= loadImage("snow2.jpg")
  CharacterImg = loadImage("Character.png")
  snowmanImg = loadImage("Snowman.png");
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  Character = createSprite(550, 350, 50, 50);
  Character.scale = 0.5
  Character.addImage(CharacterImg);
  
  snowman = createSprite(150, 335, 50, 50);
  snowman.scale = 0.5
  snowman.addImage(snowmanImg);

}


function draw() {
  background(backgroundImg);  
  Engine.update (engine)
  if(frameCount%20 === 0){
    snowParticle.push(new Snow(random(100,700),-50,10))
  }

  for( var j = 0; j < snowParticle.length;j++){
  snowParticle[j].display()
  }
  drawSprites();
}