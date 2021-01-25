class SlingShot{
    constructor(bodyA, pointB){
        //Physics code for slingShot
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //Loading slingShot images
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    //Fly function for slingShot
    fly(){
        //Allowing bird to detach from slingShot
        this.sling.bodyA = null;
    }

    //Attach function for slingShot
    attach(body){
        //Allowing bird to be brought back to the slingShot
        this.sling.bodyA=body;
    }

    //All display code for the slingShot
    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        //slingShot position
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            //if condition to display rubber bands, and the sling
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}