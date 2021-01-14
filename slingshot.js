class Slingshot{

    constructor(a, b, xOffset, yOffset){

        var options ={
            bodyA: a 
            ,bodyB: b
            ,pointB: {x: xOffset, y: yOffset
            ,stiffness: 4}
        }
        this.rope = Constraint.create(options)
        World.add(world,this.rope);
    }

    attach(body){
        this.rope.bodyA = body;
    }
    
    fly(){
        this.rope.bodyA = null;
    }

    display(){
        stroke("blue")
        strokeWeight(4)
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        
        line(pointA.x,pointA.y-25,pointB.x+this.rope.pointB.x,pointB.y)
    }
}