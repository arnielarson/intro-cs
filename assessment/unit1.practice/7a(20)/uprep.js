function start() {
    var canvas = document.getElementById("mainCanvas");
    canvas.onmousemove = canvasMouseMove;
}

function canvasMouseMove(event) {
    var x = event.clientX;
    var y = event.clientY;

    var canvas = document.getElementById("mainCanvas");
    var context = canvas.getContext("2d");
    context.fillStyle = "blue";
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawLine(context, x, y, 250, 250);
}

function drawLine(context, x1, y1, x2, y2) {
    context.lineWidth = 5;
    context.strokeStyle = "red";
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}