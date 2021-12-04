//namespacing/nickname
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine;
var myWorld;

var ground;

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  btn1 = createImg("right.png");
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hforce)

  btn2 = createImg("up.png");
  btn2.position(25, 30);
  btn2.size(50,50);
  btn2.mouseClicked(vforce)

  ground = new Ground(200, 390, 400, 20);
  right = new Ground(390, 200, 20, 400);
  left = new Ground(10, 200, 20, 400);
  top_wall = new Ground(200, 10, 400, 20);

  ball = new Ball(200, 100, 20)
}

function draw() 
{
  background(51);
  Engine.update(myEngine);
  ground.show();
  right.show();
  left.show();
  top_wall.show();
  ball.show()
}

function hforce(){
  //applyforce(body,{initial position},{x:,y:})
  Matter.Body.applyForce(ball.body,{x:0, y:0}, {x:0.05 , y:0} )

}

function vforce(){
  Matter.Body.applyForce(ball.body,{x:0, y:0}, {x:0 , y:0.05} )

}
