/*
 *  Starter Code for "Practice with Arrays"
 *  https://inside.universityprep.org/~alarson/units/1/5/exercise1.5.3.html
 *  Author -  alarson@universityprep.org
 */

var fruits = ["watermelon", "apple", "banana", "pomagranate", "orange", "blueberry", "blueberry"];

function showAll() {
    var showElement = document.getElementById("allElements");
    showElement.textContent = fruits;
}

function addElement() {
   var newElement = document.getElementById('newElement').value;
   alert('adding '+newElement+' to my array.')
}

function removeElement() {
    var removedElement = 'the removed element';
    
    document.getElementById('removedElement').textContent=removedElement;
    
}

function sortArray() {
    
}

