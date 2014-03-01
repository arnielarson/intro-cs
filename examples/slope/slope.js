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

function setupPoints(p1, p2) {
    p1.x = parseFloat(document.getElementById("x1").value);
    p2.x = parseFloat(document.getElementById("x2").value);
    p1.y = parseFloat(document.getElementById("y1").value);
    p2.y = parseFloat(document.getElementById("y2").value);
}

/*
 * First - sets up the Point Objects, point1 and point2
 * Next - moves Point1
 * Then - the slope is calculated and dispayed
 */ 
function changePoint1() {
    var point1 = {
        x:undefined,
        y:undefined
    };
    var point2 = {
        x:undefined,
        y:undefined
    };   
    setupPoints(point1, point2);
    var changeX = parseFloat(document.getElementById("change_x1").value);
    var changeY = parseFloat(document.getElementById("change_y1").value);
    changeSlopePoint(point1, changeX, changeY)
    var m = calculateSlope(point1,point2);
    document.getElementById("m").value=m;   
   
}

/*
 * First - sets up the Point Objects, point1 and point2
 * Then - the slope of a line is calculated and dispayed
 */
function run() {
    var point1 = {
        x:undefined,
        y:undefined
    };
    var point2 = {
        x:undefined,
        y:undefined
    };   
    setupPoints(point1, point2);
    var m = calculateSlope(point1,point2);
    document.getElementById("m").value=m;   
}

