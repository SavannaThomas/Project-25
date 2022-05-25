class Paper
{
  constructor(x,y,r){
      var options={
          isStatic:false,
          restituion:03,
          friction:0,
          density:1.2
      }
      this.r=r
      this.image=loadImage("paper.png");
      this.body=Bodies.circle(x,y,r,options);
      World.add(world,this.body);
  }
}