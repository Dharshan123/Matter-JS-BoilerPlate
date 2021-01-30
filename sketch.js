const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var line, line1, line2;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(750,650,100,5);
	line = new Dustbin(600,630,100,10);
	line1 = new Dustbin(550,580,10,100);
	line2 = new Dustbin(650,580,10,100);
	ground = new Ground(400,650,800,10);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  console.log(paper.body.position.x);
  console.log(paper.body.position.y);
  console.log(paper.body.angle);
 paper.display()
 line.display()
 line1.display()
 line2.display()
 ground.display()

  drawSprites();
} 
