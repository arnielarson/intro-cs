/*
 * slope-old.js - function to calculate slope of line -
 * This function does not use parameters or return functions
 *
 * author - Arnie Larson
 *
 */

// Global varables used in my slope calculation
var x1 = 1;
var x2 = 2;
var y1 = 3;
var y2 = 4;
var slope;

/*
 * Calculate the Slope of a line.
 */
function calculateSlope() {
    slope = (y2 - x2) / (y1 - x1);
}


/*
 * run() is called by the body onload attribtue in my html file, slope.html
 * This function runs my program.
 * First calculateSlope() is called, to calculate the slope
 * Second, an alert box displays the slope
 */
function run() { 
    calculateSlope();
    alert("The slope of (1,2), (3,4) is "+slope);
    
}
