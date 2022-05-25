
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,leftSide,rightSide,bottomSide;	
var world;
var ball;
var radius=70;

function preload(){
	dustbinImage=loadImage("dustbingreen.png");
paperImage=loadImage("paper.png");


}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	
ball=Bodies.circle(310,100,radius/2.6,ball_options);
World.add(world,ball);

	groundObject=new ground(width/2,670,width,20);
	leftSide=new ground(1100,600,10,120);
	rightSide=new ground(1270,600,10,120);
	bottomSide=new ground(1190,650,150,20)
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  leftSide.display();
  rightSide.display();
  bottomSide.display();
imageMode(CENTER);
image(paperImage,ball.position.x,ball.position.y,radius,radius);
image(dustbinImage,1185,570,200,200);
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:130,y:-145});
	}
}
