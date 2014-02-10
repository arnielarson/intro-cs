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

/*
 *  calculateChange - an Algorithm for calculating the change:
 *  Given a total (in pennies), determines the composition in terms of
 *  how many quarters, dimes, nickles and pennies..
 *  
 *  Input - the total to decompose into 
 *  Uses the input id's "q,d,n,p" to display the outputs
 */
function calculateChange(total) {

    // First Calculate the number of quarters to return
    var quarters = Math.floor(total/25);
    document.getElementById("q").value=quarters;
    
    // After using the quarters, calculate how much change is left
    var remainder = total%25;
    
    // Then calculate the numberof dimes
    var dimes = Math.floor(remainder/10);
    document.getElementById("d").value=dimes;
    
    // After calculateing 
    remainder = remainder%10;
    var nickles = Math.floor(remainder/5);
    document.getElementById("n").value=nickles;
    
    // Finally, calculate how many pennies to include
    var pennies = remainder%5;
    document.getElementById("p").value=pennies;

    return newValue;
}



/*
 * Runs the program -
 * First gets the total (from the html input)
 * Next, checks that the input is ok
 * Then, calculates the change
 * Lastly, displays the outputs.
 */
function run() {
    var total = parseInt(document.getElementById("total").value);
   
    var value = calculateChange(total);
}