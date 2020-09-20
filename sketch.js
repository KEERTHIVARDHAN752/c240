
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground ,box

function setup() {
	createCanvas(800, 700);
box=createSprite(590,650,120,60);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box = new trash(400,320,70,60);
	ball = new Paper(200,320,50,50);
	ground = new Ground(600,height,1300,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ball.display();
 ground.display();
 box.display();
}

function keyPressed(){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

}
}

