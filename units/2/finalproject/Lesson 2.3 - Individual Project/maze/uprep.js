var maze = [
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

var directions = [
    { dx:  1, dy:  0 }, // right
    { dx:  0, dy:  1 }, // down
    { dx: -1, dy:  0 }, // left
    { dx:  0, dy: -1 }, // up
];

var rat = {
    row: 5,
    col: 5,
    direction: 0
};

var cellSize = 50;

function drawFrame() {
    var canvas = document.getElementById("mainCanvas");
    var context = canvas.getContext("2d");
    moveRat();
    drawMaze(context);    
    drawRat(context);
}

function drawMaze(context) {
    for (var r = 0; r < maze.length; r++) {
        for (var c = 0; c < maze[0].length; c++) {
            var cell = maze[r][c];
            drawCell(context, r, c, cell);
        }
    }
}

function drawCircle(context, x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.closePath();
    context.fill();
}

function drawRat(context) {
    var direction = directions[rat.direction];

    var x = rat.col * cellSize + cellSize / 2;
    var y = rat.row * cellSize + cellSize / 2;
    context.fillStyle = "black";
    drawCircle(context, x, y, cellSize / 4);

    var endX = x + -direction.dx * cellSize / 2;
    var endY = y + -direction.dy * cellSize / 2;
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(endX, endY);  
    context.stroke();
}

function drawCell(context, r, c, value) {
    if (value == 1) {
        context.fillStyle = "#aaa";
    } else {
        context.fillStyle = "#eee";
    }
    var x = c * cellSize;
    var y = r * cellSize;
    context.fillRect(x, y, cellSize, cellSize);
}

function canMoveTo(r, c) {
    if (r < 0 || r >= maze.length || c < 0 || c >= maze[0].length) {
        return false;
    }
    var cell = maze[r][c];
    return cell == 0;
}

function moveRat() {
    var direction = directions[rat.direction];
    var newR = rat.row + direction.dy;
    var newC = rat.col + direction.dx;
    var chance = randomBetween(0, 4);
    if (chance > 0 && canMoveTo(newR, newC)) {
        rat.row = newR;
        rat.col = newC;
    } else {
        turnRat();
    }
}

function turnRat() {
    var chance = randomBetween(0, 1);
    if (chance == 0) {
        rat.direction = rat.direction + 1;
    } else {
        rat.direction = rat.direction - 1;
    }
    rat.direction = (rat.direction + directions.length) % directions.length;
}

function randomBetween(low, high) {
    var range = high - low + 1;
    var value = Math.floor(Math.random() * range);
    return low + value;
}

function start() {
    var framesPerSecond = 10;
    setInterval(drawFrame, 1000 / framesPerSecond);
}