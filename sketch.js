const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup(){
    createCanvas(900,800);
    engine = Engine.create();
    world = engine.world;
    
    ground1 = new ground(450,790,width,20);
   // b1 = new box(700,680);
    b2 = new box(650,580);
    b3 = new box(650,540);
    b4 = new box(650,500);
    b5 = new box(650,480);
    b6 = new box(650,440);
    b7 = new box(650,400);
    b8 = new box(650,380);
    b9 = new box(650,340);
    b10 = new box(650,300);
    ball1 = new ball(100,400);
    rope1 = new rope(ball1.body,{x:100,y:400});
}


function draw(){
    background(180);
    Engine.update(engine);
    ground1.display();
   // b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    ball1.display();
    rope1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}
