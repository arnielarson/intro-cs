/* 
 * Starter Code for Summing an Array Problem
 * author:  alarson@universityprep.org
 */

var myArray = [1,2,3];

function showArray() {
    var output = "";
    var size = myArray.length;

    for (i=0; i < size; i++) {
        output = output + myArray[i] + ", ";

    }
    document.getElementById('arrayToString').textContent=output;

}

/*
 * Sums myArray and displays the sum on the page.
 *
 */
function calculate() {
    var sum = 0;


    document.getElementById('result').textContent = sum;

}
