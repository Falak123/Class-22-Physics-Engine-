const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   
   var groundOptions = {

    isStatic: true

   }

    ground = Bodies.rectangle(200,390,400,20,groundOptions);
    World.add(world,ground);

    var ballOptions = {

      restitution: 0.5


    }

    ball = Bodies.circle(100,50,20,ballOptions);
    World.add(world,ball);
    console.log(ball);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("red");
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);

    
}





