// player file

function Player()
    {
    // set up player's starting location
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    
    // set up player dimensions
    this.width = 100;
    this.height = 100;

    // set player color
    this.color = "#ff0000";

    // draw this object
    this.draw = function()
        {
        context.save();
        context.fillStyle = this.color;
        context.translate(this.x,this.y);
        context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
        context.restore();
        }
    }