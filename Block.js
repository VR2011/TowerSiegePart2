class Block{
  constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0.8,
        'friction': 1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, angle, options);
    this.width = width;
    this.height = height;
    this.smokeImage = loadImage("smoke.png");
    this.trajectory =[];
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 10){
    var angle = this.body.angle;
    //push();
    rotate(angle);
    rectMode(CENTER);
    fill("orange");
    rect(this.body.position.x, this.body.position.y);
    }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity -= 5;
       tint(255,this.Visiblity);
       pop();
     }
    //pop();
  }
  
  };
  