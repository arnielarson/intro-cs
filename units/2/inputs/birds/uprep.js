// You will be adding input to this game.  You can use the following functions
// to control the game.
//
// YOU WILL NEED TO REFER TO THE PREVIOUS EXAMPLES (1.7.1)
//
// 1. LAUNCHING BIRD WITH MOUSE
//
//    In order to launch the bird with the mouse, we need to handle THREE events:
//
//    A. When mouse is pressed down on canvas (onmousedown), do this:
//
//          putBirdInRubberBand(x, y)
//
//      used to load a new bird into the rubber band
//      the id of the canvas element is "mainCanvas"
//
//    B. When mouse is moved over canvas (onmousemove), do this:
//
//         moveRubberBand(x, y)
//
//      used to move bird around in rubber band as mouse moves
//      the id of the canvas element is "mainCanvas"
//
//    C. When mouse is released over canvas (onmouseup), do this:
//
//         releaseRubberBand()
//
//      used to release rubber band, sending bird on its way
//      the id of the canvas element is "mainCanvas"
//
// 2. RESTARTING GAME WHEN START OVER IS PRESSED
//
//    To make the "Start Over" button work, we need to handle one event:
//
//    A. When mouse is clicked on start over button (onclick), do this:
//
//         startGame()
//
//      used to start or restart the game
//      also need to call this when the start() function is called
//      the id of the "Start Over" button is "start"
//
// 3. LAUNCHING BIRD FROM WHEN LAUNCH BIRD IS PRESSED
//
//    To make the "Launch Bird" button work, we need to handle one event
//
//    A. When mouse is clicked on start over button (onclick), do this:
//         
//         launchBirdAtAngleAndSpeed(angle, speed)
//
//      used to launch a bird given an angle and a speed
//      both angle and speed should be numbers (not strings)
//      use the parseFloat() function to convert the strings to numbers
//      the id of the angle text input area is "angle"
//      the id of the speed text input area is "speed"

function start() {
    startGame();

    var more = true;
    if (more) {
        var canvas = getCanvas();
        canvas.onmousemove = mouseMoved;
        canvas.onmouseup = mouseUp;
        canvas.onmousedown = mouseDown;
        
        var launchButton = document.getElementById("launch");
        launchButton.onclick = launchClick;
        
        var startButton = document.getElementById("start");
        startButton.onclick = startClick;
        
        // OPTIONAL
        canvas.ontouchstart = touchStart;
        canvas.ontouchend = touchEnd;
        canvas.ontouchmove = touchMove;        
    }    
}

function startClick() {
    startGame();
}

function launchClick() {
    var angleInput = document.getElementById("angle");
    var speedInput = document.getElementById("speed");
    var speed = speedInput.value;
    var angle = angleInput.value;
    var speed = parseFloat(speed);
    var angle = parseFloat(angle);
    launchBirdAtAngleAndSpeed(angle, speed);
}

function mouseDown(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    putBirdInRubberBand(x, y);
}

function mouseUp(event) {
    releaseRubberBand();
}

function mouseMoved(event) {
    moveRubberBand(event.offsetX, event.offsetY);
}

// OPTIONAL

function touchStart(event) {
    var touches = event.targetTouches;
    var firstTouch = touches[0];
    var x = firstTouch.pageX - event.target.offsetLeft;
    var y = firstTouch.pageY - event.target.offsetTop;
    putBirdInRubberBand(x, y);
}

function touchEnd(event) {
    releaseRubberBand();
}

function touchMove(event) {
    var touches = event.targetTouches;
    var firstTouch = touches[0];
    var x = firstTouch.pageX - event.target.offsetLeft;
    var y = firstTouch.pageY - event.target.offsetTop;
    moveRubberBand(x, y);
}