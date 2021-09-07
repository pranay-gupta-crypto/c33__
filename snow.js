class Snow{
constructor(x,y,r){
var options ={
restitution:0.4,
isStatic:false
}

this.body=Bodies.circle(x,y,r,options);
this.x = x
this.r = r
this.y = y

this.image = loadImage("snow4.webp")

World.add(world,this.body);


}

display(){
var pos = this.body.position
var angle = this.body.angle
push();
translate(pos.x,pos.y)
rotate(angle);
imageMode(CENTER)
image( this.image,0,0,25,25)
pop();

}
}