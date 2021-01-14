class Base{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.body=Matter.Bodies.rectangle(x,y,200,20,options)
        World.add(world,this.body)
    }

    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,200,20)
    }
}
