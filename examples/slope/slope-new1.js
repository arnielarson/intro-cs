/*
 * slope.js - function to calculate slope of line -
 * Uses parameters and function return statement.
 * Uses point objects
 *
 *
 */



function calculateSlope(p1,p2) {
    var m = (p2.y - p1.y) / (p2.x - p1.x);
    return m;
}
function changeSlopePoint(point, changeX, changeY) {
    point.x=point.x + changeX;
    point.y=point.y + changeY;
}

function run() {
    var point1 = {
        x:undefined,
        y:undefined
    };
    var point2 = {
        x:undefined,
        y:undefined
    };
    point1.x = parseFloat(document.getElementById("x1").value);
    point2.x = parseFloat(document.getElementById("x2").value);
    point1.y = parseFloat(document.getElementById("y1").value);
    point2.y = parseFloat(document.getElementById("y2").value);
    changeSlopePoint(point2, 1, -1);
    var m = calculateSlope(point1,point2);
    document.getElementById("m").value=m;   
}



function test() {
    //code
}