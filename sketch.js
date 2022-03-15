const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var boton;
var boton2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
 boton = createImg("right.png");
 boton.position(300,100);
 boton.size(50,50);
 boton.mouseClicked(fuerzaH);

boton2 = createImg("up.png");
boton2.position(100,100);
boton2.size(50,50);
boton2.mouseClicked(fuerzaY);


  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  var options ={
    restitution:0.95
  }
  pelota = Bodies.circle(200,360,15,options);
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

function fuerzaH(){
Matter.Body.applyForce(
  pelota,
  {x:0,y:0},
  {x:0.05,y:0})}

  function fuerzaY(){
    Matter.Body.applyForce(
      pelota,
      {x:0,y:0},
      {x:0,y:-0.05}
    )
  }
