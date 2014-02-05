var x = 0;
var y = 0;

function drawFrame() {
    var canvas = document.getElementById("mainCanvas");
    var context = canvas.getContext("2d");
    context.fillStyle = "blue";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "red";
    context.fillRect(x, y, 100, 100);
}

function start() {
    var framesPerSecond = 30;
    setInterval(drawFrame, 1000 / framesPerSecond);
}