class papel{ 
    constructor(x,y,r){
        this.image = loadImage('papel.png');

        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2	
        }
        this.x = x;
		this.y = y;
        this.r = r;
		this.body = Bodies.circle(x, y, r, options);
 		World.add(world, this.body);
    }
    display(){


        var papelPos = this.body.position;
        push()
        translate(papelPos.x, papelPos.y);
        rotate(this.body.angle);
        imageMode(RADIUS);
        image(this.image,0,0,this.r, this.r)
        pop()
    }
}