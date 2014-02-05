function drawSomething(context) {

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
