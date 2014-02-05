messages = [];

// display a message on the screen
function displayMessage(message) {
    addMessage(message);
    drawAllMessages();
}

// add a message to the array of messages
function addMessage(message) {
    // add message at the beginning of the array
    messages.splice(0, 0, message);
    
    // if the array is getting long
    if (messages.length > 100) {
        // remove the last message
        messages.splice(messages.length - 1, 1);
    }
}

// draw all messages in the array on the canvas
function drawAllMessages() {
    var canvas = document.getElementById("mainCanvas");
    var context = canvas.getContext("2d");
    
    // fill background
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // draw each message
    var textHeight = 20;
    context.fillStyle = "black";
    context.font = textHeight.toString() + "px Arial";
    for (var i = 0; i < messages.length; i = i + 1) {
        var message = messages[i];
        var y = i * textHeight + textHeight;
        context.fillText(message, 0, y);
    }
}