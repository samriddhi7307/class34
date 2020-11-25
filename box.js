class box{
    constructor(x,y){
  var op={
      'restitution' : 0.8,
      'friction' : 1,
      'density' : 0.4 
  }
  this.body = Bodies.rectangle(x,y,60,60,op);
  this.width = 60;
  this.height = 60;
  World.add(world,this.body);
    }

    display(){
        push(); 
        var angle = this.body.angle;
        rotate(angle);
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        fill("yellow");
        strokeWeight(2);
        stroke("black");
        rect(0,0,this.width,this.height);
        pop(); 
    }
}