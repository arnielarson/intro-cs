var x = 450;
var dx = 7;
var y = 450;
var dy = 3;
var dark = true;
var tarLeft = 100;
var tarRight = 200;
var tarTop = 300;
var tarBottom = 400;
var slowdown = 0.90;
var speedup = 1.01;

function drawSomething(context) {
    var canvas = context.canvas;
    context.fillStyle = "skyblue";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = "black";
    context.fillRect(tarLeft, tarTop, tarRight - tarLeft, tarBottom - tarTop);
    
    if (dark) {
        context.fillStyle = "green";
    } else {
        context.fillStyle = "white";
    }
        
    context.beginPath();
    context.arc(x, y, 50, 0, Math.PI * 2);
    context.fill();
}

function inTarPit(x, y) {
    var pastLeft = x >= tarLeft;
    var beforeRight = x < tarRight;
    var belowTop = y >= tarTop;
    var aboveBottom = y < tarBottom;
    var inTar = pastLeft && beforeRight && belowTop && aboveBottom;
    return inTar;    
}

function changeSomething(canvas) {
    dark = !dark;
           
    x = x + dx;
    var reachedRightEdge = x >= canvas.width;
    var reachedLeftEdge = x < 0;
    if (reachedRightEdge || reachedLeftEdge) {
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
    
    if (inTarPit(x, y)) {
        dx = dx * slowdown;
        dy = dy * slowdown;
    } else {
        dx = dx * speedup;
        dy = dy * speedup;
    }
}

function drawFrame() {
    var canvas = document.getElementById("mainCanvas");
    var context = canvas.getContext("2d");
    changeSomething(canvas);
    drawSomething(context);
}

function start() {
    var framesPerSecond = 30;
    setInterval(drawFrame, 1000 / framesPerSecond);
}