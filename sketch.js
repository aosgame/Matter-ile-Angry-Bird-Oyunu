
var Engine=Matter.Engine;
var World=Matter.World;
var Bodies=Matter.Bodies;

var Mouse=Matter.Mouse;
var MouseConstraint=Matter.MouseConstraint;

var Constraint=Matter.Constraint;

var engine;
var world;

var mConstraint;

var ground;
var box;
var bird;
var boxes=[];

var slingshot;

var kus;
var domuz;

function preload(){
  kus=loadImage('kus.png');
  domuz=loadImage('domuz.png');
}

function setup(){
  var canvas=createCanvas(600,400);

  engine=Engine.create();
  world=engine.world;

  ground=new Box(width/2,height-10,width,20,true);
  for (var i = 0; i < 3; i++) {
    boxes.push(new Box(450,300-i*75,50,75,false));
  }


  bird=new Bird(50,300,15);

  slingshot=new Slingshot(150,300,bird.body);

  var mouse=Mouse.create(canvas.elt);
  var options={
    mouse:mouse
  };

  mConstraint=MouseConstraint.create(engine,options);
  World.add(world,mConstraint);

  Engine.run(engine);

}

function keyPressed(){
  if(key==' '){
    World.remove(world,bird.body);
    bird=new Bird(150,300,15);
    slingshot.attach(bird.body);
  }
}

function mouseReleased(){
  setTimeout(()=>{
    slingshot.fly();
  },100);

}

function draw(){
  background(0);
  ground.show();
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  bird.show();

  slingshot.show();


}
