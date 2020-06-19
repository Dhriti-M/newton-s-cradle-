class Bob {
    constructor(x, y,radius) {
      var options = {
          //isStatic:true,
          'restitution':1.3,
          'friction':1.9,
          'density':5,
         // 'mass':3
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.radius = radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      
       fill("pink");
       ellipseMode(RADIUS);
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  };