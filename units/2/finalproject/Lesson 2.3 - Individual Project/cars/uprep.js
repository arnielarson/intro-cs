function start() {
    var cylindersElement = document.getElementById("cylinders");
    cylindersElement.onchange = cylindersChanged;

    var searchBox = document.getElementById("searchText");
    searchBox.onkeyup = searchKeyUp;
    searchBox.onchange = searchChanged;
}

function searchKeyUp(event) {
    search();
}

function searchChanged(event) {
    search();
}

function cylindersChanged(event) {
    search();
}

function search() {
    var searchTextElement = document.getElementById("searchText");
    var searchText = searchTextElement.value;
    var cylindersElement = document.getElementById("cylinders");
    var cylinders;
    if (cylindersElement.value == "") {
        cylinders = undefined;
    } else {
        cylinders = parseFloat(cylindersElement.value);
    }
    var cars = getSearchResults(searchText, cylinders);
    displaySearchResults(cars);
}

function onCompareClick(i) {
    var car = cars[i];
    var comparison = document.getElementById("carsToCompare");
    var description = carDescription(car);
    comparison.innerHTML = comparison.innerHTML + "<p>" + description + "</p>";
}

function displaySearchResults(cars) {
    var html = "";
    for (var i = 0; i < cars.length; i++) {
        var car = cars[i];
        var description = carDescription(car);
        html = html + "<p><input type=button value=\"Compare\" onclick=\"onCompareClick(" +
            i.toString() + ")\">" +
            description + "</p>";
    }

    var searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = html;
}

function carDescription(car) {
    return car.ModelYear.toString() + " " + 
        car.MfrName + " " + car.Carline;
}

function getSearchResults(searchText, cylinders) {
    var carsFound = [];
    for (var i = 0; i < cars.length; i++) {
        var car = cars[i];
        if (carMatches(car, searchText, cylinders)) {
            carsFound.push(car);
        }
    }
    return carsFound;
}

function carMatches(car, searchText, cylinders) {
    var description = carDescription(car);

    description = description.toLowerCase();

    if (searchText == "" || description.indexOf(searchText.toLowerCase()) > 0) {
        
        if (cylinders == undefined || car.Cylinders == cylinders) {

            return true;
        }
    }

    return false;
}
