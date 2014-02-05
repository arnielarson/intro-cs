function slope(point1, point2) {
    var rise = point1.y - point2.y;
    var run = point1.x - point2.x;
    return rise / run;
}

function movePoint(point, x, y) {
    point.x = point.x + x;
    point.y = point.y + y;
}

function onLoad() {
    var point1 = {
        x: 1,
        y: 2
    };
    var point2 = {
        x: 3,
        y: 4
    };

    var m1 = slope(point1, point2);
    
    movePoint(point1, 1, -1);
    
    var m2 = slope(point1, point2);
}
