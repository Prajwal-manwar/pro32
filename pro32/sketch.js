
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg, ground;

var bg = "bg.png";

function preload()
{
	   getTime();
}

function setup() {
	createCanvas(1300, 500);


	engine = Engine.create();
	world = engine.world;
    
    var options = {
        restitution:0.3,
        friction:1,
        density:1

    }

	//Create the Bodies Here.
    
    
 

    ground = new Ground(650, 490, 1300, 20)
	
	stand1 = new Ground(600, 400, 230, 20)
	stand2 = new Ground(960, 250, 170, 20);
    
    block1 = new Box(510, 360, 30, 40);
	block2 = new Box(540, 360, 30, 40);
	block3 = new Box(570, 360, 30, 40);
	block4 = new Box(600, 360, 30, 40);
	block5 = new Box(630, 360, 30, 40);
	block6 = new Box(660, 360, 30, 40);
	block7 = new Box(690, 360, 30, 40);
	
	block8 = new Box2(540, 320, 30, 40);
	block9 = new Box2(570, 320, 30, 40);
	block10 = new Box2(600, 320, 30, 40);
	block11 = new Box2(630, 320, 30, 40);
	block12 = new Box2(660, 320, 30, 40);

	block13 = new Box3(570, 280, 30, 40);
	block14 = new Box3(600, 280, 30, 40);
	block15 = new Box3(630, 280, 30, 40);

    block16 = new Box4(600, 240, 30, 40);
	
	
    block17 = new Box(900, 220, 30, 40);
	block18 = new Box(930, 220, 30, 40);
	block19 = new Box(960, 220, 30, 40);
	block20 = new Box(990, 220, 30, 40);
	block21 = new Box(1020, 220, 30, 40);

	block22 = new Box3(930, 180, 30, 40);
    block23 = new Box3(960, 180, 30, 40);
	block24 = new Box3(990, 180, 30, 40);
	
	block25 = new Box2(960, 140, 30, 40);
    
    polygon = new Polygon(50, 200, 20);
    
    slingShot = new Slingshot(polygon.body,{x:200, y:200})

	Engine.run(engine);
  
}


function draw() {
  if (backgroundImg) 
  background(backgroundImg);
  Engine.update(engine);
  ground.display(); 
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  polygon.display();
  slingShot.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingShot.fly();
}

async function getTime() {
  var response = await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Kolkata"
  );
  var responseJSON = await response.json();
  console.log(responseJSON);

  var dateTime = responseJSON.datetime;
  console.log(dateTime);

  var hour = dateTime.slice(11, 13);
  console.log(hour);

  if (hour >= 06 && hour <= 19) {
    bg = "bg.png";
  } else {
    bg = "bg2.jpg";
  }
  backgroundImg = loadImage(bg);
}

