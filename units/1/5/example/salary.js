// First create the players - each player has a name and a salary
var montero = {
    name: "Montero",
    salary: 600000
};
var fernandez = {
    name: "Fernandez",
    salary: 300000
};
var gspurning = {
    name: "Gspurning",
    salary: 200000
};
var rosales = {
    name: "Rosales",
    salary: 200000
};

// Next create an array of the players
var players = [
    montero,
    fernandez,
    gspurning,
    rosales
];

function totalSalary() {
    var total = 0;
    var numberOfPlayers = players.length;

    for (var i = 0; i < numberOfPlayers; i = i + 1) {
        var player = players[i];
        total = total + player.salary;        
    }
    return total;    
}

function fill() {

    // Sum up the total of the salaries and write on the page
    var total = totalSalary();
    var span = document.getElementById("salary");
    span.textContent = total.toString();

    // Fill in the HTML page with each Players name and salary
    for (var i = 0; i < players.length; i++) {
        var nameid = "name" + i;
        var salaryid = "salary" + i;
        var name = document.getElementById(nameid);
        var player = players[i];
        name.textContent=player.name;
        var salary = document.getElementById(salaryid);
        salary.textContent=player.salary;
    }
}
