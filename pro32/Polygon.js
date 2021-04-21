class Polygon {
  constructor(x, y, radius) {
    var options = {
      isStatic: false,
      restitution: 0.3,
      friction: 0.3,
      density: 1.2
    };
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.image = loadImage("polygon (1).png")
    this.body = Bodies.circle(this.x,this.y,this.radius, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    //translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 40, 40);
    pop();
  }
}
