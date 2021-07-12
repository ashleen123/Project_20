const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var astronaut, sleepingImg, gymImg, bathImg, movingImg, eatImg, drinkImg, iss,issImg

function preoad() {
  engine = Engine.create();
  world = engine.world;
  sleepingImg = loadImage("sleep.png");
  issImg = loadImage("iss.png");
  gymImg = loadAnimation("gym1.png","gym2.png");
  eatImg = loadAnimation("eat1.png","eat2.png");
  bathImg = loadAnimation("bath1.png","bath2.png");
}


function setup() {
  createCanvas(800,400);
  
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addImage(sleepingImg);

  //iss = createSprite(400, 200, 50, 50);
  //iss.addImage(issImg);
  
}


function draw() 
{
  background("pink");
  Engine.update(engine);
  

  drawSprites()
  
}