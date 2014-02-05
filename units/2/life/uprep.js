// spec: http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

var grid1 = {
    width: 5,
    height: 5, 
    cells: [
        [false, false, false, false, false],
        [false, false, true,  false, false],
        [false, false, true,  false, false],
        [false, false, true,  false, false],
        [false, false, false, false, false]
    ]
};

var grid2 = {
    width: 6,
    height: 6, 
    cells: [
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, true,  true,  true,  false],
        [false, true,  true,  true,  false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false]
    ]
};

// the grid to use
var currentGrid = grid2;
        
// called once page is loaded
function start() {
    setInterval(onTimerTick, 300);
}       
        
// called on a regular interval to evolve the grid
function onTimerTick() {
    currentGrid = evolve(currentGrid);
    draw(currentGrid);
}

// returns the graphics context to to draw the grid
function getContext() {
    var canvas = window.document.getElementById("mainCanvas");
    return canvas.getContext("2d");
}

// draws a grid
function draw(grid) {
    for (var y = 0; y < grid.height; y++) {
        for (var x = 0; x < grid.width; x++) {
            drawCell(grid, x, y, getCell(grid, x, y));
        }
    }
}

// returns whether a given cell is alive or dead
function getCell(grid, x, y) {
    if (x < 0 || x >= grid.width) {
        return false;                
    }
    if (y < 0 || y >= grid.height) {
        return false;
    }
    return grid.cells[y][x];
}

// draws one cell of the live grid
function drawCell(grid, x, y, alive) {
    var context = getContext();
    var cellWidth = 500 / grid.width;
    var cellHeight = 500 / grid.height;
    if (alive) {
        context.fillStyle = "red";
    } else {
        context.fillStyle = "blue";
    }
    context.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
}

// counts a live cell as one, and a dead cell as zero
function getCellCount(grid, x, y) {
    if (getCell(grid, x, y)) {
        return 1;
    } else {
        return 0;
    }            
}

// returns the number of neighbors that a cell has
function getLiveNeighborCount(grid, x, y) {
    return getCellCount(grid, x - 1, y - 1) +
        getCellCount(grid, x - 0, y - 1) +
        getCellCount(grid, x + 1, y - 1) +                
        getCellCount(grid, x - 1, y - 0) +
        getCellCount(grid, x + 1, y - 0) +                
        getCellCount(grid, x - 1, y + 1) +
        getCellCount(grid, x - 0, y + 1) +
        getCellCount(grid, x + 1, y + 1);
}

// returns whether a cell should live or die
function evolveCell(grid, x, y) {
    var isLive = getCell(grid, x, y);         
    var liveNeighbors = getLiveNeighborCount(grid, x, y);
    
    if (isLive) {
        if (liveNeighbors < 2) {
            return false;
        }
        if (liveNeighbors >= 2 && liveNeighbors <= 3) {
            return true;
        }
        return false;
    } else {
        if (liveNeighbors == 3) {
            return true;
        }
        return false;
    }
    return true;
}

// given a grid, returns a new grid one step evolved
function evolve(grid) {
    var newLife = {
        width: grid.width,
        height: grid.height,
        cells: []
    };
    
    for (var y = 0; y < grid.height; y++) {
        var newRow = [];
        for (var x = 0; x < grid.width; x++) {
            newRow[x] = evolveCell(grid, x, y);
        }
        newLife.cells[y] = newRow;
    }
    
    return newLife;
}