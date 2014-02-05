var footPadColor = "tan";
var backgroundColor = "#005784";
var textColor = "white";

function drawSmallFootPad(context, x, y) {
    context.arc(x, y, 50, 0, Math.PI * 2);
    context.fillStyle = footPadColor;
    context.fill();
}

function drawBackground(context) {
    var canvas = context.canvas;
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawLogo(context) {
    var image = document.getElementById("logo");
    context.drawImage(image, 10, 10, image.width / 2, image.height / 2);
}

function drawTitle(context) {
    context.font = "60pt Times";
    context.fillStyle = textColor;
    context.fillText("Go Pumas!", 175, 100);
}

function drawBigFootPad(context) {
    context.fillStyle = footPadColor;
    context.beginPath();
    context.moveTo(275, 250);
    context.lineTo(425, 400);
    context.lineTo(350, 450);
    context.lineTo(275, 425);
    context.lineTo(200, 450);
    context.lineTo(125, 400);
    context.closePath();
    context.fill();
}

function drawPuma(context) {
    drawBackground(context);
    drawSmallFootPad(context, 110, 325);
    drawSmallFootPad(context, 200, 225);
    drawSmallFootPad(context, 350, 225);
    drawSmallFootPad(context, 440, 325);
    drawBigFootPad(context);
    drawLogo(context);
    drawTitle(context);
}

function start() {
    var canvas = document.getElementById("pumas");
    var context = canvas.getContext("2d");
    drawPuma(context);
}
