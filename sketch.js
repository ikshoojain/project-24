// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/



var ground;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);
    ground = new Ground(600,height,1200,30)
}

function draw() {
// Remember to update the Matter Engine and set the background.

background(0);
    ground.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}