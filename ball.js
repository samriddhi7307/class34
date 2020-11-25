class ball{
    constructor(x,y){
  var op={
      'density':1,
      'friction':1
  }
  this.body = Bodies.circle(x,y,60,op);
  this.r = 60;
  World.add(world,this.body);
    }

    display(){
        ellipseMode(RADIUS);
        fill("white");
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    }
}