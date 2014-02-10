/*
 *  Calculates the coins that are used in change, example:
 *      If input is 117 (cents)
 *      The output is:
 *          4 quarters
 *          1 dimes
 *          1 nickles
 *          2 pennies
 *
 *  Author - alarson@universityprep.org
 */

// Global Variables -
var quarters;
var dimes;
var nickles;
var pennies; 

function calculateChange(total) {

    quarters = Math.floor(total/25);
    var remainder = total%25;   
    dimes = Math.floor(remainder/10);
    remainder = remainder%10;
    nickles = Math.floor(remainder/5);
    pennies = remainder%5;
    
}

function updateDisplay() {
    document.getElementById("q").value=quarters;
    document.getElementById("d").value=dimes;
    document.getElementById("n").value=nickles;
    document.getElementById("p").value=pennies;
}


// Run program - attached to Button Click event
function run() {
    var total = parseInt(document.getElementById("total").value);  
    calculateChange(total);
    updateDisplay();
}

run();
