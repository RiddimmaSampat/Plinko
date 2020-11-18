const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var plinko1,plinko3,ground;

function setup() {
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);

  engine=Engine.create();


  ground= new Ground(200,390,800,20);

  for(i=50; i<=width; i=i+50){
    plinko1=new plinko(i,50,10);
    plinko2=new plinko(i,100,10);
    plinko3=new plinko(i,150,10);
    plinko4=new plinko(i,200,10);
  }


}

function draw() {
  background(0,0,0);  
  drawSprites();
}