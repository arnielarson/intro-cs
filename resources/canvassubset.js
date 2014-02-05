function fillRect(context) {    
    context.fillStyle = "red";
    context.fillRect(10, 10, 50, 50);
}

function strokeRect(context) {    
    context.strokeStyle = "blue";    
    context.strokeRect(10, 10, 50, 50);
}

function fillAndStrokeRect(context) {    
    context.fillStyle = "red";
    context.strokeStyle = "blue";    
    context.fillRect(10, 10, 50, 50);    
    context.strokeRect(10, 10, 50, 50);
}

function fillCanvas(context) {
    var canvas = context.canvas;
    context.fillStyle = "red";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function fillArc(context) {    
    context.fillStyle = "red";
    context.beginPath();
    context.arc(40, 40, 30, 0, Math.PI);
    context.fill();
}

function strokeArc(context) {    
    context.strokeStyle = "blue";
    context.beginPath();
    context.arc(40, 40, 30, 0, Math.PI);
    context.stroke();
}

function fillAndStrokeArc(context) {    
    context.fillStyle = "red";
    context.strokeStyle = "blue";
    context.beginPath();
    context.arc(40, 40, 30, 0, Math.PI);
    context.fill();
    context.stroke();
}

function fillCircle(context) {    
    context.fillStyle = "red";
    context.beginPath();
    context.arc(40, 40, 30, 0, Math.PI * 2);
    context.fill();
}

function strokeCircle(context) {    
    context.strokeStyle = "blue";
    context.beginPath();
    context.arc(40, 40, 30, 0, Math.PI * 2);
    context.stroke();
}

function fillAndStrokeCircle(context) {    
    context.fillStyle = "red";
    context.strokeStyle = "blue";
    context.beginPath();
    context.arc(40, 40, 30, 0, Math.PI * 2);
    context.fill();
    context.stroke();
}

function line(context) {    
    context.strokeStyle = "blue";
    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(60, 60);
    context.stroke();
}

function polyLine(context) {    
    context.strokeStyle = "blue";
    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(60, 60);
    context.lineTo(10, 60);
    context.stroke();
}

function fillTriangle(context) {    
    context.fillStyle = "red";
    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(60, 60);
    context.lineTo(10, 60);
    context.closePath();
    context.fill();
}

function strokeTriangle(context) {    
    context.strokeStyle = "blue";
    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(60, 60);
    context.lineTo(10, 60);
    context.closePath();
    context.stroke();
}

function fillAndStrokeTriangle(context) {    
    context.fillStyle = "red";
    context.strokeStyle = "blue";
    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(60, 60);
    context.lineTo(10, 60);
    context.closePath();
    context.fill();
    context.stroke();
}

function strokeText(context) {    
    context.strokeStyle = "blue";
    context.font = "20pt Arial";
    context.strokeText("hello", 10, 50);
}

function fillText(context) {    
    context.fillStyle = "red";
    context.font = "20pt Arial";
    context.fillText("hello", 10, 50);
}

function fillTextLeft(context) {    
    context.fillStyle = "red";
    context.textAlign = "left";
    context.font = "20pt Arial";
    context.fillText("hello", 70, 50);
}

function fillTextCenter(context) {    
    context.fillStyle = "red";
    context.textAlign = "center";
    context.font = "20pt Arial";
    context.fillText("hello", 70, 50);
}

function fillTextRight(context) {    
    context.fillStyle = "red";
    context.textAlign = "right";
    context.font = "20pt Arial";
    context.fillText("hello", 70, 50);
}

function drawImage(context) {
    var image = document.getElementById("smiley");
    context.drawImage(image, 10, 10);
}

function drawImageStretched(context) {
    var image = document.getElementById("smiley");
    context.drawImage(image, 10, 10, image.width * 4, image.height * 2);
}

function drawCanvas(name, width, height, fn) {
    var canvas = document.getElementById(name)
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext("2d");
    fn(context);
}

function onload() {
    drawCanvas("_strokeRect", 70, 70, strokeRect);
    drawCanvas("_fillRect", 70, 70, fillRect);
    drawCanvas("_fillAndStrokeRect", 70, 70, fillAndStrokeRect);
    drawCanvas("_fillCanvas", 70, 70, fillCanvas);
    
    drawCanvas("_fillArc", 80, 80, fillArc);
    drawCanvas("_strokeArc", 80, 80, strokeArc);
    drawCanvas("_fillAndStrokeArc", 80, 80, fillAndStrokeArc);
    
    
    drawCanvas("_fillCircle", 80, 80, fillCircle);
    drawCanvas("_strokeCircle", 80, 80, strokeCircle);
    drawCanvas("_fillAndStrokeCircle", 80, 80, fillAndStrokeCircle);
    
    drawCanvas("_line", 70, 70, line);
    drawCanvas("_polyLine", 70, 70, polyLine);
    
    drawCanvas("_fillTriangle", 70, 70, fillTriangle);    
    drawCanvas("_strokeTriangle", 70, 70, strokeTriangle);    
    drawCanvas("_fillAndStrokeTriangle", 70, 70, fillAndStrokeTriangle);
    
    drawCanvas("_strokeText", 70, 70, strokeText);
    drawCanvas("_fillText", 70, 70, fillText);
    
    drawCanvas("_fillTextLeft", 140, 70, fillTextLeft);
    drawCanvas("_fillTextCenter", 140, 70, fillTextCenter);
    drawCanvas("_fillTextRight", 140, 70, fillTextRight);
    
    drawCanvas("_drawImage", 70, 70, drawImage);
    drawCanvas("_drawImageStretched", 140, 70, drawImageStretched);
    
}