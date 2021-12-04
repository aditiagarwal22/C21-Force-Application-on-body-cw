class Ball{
    //properties
    //refer to the object as the keyword "this"
    constructor(x,y,r){
        var options = {
            restitution: 0.95
        }

        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(myWorld, this.body)
    }

    //functions
    show(){
        //namespacing
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("cyan");
        ellipse(pos.x,pos.y,this.r,this.r)
    }
}