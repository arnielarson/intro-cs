var dark = false;

function drawFrame() {
    // get the canvas and drawing context
    var canvas = document.getElementById("mainCanvas");
    var context = canvas.getContext("2d");

    // fill the background
    context.fillStyle = "blue";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // set the color for the square
    if (dark) {
        context.fillStyle = "red";
    } else {
        context.fillStyle = "pink";
    }

    // draw the square
    context.fillRect(50, 50, 100, 100);
}

function start() {
    var framesPerSecond = 30;
    setInterval(drawFrame, 1000 / framesPerSecond);
}