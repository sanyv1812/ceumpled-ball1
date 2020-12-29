class Dustbin {

    constructor(x, y, width, height){
        var options = {
            'isStatic': true
        }


        this.body1 = Bodies.rectangle(x, y, width, height, options);
        World.add (world, this.body1);
        this.body2 = Boadies.rectangle((x-(width/2)), (y-(height*2)), height, options);
        World.add (world, this.body2);
        this.body3 = Boadies.rectangle((x+(width/2)), (y-(height*2)), height, options);
        World.add (world, this.body3);
        this.body1.width = width;
        this.body1.height = height;



    }
    display(){
        
        fill(255);
        rect(this.body1.position.x, this.body1.positon.y, this.body1.width, this.body1.height);
        rect((this.body1.position.x-(this.body1.width/2)), (this.body1.position.y-(this.body1.height*2)));
        rect((this.body1.position.x+(this.body1.width/2)), (this.body1.position.y-(this.body1.height*2)));
      }
}