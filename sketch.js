const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;

var ball;
var ground1;
var b;
var b2;
var b3;
function setup(){
     createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    b= new B(815,375,20,250);
    b2= new B(900,400,150,20);
    b3= new B(975,375,20,250);
    ball= new Ball(200,300,30);
    ground1=new Ground(600,400,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
  
    ball.display();
    ground1.display();
    b.display();
    b2.display();
    b3.display();
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
    }
}