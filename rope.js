class rope{
    constructor(bodyA,pointB){
  var options={
    bodyA : bodyA,
    pointB : pointB,
    sitfness : 1,
    length : 500
  }
  this.pointB = pointB;
  this.rope = Constraint.create(options);
  World.add(world,this.rope);
    }
 /*attach(body){
 body = this.rope.bodyA ; 
 }

 fly(){
     this.rope.bodyA = null;
 }
*/
    display(){
   var pointA = this.rope.bodyA.position;
   var pointB= this.pointB;
   line(pointA.x,pointA.y,pointB.x,pointB.y); 
    }
}