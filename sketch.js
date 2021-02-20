
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

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

constructor (body1,body2,offsetX,offsetY)
{

	this.offsetX=offsetX
	this.offsetY=offsetY
	var options={
		bodyA:body1,
		bodyB:body2,
		pointB:{x:this.offsetX, y:this.offsetY}
	}

	//console.log(options)
	this.rope=Constraint.creat(options)
	world.add(world,this.rope)

}

rope1=new rope(bobObject1.body,roofObject.body-bobDiameter*2,0)
