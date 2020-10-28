
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,100,50,50);
ground = new Ground(400,650,800,50);
ground1 = new Ground(650,600,100,30);
ground2 = new Ground(600,550,30,100);
ground3 = new Ground(700,550,30,100);

	
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  paper.display();
  ground.display();
  ground1.display();
  ground2.display();
  ground3.display();
  drawSprites();
 
}
function keyPressed() {
	 if (keyCode === UP_ARROW) {
		  Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-15});
		 } 
		}



