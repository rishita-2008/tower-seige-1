class Polygon{
    constructor(x,y){
        this.body= Bodies.rectangle(x,y,50,50,{isStatic: false})
        World.add(world,this.body)
        poly=loadImage("polygon.png")
    }

    display(){
        imageMode(CENTER)
        image(poly,this.body.position.x,this.body.position.y,50,50)
    }
}