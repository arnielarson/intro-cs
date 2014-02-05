function start() {
    var canvas = document.getElementById("mainCanvas");
    var context = canvas.getContext("2d");
    
}

function drawSplatter(context) {
    var canvas = context.canvas;
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var radius = Math.max(10,  Math.random() * Math.min(canvas.width, canvas.height) / 10);
    var color = Math.floor(Math.random() * 2);
    if (color == 0) {
        context.fillStyle = "red";
    } else {
        context.fillStyle = "blue";
    }
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.closePath();
    context.fill();
}