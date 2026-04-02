// game loop

var canvas;
var context;
var player;
var timer;
var interval = 1000/60; /// milliseconds / intended frame rate

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new Player();

/// here, declare the player's x and y velocities:
    player.vx = 2; // horizontal movement
    player.vy = 0; // vertical movement

/// regulate the frame timing
    timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0,0,canvas.width, canvas.height);
    player.move();

    //// Loop the object to appear opposite side of the screen.
    if (player.x > canvas.width+player.width/2)
    {
        player.x= -player.width/2
    }

    player.draw();  
}
