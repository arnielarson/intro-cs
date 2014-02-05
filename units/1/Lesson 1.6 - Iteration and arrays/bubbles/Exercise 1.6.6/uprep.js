var bubbles = [];

function addBubble(canvas) {
    var radius = randomBetween(10, 20);
    var bubble = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: radius,
        dx: 0,
        dy: 0
    };
    bubbles.push(bubble);
}


function findRunawayBubble(canvas) {
    var foundAt;
    for (var i = 0; i < bubbles.length; i++) {
        var bubble = bubbles[i];
        if (isBubbleRunningAway(bubble, canvas)) {
            foundAt = i;
            break;
        }
    }
    return foundAt;
}

function removeRunawayBubble(canvas) {
    var index = findRunawayBubble(canvas);
    if (index != undefined) {
        removeBubble(index);
        addBubble(canvas);
    }
}

function isBubbleRunningAway(bubble, canvas) {
    if (bubble.x < 0 || bubble.x >= canvas.width ||
        bubble.y < 0 || bubble.y >= canvas.height) {
        return true;
    }
    
    return false;
}

function removeBubble(index) {
    bubbles.splice(index, 1);
}

function randomBetween(low, high) {
    var range = high - low + 1;
    var delta = Math.floor(Math.random() * range);
    return low + delta;
}

function moveBubble(bubble) {
    bubble.dx = bubble.dx + randomBetween(-1, 1);
    bubble.dy = bubble.dy + randomBetween(-1, 1);
    bubble.x = bubble.x + bubble.dx;
    bubble.y = bubble.y + bubble.dy;
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

function drawBackground(context) {
    context.fillStyle = "#74d0ff";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    var numberOfBubbles = bubbles.length;
    context.fillStyle = "black";
    context.fillText(numberOfBubbles.toString() + " bubbles", 0, 10);
}

function drawBubbles(context) {
    for (var i = 0; i < bubbles.length; i++) {
        var bubble = bubbles[i];
        drawBubble(context, bubble);
    }
}

function drawSomething(context) {
    drawBackground(context);
    drawBubbles(context);
}

function moveBubbles() {
    for (var i = 0; i < bubbles.length; i++) {
        var bubble = bubbles[i];
        moveBubble(bubble);
    }
}

function changeSomething(canvas) {
    moveBubbles();
    removeRunawayBubble(canvas);        
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
    var canvas = document.getElementById("mainCanvas");
    for (var i = 0; i < 10; i++) {
        addBubble(canvas);
    }    
}
