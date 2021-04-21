class Box3 {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.5,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
    if (this.body.speed < 3) {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("lightgreen");
      strokeWeight(1);
      rect(0, 0, this.width, this.height);
      pop();
    } else {
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 2;
      tint(225, (this.Visiblity = -5));
      //rect(0, 0, this.width, this.height);
      pop();
    }
  }
}
