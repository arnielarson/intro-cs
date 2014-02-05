function slope(point1, point2) {
    var rise = point1.y - point2.y;
    var run = point1.x - point2.x;
    return rise / run;
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

    var m = slope(point1, point2);
}
