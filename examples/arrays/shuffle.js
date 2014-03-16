/* 
 * Code for Summing an Array Problem
 * Has a mutation method to generate new arrays
 * author:  alarson@universityprep.org
 */

var myArray;
var numeric;
var fruits = [
    "Apple",
    "Apricot",
    "Avocado",
    "Banana",
    "Breadfruit",
    "Bilberry",
    "Blackberry",
    "Blackcurrant",
    "Blueberry",
    "Boysenberry",
    "Cantaloupe",
    "Currant",
    "Cherry",
    "Cherimoya",
    "Cloudberry",
    "Coconut",
    "Cranberry",
    "Cucumber",
    "Damson",
    "Date",
    "Dragonfruit",
    "Durian",
    "Eggplant",
    "Elderberry",
    "Feijoa",
    "Fig",
    "Goji berry",
    "Gooseberry",
    "Grape",
    "Raisin",
    "Grapefruit",
    "Guava",
    "Huckleberry",
    "Honeydew",
    "Jackfruit",
    "Jambul",
    "Jujube",
    "Kiwi fruit",
    "Kumquat",
    "Lemon",
    "Lime",
    "Loquat",
    "Lychee",
    "Mango",
    "Melon",
    "Canary melon",
    "Cantaloupe",
    "Honeydew",
    "Watermelon",
    "Rock melon",
    "Mulberry",
    "Nectarine",
    "Nut",
    "Olive",
    "Orange",
    "Clementine",
    "Mandarine",
    "Blood Orange",
    "Tangerine",
    "Pamelo",
    "Papaya",
    "Passionfruit",
    "Peach",
    "Pepper",
    "Chili Pepper",
    "Bell Pepper",
    "Pear",
    "Bartlett pear",
    "Persimmon",
    "Physalis",
    "Plum",
    "Pineapple",
    "Pomegranate",
    "Pomelo",
    "Purple Mangosteen",
    "Quince",
    "Raspberry",
    "Rambutan",
    "Redcurrant",
    "Salal berry",
    "Satsuma",
    "Star fruit",
    "Strawberry",
    "Tomato",
]

// Mutate the array - creates a new array with random size and random integer values
function createArray(numbers) {
    numeric=(numbers==true);
    var size= 5+Math.round(Math.random()*20);
    myArray= [];

    if (numeric) {
        for (i=0; i<size; i++) {
            myArray.push(Math.round(Math.random()*100));
        }       
    } else {
        for (i=0; i<size; i++) {
            myArray.push(fruits[Math.floor(Math.random()*fruits.length)]);
        }
    }
    show();
}

// Simple helper funciton - joins the array element with ", "
function show() {    
    document.getElementById('show').textContent=myArray.join(", ");
}

function sortArray() {
    if (numeric) {
        myArray.sort(function sort(a,b) { return a-b; } );    
    } else {
        myArray.sort();
    }
    show();
}

// Sort Algorithm -
// Do one pass over the array
// Swap two array elements at random..
function shuffleArray() {
    var size = myArray.length;
    for (i = 0; i < size; i++) {
        var j = Math.round(Math.random()*(size - 1));
        swap(myArray, i, j);
    }
    show();
}

// swap the ith and jth element of an array a
function swap(a, i, j) {
    if (i==j) {
        return;
    }
    var first = a[i];
    var second = a[j]
    a[j] = first;
    a[i] = second;
}