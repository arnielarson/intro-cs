// information about the slingshot
var slingshot = {
    left : 150,
    bottom : 50, 
    width : 8,
    radius : 30,
    height : 70,
    color : "#cc9a5b"
};

// information the rubber band
var rubberBand = {
    color: "#552813",
    width: 4,
};

// information about the background
var background = {
    horizon: 150,
    skyColor: "#b7dcf7",
    groundColor: "#55ad3c",
    rayColor: "#9bcff4",
    rayWidth: 30,
    rayLength: 1000,
    sunRadius: 100,
    sunColor: "lightyellow",
    attributionText: "Images from http://www.freevector.com/angry-birds-characters/, intended for educational purposes only",
    attributionFont: "8pt Arial",
    attributionColor: "lightgreen"
};

// return the canvas object
function getCanvas() {
    var canvas = document.getElementById("mainCanvas");
    return canvas;
}

// draw everything on the canvas
function drawEverything() {
    var canvas = getCanvas();
    var context = canvas.getContext("2d");    
    drawBackground(context);
    drawSlingshot(context);
    if (birdToLaunch != undefined) {        
        drawRubberBand(context, birdToLaunch);
    }
    drawAllPigs(context);
    drawAllBirds(context);    
}

// draw things behind the slingshot, birds, and pigs
function drawBackground(context) {
    var canvas = context.canvas;
    
    // draw sky
    context.fillStyle = background.skyColor;
    context.fillRect(0, 0, canvas.width, canvas.height - background.horizon);
    
    // draw rays
    context.strokeStyle = background.rayColor;
    context.lineWidth = background.rayWidth;
    for (var ray = 0; ray < 10; ray = ray + 1) {
        var angle = Math.PI / 18 * ray;
        var x = background.rayLength * Math.cos(angle);
        var y = background.rayLength * Math.sin(angle);
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(0 + x, 0 + y);
        context.stroke();
    }
    
    // draw sun
    context.fillStyle = background.sunColor;
    context.beginPath();
    context.arc(0, 0, background.sunRadius, 0, Math.PI * 2);
    context.closePath();
    context.fill();
    
    // draw ground
    context.fillStyle = background.groundColor;
    context.fillRect(0, canvas.height - background.horizon,
                     canvas.width, background.horizon);
    
    // draw attribution text (to recognize author of images)
    context.font = background.attributionFont;
    context.fillStyle = background.attributionColor;
    context.fillText(background.attributionText, 2, canvas.height - 2);
}

function drawRubberBand(context, bird) {
    var canvas = context.canvas;
    var slingshotTop = canvas.height - slingshot.height - slingshot.bottom;
    
    // left part of rubber band
    context.strokeStyle = rubberBand.color;
    context.lineWidth = rubberBand.width;
    context.beginPath();
    context.moveTo(slingshot.left - slingshot.radius, slingshotTop - slingshot.radius);
    context.lineTo(bird.x, bird.y);
    context.stroke();
    
    drawOneBird(context, bird);
    
    // right part of rubber band
    context.strokeStyle = rubberBand.color;
    context.lineWidth = rubberBand.width;
    context.beginPath();
    context.moveTo(slingshot.left + slingshot.radius, slingshotTop - slingshot.radius);
    context.lineTo(bird.x, bird.y);
    context.stroke();
}

function drawSlingshot(context) {
    var canvas = context.canvas;
    context.strokeStyle = slingshot.color;
    context.fillStyle = slingshot.color;
    context.lineWidth = slingshot.width;
    var slingshotTop = canvas.height - slingshot.height - slingshot.bottom;
    
    // pole
    context.fillRect(slingshot.left - slingshot.width / 2,
        slingshotTop, slingshot.width, slingshot.height);
    
    // u-shaped part   
    context.beginPath();
    context.arc(slingshot.left, slingshotTop - slingshot.radius,
                slingshot.radius, 0, Math.PI);
    context.stroke();
    
    // left gromet
    context.beginPath();
    context.arc(slingshot.left - slingshot.radius, slingshotTop - slingshot.radius,
                slingshot.width, 0, Math.PI * 2);
    context.fill();
    
    // right gromet
    context.beginPath();
    context.arc(slingshot.left + slingshot.radius, slingshotTop - slingshot.radius,
                slingshot.width, 0, Math.PI * 2);
    context.fill();
}

// draw all the pigs
function drawAllPigs(context) {
    for (var i = 0; i < pigs.length; i = i + 1) {
        var pig = pigs[i];
        drawOnePig(context, pig);
    }    
}

// draw all the birds
function drawAllBirds(context) {
    for (var i = 0; i < birds.length; i = i + 1) {
        var bird = birds[i];
        drawOneBird(context, bird);
    }
}

// draw a bird
function drawOneBird(context, bird) {
    drawImageCentered(context, bird.x, bird.y, bird.width, bird.height, bird.name);
}

// draw a pig
function drawOnePig(context, pig) {
    drawImageCentered(context, pig.x, pig.y, pig.width, pig.height, pig.name);
}

// draw an image centered at x, y with a given width/height
function drawImageCentered(context, x, y, width, height, imageName) {
    var image = document.getElementById(imageName);
    var left = x - width / 2;
    var top = y - height / 2;
    context.drawImage(image, left, top, width, height);
}