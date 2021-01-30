class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
    }
    display() {
      this.body.position.x = mouseX
      this.body.position.y = mouseY
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke ("purple")
      fill("purple");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }

