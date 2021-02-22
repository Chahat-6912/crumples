
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	wallS = createSprite(710,610,10,70)
	wallS.shapeColor=color("red")
		wall1S = createSprite(590,610,10,70)
		wall1S.shapeColor=color("red")
		wall3S = createSprite(650, 640, 130, 10)
		wall3S.shapeColor=color("red")
		dust = createSprite(650, 600, 20, 20)
		dust.addImage(dustImage)
		dust.scale = 0.5

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall = Bodies.rectangle(750, 610, 10, 70 , {isStatic:true} );
	World.add(world, wall);
	
	wall1 = Bodies.rectangle(550, 610, 10, 70 , {isStatic:true} );
	World.add(world, wall1);
	
	wall3 = Bodies.rectangle(650, 640, 210, 10 , {isStatic:true} );
	World.add(world, wall3);

Paper1 = new paper(40,600,50)

Ground1 = new Ground(400, 650, 800, 20)

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Paper1.display();
  Ground1.display();
  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){
	
		Matter.Body.applyForce(Paper1.body, Paper1.body.position, {x:105,y:-85});
	}
	
	}


