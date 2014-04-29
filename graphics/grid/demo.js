/*
 * grid, create a grid or checkboard pattern   
 *
 * demo.js - graphics demo
 * author - alarson@universityprep.org
  */


function draw(board) {
    //var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.fillStyle = "#66FF66";
    context.fillRect(0, 0 , 500, 500);
    if (board=='grid') {
        drawGridBasic(context, 9, 9, 500, 500);
    } else if (board=='board') {
        drawCheckerboard(context, 9, 500);
    } else if (board=='objects') {
        drawCheckerboard(context, 9, 500);
        drawObjects(context, 9, 500);
    } else if (board=='random') {
        drawCheckerboard(context, 9, 500);
        drawRandomObjects(context, 9, 500);
    }
}


// just draws a simple grid
function drawGridBasic(context, nx, ny, width, height) {

    var x_size = (width - nx ) / nx
    var y_size = (height - nx ) / nx
    var x = 1;
    for (i=0; i < nx; i++) {
        var y = 1;
        for (j=0; j< ny; j++) {
            drawRect(context, x, y, x_size, y_size, "blue")
            y = y + y_size + 1;
        }
        x = x + x_size + 1;
    }
}

// draws a checkerboard pattern
function drawCheckerboard(context, dim, width) {
    var size = (width-10)/dim;  // Size of grid
    var color1="blue";          // first color
    var color2="yellow";        // second color
    var color;                  // variable being used to draw actual color

    var x = 1;
    for (i=0; i < dim; i++) {
        var y = 1;
        for (j=0; j< dim; j++) {
            // if i+j is even, then draw blue!
            if ((i+j)%2==0) {
                color = color1;
            } else {
                color = color2;
            }
            drawRect(context, x, y, size, size, color)
            y = y + size + 1;
        }
        x = x + size + 1;
    }
}

function drawRandomObjects(context, dim, width) {
    var bird1=document.getElementById("bird1");
    var bird2=document.getElementById("bird2");
    var size = (width)/dim;  // Size of blocks
    
    // create a board representing the 
    var board = [];
    for (var i=0; i<10; i++) {
        board.push([])
        for (var j=0; j<10; j++) {
            var r = Math.random()*10;
            if (r>9) {
                board[i].push(1)
            } else if (r>8) {
                board[i].push(2)
            } else {
                board[i].push(0)
            }
        }
    }

    for (var i=0; i<10; i++) {
        for (var j=0; j<10; j++) {
           if (board[i][j]==1) {
               // paint a bird at x=size*i  y=size*j
                context.drawImage(bird1, i*size, j*size, size, size)
           } else if (board[i][j]==2) {
               // paint a different board
                context.drawImage(bird2, i*size, j*size, size, size)
           }
           // else - leave board as is
        }
    }


}


// draws three rows of checkered bird objects..
function drawObjects(context, dim, width) {
    bird1=document.getElementById("bird1");
    bird2=document.getElementById("bird2");
    var size = (width)/dim;  // Size of blocks

    // first draw the top pieces
    var x = 1
    for (var i=0; i<dim; i++) {
        var y = 1;
        for (var j=0; j<3; j++) {
            if ((i+j)%2==0) {
                //draw a yellow piece
                context.drawImage(bird1, x, y, size, size);
            }
            y+=size
        }
        x+=size
    }
    x=1
    for (var i=0; i<dim; i++) {
        y = (dim-3)*size;
        for (var j=0; j<3; j++) {
            if ((i+j)%2==0) {
                //draw a blue piece
                context.drawImage(bird2, x, y, size, size);
            }
            y+=size
        }
        x+=size
    }


}

function drawRect(context, x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y , width, height)
}


function drawCircleGrid(nx, ny, radius, color) {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var xwidth = canvas.width / nx;
    var ywidth = canvas.height/ ny;
    x=xwidth / 2;
    for(var i = 1; i < nx; i++ ) {
        y=ywidth / 2;
        for(var j = 1; j < ny; j++) {
            y+=ywidth
            drawCircle(context, x, y, 2, radius, color);
        }
        x+=xwidth;
    }
}

function drawCircle(context, x, y, width, r, color) {
    context.strokeStyle= color;
    context.lineWidth=width;
    context.beginPath();
    context.arc(x, y,  r, 0, Math.PI * 2);
    context.stroke();
}

function redraw() {
    var choice = document.getElementById('redraw').value;
    draw(choice);
}

