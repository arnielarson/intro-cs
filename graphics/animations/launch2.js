/*
 * launch2.js -    simple example of graphics
 *
 * author - alarson@universityprep.org
 */
 

/*
 *  Define the "launch objects coordinates
*/
var x = 10;
var y = 390;
var dx = 5; 
var dy = 3;
/* 
 *  create the image, setupu canvas
 */
var img;
var canvas;
var context;


function launch() {
    x = 10;
    y = 390;
}


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
    context.drawImage(img, x, y);
    x = x + dx;
    y = y - dy;
}
