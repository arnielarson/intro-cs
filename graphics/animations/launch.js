/*
 * demo.js -    examples using graphics, 
 *              launches an object with respect to gravity
 * author - alarson@universityprep.org
 *
 * color pallette: http://www.w3schools.com/html/html_colors.asp
 */
 

/*
 *  Bird object
*/
var Bird = {
    // default bird positions
    x : 0,
    y : 0,
    dx : 0,
    dy : 0,
    image : undefined,
    frame : 0,

    // random movement drawing
    draw : function(context) {        
        this.frame+=1;
        context.drawImage(this.image, this.x, this.y);
    },

    talk : function() {
        var sound = document.getElementsByTagName("audio")[0];
        sound.play();
    }
}

/* 
   Called from button click - launches bird object
*/
function launch() {
    var angle = parseFloat(document.getElementById("angle").value);
    var speed = parseFloat(document.getElementById("speed").value);
    var x = 100;
    var y = 300;
    var dx = speed * Math.cos(angle*Math.PI/180);
    var dy = speed * Math.cos(angle*Math.PI/180);
    Bird.x=x;
    Bird.y=y;
    Bird.dx=dx;
    Bird.dy=dy;
    
}


function draw() {
    setupCanvas();
    setInterval(drawFrame, 100);
    
}

// Draws the scene.  First the checkered background
// then the moving (randomly) object.
function drawFrame() {
    drawBackground();
    var context = getContext();
    Bird.draw(context);
}


function drawSquare(x, y, width, height) {
    var context = getContext();
    context.fillStyle = "red";
    context.fillRect(x, y, width, height);

}

function drawBackground() {
    var context = getContext();
    context.fillStyle = "#66FF66";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    
    drawCircleOutline(200, 200);
    drawSquare(350, 350, 20, 20);
    drawSquare(400, 450, 30, 30);
    
}

function drawCircleOutline(x, y) {
    var context = getContext();
    context.strokeStyle= "blue";
    context.lineWidth=5;
    context.beginPath();
    context.arc(x, y, 30, 0, Math.PI * 2);
    context.stroke();
}


function setupCanvas() {
    var width = canvas.width;
    var height = canvas.height;
    Bird.x=width/2;
    Bird.y=height/2;
    Bird.image=document.getElementById("bird1");
}

function getContext() {
    return canvas.getContext("2d");
}
