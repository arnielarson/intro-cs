var basketballBottom = 50;
var floorTop = 450;

function drawBasketball(context) {
    var canvas = context.canvas;
    var image = document.getElementById("basketball");
    var size = 100;
    context.drawImage(image, 250, basketballBottom - size, size, size);
}

function drawBackground(context) {
    var canvas = context.canvas;
    context.fillStyle = "gray";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawFloor(context) {
    var canvas = context.canvas;
    context.fillStyle = "darkgray";
    context.fillRect(0, floorTop, canvas.width, 50);
}

function drawFrame() {
    var canvas = document.getElementById("mainCanvas");
    var context = canvas.getContext("2d");
    drawBackground(context);
    drawFloor(context);
    drawBasketball(context);
}

function start() {
    setInterval(drawFrame, 30);
}