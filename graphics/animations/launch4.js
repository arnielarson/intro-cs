/*
 * launch4.js -    simple example of graphics
 * Shoots a projectile which falls according to "gravity"
 *
 * author - alarson@universityprep.org
 */
 

/*
 *  Define the launch objects coordinates
*/
var x = 10;
var y_initial = 200;
var y = y_initial;
var dx = 7; 
var dy_initial = -20;
var dy = dy_initial;
var gravity = 1;  // value for strength of gravity
var time = 0;     // value for time (or the frame count)
/* 
 *  create the image, setupu canvas
 */
var img;
var canvas;
var context;

function draw() {
    img = document.getElementById("bird1");
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    setInterval(drawFrame, 100);
}

function drawFrame() {
    drawBackground();
    drawAnimation();
    drawForeground();
}

function drawBackground() {
    context.fillStyle = "#66FF66";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
}
function drawForeground() {
    context.strokeStyle="blue";
    context.font= "15pt Arial";
    context.strokeText("X: "+x, 10, 30);
    context.strokeText("Y: "+y, 10, 50);
    context.strokeText("X speed: "+dx, 10, 70);
    context.strokeText("Y speed: "+dy, 10, 90);
}

function drawAnimation() {
    context.drawImage(img, x, y, 100, 100);
    time = time + 1;
    x = x + dx;
    y = y_initial + dy_initial*time + .5*gravity*Math.pow(time,2);
    dy=dy_initial + gravity*time;
    if (y > canvas.height) {
        // reset the variables:
        x = 10;
        y = y_initial;
        dy = dy_initial;
        time = 0;
    }
}
