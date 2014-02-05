function start() {
    var searchButton = document.getElementById("searchButton");
    searchButton.onclick = onSearchClick;
}

function onSearchClick() {
    var searchBox = document.getElementById("searchBox");
    var searchText = searchBox.value;
    var cars = search(searchText);
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

function carDetails(firstCar, car) {

}

function carDescription(car) {
    return car.ModelYear.toString() + " " + 
        car.MfrName + " " + car.Carline;
}

function search(searchText) {
    var carsFound = [];
    for (var i = 0; i < cars.length; i++) {
        var car = cars[i];
        var description = carDescription(car);
        description = description.toLowerCase();
        if (description.indexOf(searchText.toLowerCase()) > 0) {
            carsFound.push(car);
        }
    }
    return carsFound;
}