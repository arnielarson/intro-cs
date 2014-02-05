var bubble1 = {
    x: 50,
    y: 50,
    dx: 1,
    dy: 2,
    radius: 10
};

var bubble2 = {
    x: 90,
    y: 90,
    dx: 7,
    dy: 2,
    radius: 30
};

var bubbles = [
    bubble1,
    bubble2
];

function drawBackground(context) {
    context.fillStyle = "#74d0ff";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = "black";
    var numberOfBubbles = bubbles.length.toString() + " bubbles";
    context.fillText(numberOfBubbles, 0, 10);
}

function drawBubble(context, bubble) {
    var gradient = context.createRadialGradient(bubble.x, bubble.y, 0,
        bubble.x, bubble.y, bubble.radius);
    gradient.addColorStop(0, "#74d0ff");
    gradient.addColorStop(0.4, "#74d0ff");
    gradient.addColorStop(1, "white");
    context.fillStyle = gradient;
    context.beginPath();
    context.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
    context.fill();
}

function drawBubbles(context) {
    var i;
    var bubble;
    for (i = 0; i < bubbles.length; i = i + 1) {
        bubble = bubbles[i];
        drawBubble(context, bubble);
    }
}

function drawSomething(context) {
    drawBackground(context);
    drawBubbles(context);
}

function drawFrame() {
    var canvas = document.getElementById("mainCanvas");
    var context = canvas.getContext("2d");
    drawSomething(context);
}

function start() {
    var framesPerSecond = 30;
    setInterval(drawFrame, 1000 / framesPerSecond);
}
