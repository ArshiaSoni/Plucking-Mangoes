
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	tree_img = loadImage("tree.png");
	boy_image = loadImage("boy.png");
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, 670, 1200, 30);
	stone = new Stone(110, 460, 50, 50);
	mango1 = new Mango(880, 150, 50, 55);
	mango2 = new Mango(850, 200, 55, 60	);
	mango3 = new Mango(930, 260, 55, 55	);
	mango4 = new Mango(780, 200, 60, 65	);
	mango5 = new Mango(970, 170, 55, 55	);
	mango6 = new Mango(1050, 190, 40, 45	);
	mango7 = new Mango(950, 90, 55, 55	);
	mango8 = new Mango(1020, 300, 55, 70	);
	mango9 = new Mango(800, 320, 55, 55	);
	elastic = new Elastic({x: 280, y: 450}, stone.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  image (boy_image, 240, 330, 200, 450);
  image (tree_img, 700, 45, 450	, 650);
  ground.display();
  stone.display();
  elastic.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display(); 

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	elastic.fly();
}

function detectCollision(stoneObject, mangoObject){
	var stonePos = stoneObject.body.position;
	var mangoPos = mangoObject.body.position;
   
	var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
	//console.log(distance);
   
	if(distance <= stoneObject.width + mangoObject.width){
		Matter.Body.setStatic(mangoObject.body, false);
	}
   }

   function keyPressed(){
	if(keyCode == 32){
		elastic.attach(stone.body);
	}
}



