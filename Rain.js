class Rain {
    constructor() {
      this.x = random(width);
      this.y = random(-500,-50);
      this.len = random(1,20)
      this.ySpeed = random(1,5);
    }
    fall(){
        this.y = this.y + this.ySpeed;
        var grav = random(1,3);
        this.ySpeed = this.ySpeed + grav;

        if (this.y > height) {
          this.y = random(-200, -100);
           this.ySpeed = random(1,5);
      }
    };
    display(){
        var thick = random(1,3);
        strokeWeight(thick);
        stroke(138, 43, 226);
        line(this.x, this.y, this.x, this.y + this.len); 
     }
    };