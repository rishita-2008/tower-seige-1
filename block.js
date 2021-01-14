class Block{
    constructor(x,y){
        var options={
            isStatic: false
        }
        this.body=Matter.Bodies.rectangle(x,y,25,35,options)
        World.add(world,this.body)
        
    }

    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,25,35)
    }
}
