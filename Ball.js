class Ball{
    constructor(x,y, color){
        var options = {
            restitution:1,
            friction:0,
            frictionAir:0.0,

        }
        this.body = Bodies.rectangle(x,y, 40,40 ,options);
        this.x = x;
        this.y = y;
        this.color=color;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.positions;
        push();
        translate(pos.x,pos.y);
        fill("pink")
        stroke("blue")
        strokeWeight(5)
        rotate(angle);
        ellipse(0,0,60,60);
        pop();
    }
}