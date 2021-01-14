const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world
var string,p;
 
var poly,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21;
var base1, base2;  

function preload(){
    
}

function setup(){
    createCanvas(1200,800)
    engine = Engine.create();
    world = engine.world;
    base1=new Base(198,600)
    base2= new Base(800,450)
    b1= new Block(110,565)
    b2= new Block(135,565)
    b3= new Block(160,565)
    b4= new Block(185,565)
    b5= new Block(210,565)
    b6= new Block(235,565)
    b7= new Block(260,565)
    b8= new Block(285,565)
    b9= new Block(120,535)
    b10= new Block(145,535)
    b11= new Block(170,535)
    b12= new Block(195,535)
    b13= new Block(220,535)
    b14= new Block(245,535)
    b15= new Block(270,535)
    b16= new Block(135,505)
    b17= new Block(160,505)
    b18= new Block(185,505)
    b19= new Block(210,505)
    b20= new Block(235,505)
    b21= new Block(260,505)
    p= new Polygon(800,450)
    string= new Slingshot(p.body,base2.body,-50,0)

    
}

function draw(){
    background(0)
    Engine.update(engine)

    base1.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();   
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    string.display();
    p.display();

    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(p.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string.fly();
}
