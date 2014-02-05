function start() {
    
    // canvas mouse events
    var canvas = document.getElementById("mainCanvas");
    canvas.onmousemove = canvasMouseMove;
    canvas.onmousedown = canvasMouseDown;
    canvas.onmouseup = canvasMouseUp;
    canvas.onclick = canvasClick;
    
    // button click event
    var okButton = document.getElementById("okButton");
    okButton.onclick = okButtonClick;
    
    // canvas touch events
    canvas.ontouchstart = canvasTouchStart;
    canvas.ontouchmove = canvasTouchMove;
    canvas.ontouchend = canvasTouchEnd;
    
    // key events for cat
    var cat = document.getElementById("cat");
    cat.onchange = catChange;
    cat.onkeydown = catKeyDown;
    cat.onkeyup = catKeyUp;
    cat.onkeypress = catKeyPress;
    
    // key events for weight
    var weight = document.getElementById("weight");
    weight.onchange = weightChange;
    weight.onkeydown = weightKeyDown;
    weight.onkeyup = weightKeyUp;
    weight.onkeypress = weightKeyPress;
    
    // handle event when window is resized
    window.onresize = windowResize;    
}

// CANVAS MOUSE EVENTS

function canvasMouseMove(event) {
    // get the x and y location of the mouse
    var x = event.offsetX;
    var y = event.offsetY;
    
    // display the information on the screen
    displayMessage("canvas mouseMove: " + x.toString() + "," + y.toString());
}

function canvasMouseDown(event) {
    // get the x and y location of the mouse
    var x = event.offsetX;
    var y = event.offsetY;
    
    // display the information on the screen    
    displayMessage("canvas mouseDown: " + x.toString() + "," + y.toString());
}

function canvasMouseUp(event) {
    // get the x and y location of the mouse
    var x = event.offsetX;
    var y = event.offsetY;
    
    // display the information on the screen    
    displayMessage("canvas mouseUp: " + x.toString() + "," + y.toString());
}

function canvasClick(event) {
    // get the x and y location of the mouse
    var x = event.offsetX;
    var y = event.offsetY;
    
    // display the information on the screen   
    displayMessage("canvas click: " + x.toString() + "," + y.toString());
}

// BUTTON CLICK EVENT

function okButtonClick(event) {
    // get the string from the cat element
    var catElement = document.getElementById("cat");
    var cat = catElement.value;
    
    // get the number from the weight element
    var weightElement = document.getElementById("weight");
    var weight = weightElement.value;
    
    // display the information on the screen
    displayMessage("ok button click: " + cat + ", " + weight);
}

// CANVAS TOUCH EVENTS

function canvasTouchStart(event) {
    // get all the touches (all fingers)
    var touches = event.targetTouches;    
    // get the first finger location
    var firstTouch = touches[0];
    // get the location of the finger
    var x = firstTouch.pageX - event.target.offsetLeft;
    var y = firstTouch.pageY - event.target.offsetTop;
    
    // display the information on the screen       
    displayMessage("canvas touch start: " + x.toString() + "," + y.toString());
}

function canvasTouchMove(args) {
    // get all the touches (all fingers)
    var touches = event.targetTouches;    
    // get the first finger location
    var firstTouch = touches[0];
    // get the location of the finger
    var x = firstTouch.pageX - event.target.offsetLeft;
    var y = firstTouch.pageY - event.target.offsetTop;
    
    // display the information on the screen       
    displayMessage("canvas touch move: " + x.toString() + "," + y.toString());
}

function canvasTouchEnd(event) {
    // get all the touches (all fingers)
    var touches = event.targetTouches;    
    // get the first finger location
    var firstTouch = touches[0];
    // get the location of the finger
    var x = firstTouch.pageX - event.target.offsetLeft;
    var y = firstTouch.pageY - event.target.offsetTop;
    
    // display the information on the screen       
    displayMessage("canvas touch end: " + x.toString() + "," + y.toString());
}

// CAT KEY EVENTS

function catChange(event) {
    // get the string from the cat element
    var catElement = document.getElementById("cat");
    var cat = catElement.value;
    
    // display the information on the screen
    displayMessage("cat change: " + cat);
}

function catKeyDown(event) {
    // get the number of the key pressed
    var keyCode = event.keyCode;
    
    // get the string from the cat element
    var catElement = document.getElementById("cat");
    var cat = catElement.value;    
    
    // display the information on the screen
    displayMessage("cat keydown: " + keyCode.toString() + "," + cat);
}

function catKeyUp(event) {
    // get the number of the key pressed
    var keyCode = event.keyCode;
    
    // get the string from the cat element
    var catElement = document.getElementById("cat");
    var cat = catElement.value;        
    
    // display the information on the screen
    displayMessage("cat keyup: " + keyCode.toString() + "," + cat);
}

function catKeyPress(event) {
    // get the number of the key pressed
    var keyCode = event.keyCode;
    
    // get the string from the cat element
    var catElement = document.getElementById("cat");
    var cat = catElement.value;        
    
    // display the information on the screen
    displayMessage("cat keypress: " + keyCode.toString() + "," + cat);
}

// WEIGHT KEY EVENTS

function weightChange(event) {
    // get the string from the weight element
    var weightElement = document.getElementById("weight");
    var weight = weightElement.value;
    
    // display the information on the screen
    displayMessage("weight change: " + weight);
}

function weightKeyDown(event) {
    // get the number of the key pressed
    var keyCode = event.keyCode;
    
    // get the string from the weight element
    var weightElement = document.getElementById("weight");
    var weight = weightElement.value;    
    
    // display the information on the screen
    displayMessage("weight keydown: " + keyCode.toString() + "," + weight);
}

function weightKeyUp(event) {
    // get the number of the key pressed
    var keyCode = event.keyCode;
    
    // get the string from the weight element
    var weightElement = document.getElementById("weight");
    var weight = weightElement.value;        
    
    // display the information on the screen
    displayMessage("weight keyup: " + keyCode.toString() + "," + weight);
}

function weightKeyPress(event) {
    // get the number of the key pressed
    var keyCode = event.keyCode;
    
    // get the string from the weight element
    var weightElement = document.getElementById("weight");
    var weight = weightElement.value;        
    
    // display the information on the screen
    displayMessage("weight keypress: " + keyCode.toString() + "," + weight);
}

// WINDOW RESIZE EVENT

function windowResize(event) {
    // get the new width and height of the window
    var width = window.innerWidth;
    var height = window.innerHeight;
    
    // display the information on the screen   
    displayMessage("window resize: " + width.toString() + "," + height.toString());    
}




