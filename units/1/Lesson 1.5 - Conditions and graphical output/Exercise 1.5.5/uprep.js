var x = 450;
var dx = 7;
var y = 450;
var dy = 3;

function drawSomething(context) {
    var canvas = context.canvas;
    context.fillStyle = "skyblue";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = "green";
    context.beginPath();
    context.arc(x, y, 50, 0, Math.PI * 2);
    context.fill();
}

function changeSomething(canvas) {
    x = x + dx;
    var reachedRightEdge = x >= canvas.width;
    if (reachedRightEdge) {
        dx = -dx;
    }
    var reachedLeftEdge = x < 0;
    if (reachedLeftEdge) {
        dx = -dx;
    }    
    
    y = y + dy;
    var reachedBottomEdge = y >= canvas.height;
    if (reachedBottomEdge) {
        dy = -dy;
    }
    var reachedTopEdge = y < 0;
    if (reachedTopEdge) {
        dy = -dy;
    }   
}

function drawFrame() {
    var canvas = document.getElementById("mainCanvas");
    var context = canvas.getContext("2d");
    changeSomething(canvas);
    drawSomething(context);
}

function start() {
    var framesPerSecond = 200;
    setInterval(drawFrame, 1000 / framesPerSecond);
}