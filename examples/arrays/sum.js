/* 
 * Code for Summing an Array Problem
 * Has a mutation method to generate new arrays
 * author:  alarson@universityprep.org
 */

var myArray = [1,2,3];

// Mutate the array - creates a new array with random size and random integer values
function mutateArray() {
    var size= 5+Math.ceil(Math.random()*20);
    myArray= [];
    for (i=0; i<size; i++) {
        myArray.push(Math.ceil(Math.random()*100));
    }
    showArray();
}


function showArray() {
    var output = "";
    var size = myArray.length;

    for (i=0; i < size; i++) {
        output = output + myArray[i] + ", ";
    }
    document.getElementById('arrayToString').textContent=output;

}

/*
 * Sums myArray and displays the result on the html page.
 *
 */
function calculate() {
    var sum = 0;
    var size = myArray.length;

    for (i=0; i < size; i++) {
        sum = sum + myArray[i];
    }

    document.getElementById('result').textContent = sum;

}
