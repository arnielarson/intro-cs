// display message on a canvas 
function displayMessage(id, message) {
    var canvasId = id + "_messages";
    var canvas = document.getElementById(canvasId);
    messages = canvas.messages;
    if (messages == undefined) {
        messages = [];
        canvas.messages = messages;
    }
    addMessage(messages, message);
    drawAllMessages(messages, canvas);
}

// add a message to the array of messages
function addMessage(messages, message) {
    // add message at the beginning of the array
    messages.splice(0, 0, message);
    
    // if the array is getting long
    if (messages.length > 100) {
        // remove the last message
        messages.splice(messages.length - 1, 1);
    }
}

// draw all messages in the array on the canvas
function drawAllMessages(messages, canvas) {
    var context = canvas.getContext("2d");
    
    // fill background
    context.fillStyle = "#eeeeee";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // draw each message
    var textHeight = 15;
    context.fillStyle = "black";
    context.font = textHeight.toString() + "px Arial";
    for (var i = 0; i < messages.length; i = i + 1) {
        var message = messages[i];
        var y = i * textHeight + textHeight;
        context.fillText(message, 0, y);
    }
}

function makeHandler(id, eventName) {
    return function (event) {
        var element = document.getElementById(id);
        var parts = [eventName];
        if (event.keyCode !== undefined) {
            parts.push("keyCode:" + event.keyCode.toString());
        }
        if (event.clientY !== undefined) {
            parts.push("x:" + event.clientY.toString());
        }
        if (event.clientX !== undefined) {
            parts.push("y:" + event.clientX.toString());
        }
        if (canCheck(element)) {
            parts.push("checked:" + element.checked);            
        } else if (element.value !== undefined) {
            parts.push("value:" + element.value);            
        }
        
        if (event.targetTouches) {
            // get all the touches (all fingers)
            var touches = event.targetTouches;    
            // get the first finger location
            var firstTouch = touches[0];
            // get the location of the finger
            var x = firstTouch.pageX - event.target.offsetLeft;
            var y = firstTouch.pageY - event.target.offsetTop;
            parts.push("x:" + x.toString());
            parts.push("y:" + y.toString());
        }
        var message = parts.join("   ");
        displayMessage(id, message);
    }
}

function addProperty(html, propertyName) {
    html.push("<div class='property'><a href='#" + propertyName + "'>" + propertyName + "</a></div>");
}

function canCheck(element) {
    return element.type == "checkbox" || element.type == "radio";
}

function hook(id) {
    var eventNames = [
        "onkeydown",
        "onkeyup",
        "onkeypress",
        "onmousedown",
        "onmousemove",
        "onmouseup",
        "onchange",
        "onclick", 
        "ontouchstart",  
        "ontouchmove",   
        "ontouchend"   
    ];
    var propertyNames = [
        "value",
        "checked"
    ];
    var element = document.getElementById(id);
    var html = [];
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        if (element[eventName] !== undefined) {
            element[eventName] = makeHandler(id, eventName);
            displayMessage(id, "handling event: " + eventName);
            html.push("<div class='event'><a href='#" + eventName + "'>" + eventName + "</a></div>");
        }
    }
    if (canCheck(element)) {
        addProperty(html, "checked");
    } else if (element.value !== undefined) {
        addProperty(html, "value");        
    }
    var object = document.getElementById(id + "_object");
    object.innerHTML = html.join("");
}

function start() {
    hook("_text");
    hook("_textArea");
    hook("_number");
    hook("_password");
    hook("_range");
    hook("_color");
    hook("_checkbox");
    hook("_radio1");
    hook("_radio2");
    hook("_radio3");
    hook("_select");
    hook("_button");
    hook("_canvas");
}

function someTouchEvent(event) {
    // get all the touches (all fingers)
    var touches = event.targetTouches;    
    // get the first finger location
    var firstTouch = touches[0];
    // get the location of the finger
    var x = firstTouch.pageX - event.target.offsetLeft;
    var y = firstTouch.pageY - event.target.offsetTop;
}
