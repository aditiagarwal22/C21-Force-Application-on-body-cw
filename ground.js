class Ground{
    //properties
    //refer to the object as the keyword "this"
    constructor(x,y,w,h){
        var options = {
            isStatic: true,
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(myWorld, this.body)
    }

    //functions
    show(){
        //namespacing
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.w,this.h)
    }
}