class circ {
    constructor(x, y, radius) {
      var options = {
          restitution:0.6
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.width = radius*2;
      this.height = radius*2;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(RADIUS);
      fill("white");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  }