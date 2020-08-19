class Mango {
    constructor(x, y, w, h){
        var options= {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }
    display(){
        
        rectMode(CENTER);
        fill ("lightblue");
        image (this.image, this.body.position.x, this.body.position.y, this.width, this.height); 
     }
}