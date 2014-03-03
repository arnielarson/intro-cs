/* 
 * Starter Code for Factorial Problem
 * author:  alarson@universityprep.org
 */

// This function calculates the factorial N!
// Takes as input a number n
// This function should return the answer
function calculateFactorial(n) {

    // Check to make sure that n is a number!
    if (parseInt(n)!=n) {
        return -1;
    }
    return answer;
}


function run() {
    var input = parseFloat(document.getElementById('input').value);
    var factorial = calculateFactorial(input);
    document.getElementById('result').textContent = factorial;

}
