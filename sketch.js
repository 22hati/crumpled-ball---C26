
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	ret1 = new Box(700, 645, 100, 20);
	ret2 = new Box(650, 590, 20, 125);
	ret3 = new Box(750, 590, 20, 125);
	ret4 = new Bax(700, 590, 100, 125);
	circ1 = new circ(50, 500, 30);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  Engine.update(engine);

  ret4.display();
  circ1.display();

  if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(circ1.body, circ1.body.position,{x:85,y:-85});
  }
  
  drawSprites();
 
}