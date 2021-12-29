class Paper
{
	constructor(x,y,w,h){
    this.image = loadImage("paper.png")
	
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.circle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(128,128,128)
			ellipse(0,0,this.w, this.h);
			pop()
			
	}

}