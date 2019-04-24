

function Bird(x,y,r){
  this.x=x;
  this.y=y;
  this.r=r;

  this.body=Bodies.circle(this.x,this.y,this.r);
  World.add(world,this.body);

}

Bird.prototype.show=function(){
  var pos=this.body.position;
  push();
  translate(pos.x,pos.y);
  fill(255);
  imageMode(CENTER);
  image(kus,0,0,this.r*2);
  pop();
}
