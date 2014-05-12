/*
 * launch3.js -    simple example of graphics
 * Does collission detection with the canvas boundary
 *
 * author - alarson@universityprep.org
 */
 

/*
 *  Define the launch objects coordinates
 */
var x = 10;
var y = 400;
var dx = 9; 
var dy = -6;

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
}

function drawBackground() {
    context.fillStyle = "#66FF66";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
}

function drawAnimation() {
    context.drawImage(img, x, y, 100, 100);
    x = x + dx;
    y = y + dy;
    // check if x or y is outside of the canvas!
    if (x<0) {
        dx = Math.abs(dx);
    } else if (x> (canvas.width - 100)) {
        dx = -Math.abs(dx);
    }
    if (y<0) {
        dy = Math.abs(dy);
    } else if (y > (canvas.height - 100)) {
        dy = -Math.abs(dy);
    }
}
