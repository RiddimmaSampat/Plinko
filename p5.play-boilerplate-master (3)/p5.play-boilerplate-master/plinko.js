class plinko {
    constructor(x,y,r){
        var options = {
        isStatic:true
        }
this.body=Bodies.circle(x,y,r,options);

this.r=Radius;

World.add(world, this.body);

    }

    display () {
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill('white');
        ellipse(pos.x, pos.y, this.w, this.h);
    }
};