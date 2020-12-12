class Paper{
    constructor(x,y,r){

        var options = {
            isStatic:false,
            restitutions:0.3,
            friction:0.5,
            density:1.2
        }

        this.x=x;
		this.y=y;
		this.r=r;
		this.body= Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

    }
    display(){
        var paperpos = this.body.position;
       // paperpos = this.position;
        push();
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        fill("red");
        stroke("red");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}