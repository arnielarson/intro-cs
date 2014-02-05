function start() {
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
    var players = [
        montero,
        fernandez,
        gspurning,
        rosales
    ];
    
    var total = totalSalary(players);
    
    var span = document.getElementById("salary");
    span.textContent = total.toString();
}

function totalSalary(players) {
    var total = 0;
    var numberOfPlayers = players.length;
    
    for (var i = 0; i < numberOfPlayers; i = i + 1) {
        var player = players[i];
        total = total + player.salary;        
    }
    
    return total;    
}