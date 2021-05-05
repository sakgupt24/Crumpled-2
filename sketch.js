
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

	paper=new Paper(50,500,70) 
	ground=new Ground(400,680,800,20)
	dustbinL = new Dustbin(550,630,20,100)
	dustbinR = new Dustbin(750,630,20,100)
	dustbinB = new Dustbin(650,670,180,20)
	dustbinImg = new Dustbin()


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("purple");
  text (mouseX + "," + mouseY, mouseX,mouseY)

  paper.display()
  ground.display()
 
  dustbinImg.showImage()
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:120,y:-120})
	}
}



