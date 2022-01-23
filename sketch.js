
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine
let world
var ball
var ground, Left, Right
/*function preload()
{
	
}
*/
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(width/2,670,width,20)
	Left = new Ground(width - width/4,600,20,120)
	Right = new Ground((width - width/4)+100,600,20,120)
	
	var balloptions = {
		isStatic:false,
		restitution:0.8,
		friction:0,
		density:1.2
	}
	ball = Matter.Bodies.circle(width/4,height/2,20,balloptions)
  	World.add(world, ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.show()
  Left.show()
  Right.show()
  ellipse(ball.position.x, ball.position.y, 20)
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:42.275,y:-75})
	}
}
