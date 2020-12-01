class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
       this.image1=loadImage("sprites/sling1.png")
       this.image2=loadImage("sprites/sling2.png")
       this.image3=loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           
            strokeWeight(10);
            stroke(48,22,8)
            if(pointA.x<220){
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y+10);
            line(pointA.x-25, pointA.y,pointB.x+20,pointB.y+20)
            image(this.image3, pointA.x-25,pointA.y-10,10,30)
        }
        else{
            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y+10);
            line(pointA.x+25, pointA.y,pointB.x+20,pointB.y+20)
            image(this.image3, pointA.x+25,pointA.y-10,10,30)
        }
    }
        image(this.image1,200,70,38,150)
        image(this.image2,170,65,42,100)
        // image(this.image3,200,70,38,150)

    }
    
}