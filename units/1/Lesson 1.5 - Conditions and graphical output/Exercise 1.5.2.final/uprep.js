var x = 1;

function drawSomething(context) {
    var canvas = context.canvas;
    context.fillStyle = "skyblue";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = "green";
    context.beginPath();
    context.arc(x, 50, 50, 0, Math.PI * 2);
    context.fill();
}

function changeSomething() {
    x = x + 10;
}

function drawFrame() {
    var canvas = document.getElementById("mainCanvas");
    var context = canvas.getContext("2d");
    changeSomething();
    drawSomething(context);
}

function start() {
    var framesPerSecond = 48;
    setInterval(drawFrame, 1000 / framesPerSecond);
}