const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

var ball1,ball2,ball3,ball4,ball5;
var s1,s2,s3,s4,s5;



//how to initialize engine???
function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;
    
    ball1 = new Ball(300,100,80,80);
    ball2 = new Ball(380,200,80,80);
    ball3= new Ball(460,300,80,80);
    ball4= new Ball(540,400,80,80);
    ball5= new Ball(620,500,80,80);
    
    s1 = new Sling(ball1.body,{x : 300, y : 50});
    s2 = new Sling(ball2.body,{x : 380, y : 50});
    s3 = new Sling(ball3.body,{x : 460, y : 50});
    s4 = new Sling(ball4.body,{x : 540, y : 50});
    s5 = new Sling(ball5.body,{x : 620, y : 50});

}
function draw(){

    background(0);
    Engine.update(engine);

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();

    sling1.display();
    s2.display();
    s3.display();
    s4.display();
    s5.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}