/* Starter Code for Factorial Problem
 * author:  alarson@universityprep.org
 */

// This function calculates the factorial N!
// Takes as input a number n
// This function should return the answer
function calculateFactorial(n) {
    if (parseInt(n)!=n)
        return -1;
    var answer=1;
    for (i=n; i>0; i--) {
        answer=answer*i;
    }
    return answer;
}


function run() {
    var input = parseFloat(document.getElementById('input').value);
    var factorial = calculateFactorial(input);
    document.getElementById('result').textContent = factorial;

}
