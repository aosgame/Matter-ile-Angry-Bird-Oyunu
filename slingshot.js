

function Slingshot(x,y,body){
  this.x=x;
  this.y=y;
  this.body=body;

  var options={
    pointA:{
      x:this.x,
      y:this.y
    },
    bodyB:this.body,
    stiffness:0.02,
    length:40
  };

  this.sling=Constraint.create(options);
  World.add(world,this.sling);
}

Slingshot.prototype.show=function(){
  if(this.sling.bodyB){
    stroke(255);
    var posA=this.sling.pointA;
    var posB=this.sling.bodyB.position;

    line(posA.x,posA.y,posB.x,posB.y);
  }
}


Slingshot.prototype.fly=function(){
   this.sling.bodyB=null;
}


Slingshot.prototype.attach=function(body){
   this.sling.bodyB=body;
}
