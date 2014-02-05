function start() {
    var canvas = document.getElementById("mainCanvas");
    var context = canvas.getContext("2d");
    
}

function drawHappy(context) {
    var canvas = context.canvas;
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var radius = Math.max(20,  Math.random() * Math.min(canvas.width, canvas.height) / 10);
    
    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.closePath();
    context.fill();
    context.lineStyle = "black;"
    context.lineWidth = 2;
    context.stroke();
    
    context.fillStyle = "black";    
    context.beginPath();
    context.arc(x - radius / 2, y - radius / 2, radius / 6, 0, Math.PI * 2);
    context.closePath();
    context.fill();
    
    context.beginPath();
    context.arc(x + radius / 2, y - radius / 2, radius / 6, 0, Math.PI * 2);
    context.closePath();
    context.fill();
    
    context.beginPath();
    context.arc(x, y, radius / 2, 0, Math.PI);
    context.closePath();
    context.fill();    
}