class trash{

    constructor(x, y, width,height){
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width,height, options);
       this.width = width;
       this.height = height;
        
        World.add(world, this.body);
    }
    display (){
    ellipse(this.body.position.x,this.body.position.y,this.body,this.height)
    
    
    }
    
    
    }
