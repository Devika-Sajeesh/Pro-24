
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject,groundObject,dustbinObject;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(100,450,20);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObject=new dustbin(1350,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(195, 214, 254 ));

  paperObject.display();
  groundObject.display();
  dustbinObject.display();
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:25,y:-25});
  
	}
}



