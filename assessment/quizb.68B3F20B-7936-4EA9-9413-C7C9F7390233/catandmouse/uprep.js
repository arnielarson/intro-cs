var catRight = 100;
var mouseLeft = 450;
var ground = 400;

function drawBackground(context) {
    var canvas = context.canvas;
    context.fillStyle = "darkgray";
    context.fillRect(0, 0, canvas.width, ground);
    context.fillStyle = "darkgreen";
    context.fillRect(0, ground, canvas.width, canvas.height - ground);
}

function drawCat(context) {
    var catImage = document.getElementById("cat");
    var size = 100;
    context.drawImage(catImage, catRight - size, ground - size, size, size);
}

function drawMouse(context) {
    var mouseImage = document.getElementById("mouse");
    var size = 50;
    context.drawImage(mouseImage, mouseLeft, ground - size, size, size);
}

function drawFrame() {
    var canvas = document.getElementById("mainCanvas");
    var context = canvas.getContext("2d");
    drawBackground(context);
    drawCat(context);
    drawMouse(context);
}

function start() {
    setInterval(drawFrame, 30);
}