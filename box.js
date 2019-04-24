

function Box(x,y,w,h,isStatic){
  this.x=x;
  this.y=y;
  this.w=w;
  this.h=h;
  this.isStatic=isStatic;
  var options={
    isStatic:isStatic
  }

  this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
  World.add(world,this.body);
}

Box.prototype.show=function(){
  var pos=this.body.position;
  if(this.isStatic){
    push();
    fill(255);
    translate(pos.x,pos.y);
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
  }else{
    push();
    //fill(255);
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(domuz,0,0,this.w,this.h);
    pop();
  }

}
