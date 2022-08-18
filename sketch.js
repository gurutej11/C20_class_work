//NameSpacing
const Engine = Matter.Engine; //space
const World = Matter.World; //Planets
const Bodies = Matter.Bodies; //Objects
const Body = Matter.Body;

var engine;
var world;
var ground;
var top_wall;
var ball;
var rock;
function setup(){
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var ground_options = {
    isStatic: true  
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options); //matter module
  World.add(world, ground);

  top_wall = Bodies.rectangle(200, 10, 400, 20,ground_options);
  World.add(world, top_wall);

  var ball_options = {
    restitution: 1,
    frictionAir:0.01
  }

  ball = Bodies.circle(200,70,15,ball_options); 
  World.add(world, ball);
  
  var rock_options = {
    restitution: 0.5,
    frictionAir:0.01
  }
  rock = Bodies.circle(200,90,20,rock_options);
  World.add(world, rock);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);

  Engine.update(engine);
 
  //p5 module corresponding shape
  push(); //use to capture new settings
  fill("brown");
  rect(ground.position.x, ground.position.y, 400,20);
  pop(); //revert back to the previous state

  push();
  fill("blue");
  rect(top_wall.position.x, top_wall.position.y, 400,20);
  pop();

  ellipse(ball.position.x, ball.position.y, 15,15);
  ellipse(rock.position.x, rock.position.y, 20,20);
}

