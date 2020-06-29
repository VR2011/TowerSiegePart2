class Polygon{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, angle, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Polygon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}