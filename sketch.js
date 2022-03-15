const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
 



  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  var options ={
    restitution:0.95
  }
  pelota = Bodies.circle(200,390,15,options);
  World.add(world,pelota);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(pelota.position.x,pelota.position.y,15)
  ground.show();
  top_wall.show();
  left.show();
  right.show();

  Engine.update(engine);
}

