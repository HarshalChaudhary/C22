const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies;
   var engine,world; 
   function setup()
    { createCanvas(400,400);
     //createSprite(400, 200, 50, 50);
      engine = Engine.create();
       world=engine.world;
        var option = { isStatic:true }
         object= Bodies.rectangle(200,390,400,20,option);
          World.add(world,object);

 var options = { restitution:0.4 }
 ball= Bodies.circle(200,100,50,options);
World.add(world,ball);
         } 
         
function draw() { 
background("pink");
Engine.update(engine);
//console.log(object)
rectMode(CENTER)
rect(object.position.x,object.position.y,400,20);
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20);
drawSprites(); }




