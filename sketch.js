
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	side1 = new Dustbin(750, 600, 20, 100);
	side2 = new Dustbin(600, 600, 20, 100,);
	bottom = new Dustbin(675, 630, 100, 20);

	ground = new ground(700, 650, 900, 800)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  side1.display();
  side2.display();
  bottom.display();
  
  drawSprites();
}



