var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	

	
	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	rect1=Bodies.rectangle(300,620,20,100);
	World.add(world,rect1);
	rect2=Bodies.rectangle(400,640,200,20,{isStatic:true});
	World.add(world,rect2);
	rect3=Bodies.rectangle(500,620,20,100);
	World.add(world,rect3);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  fill("red");
  rect(rect1.position.x,rect1.position.y,20,100);
  rect(rect2.position.x,rect2.position.y,200,20);
  rect(rect3.position.x,rect3.position.y,20,100);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }

  if (keyCode === LEFT_ARROW) {
	helicopterSprite.x = helicopterSprite.x - 20;
	Matter.Body.translate(packageBody, { x:-20,y:0}); 
}

if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x = helicopterSprite.x + 20;
		Matter.Body.translate(packageBody, { x:20,y:0});
}
}



