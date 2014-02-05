function start() {
    // Examples: More on arrays
    changePlayer();
    addPlayer();
    insertPlayer();
    removePlayer();
    
    // Examples: More on loops
    findPlayerIndex();
    removeThreeFirstPlayers();
    removePlayersUntilTwoLeft();    
}

function changePlayer() {
    var players = [
        "Montero",
        "Fernandez",
        "Gspurning",
        "Rosales"
    ];
    
    // change "Fernandez" to "Alonso"
    players[1] = "Alonso";
}

function addPlayer() {
    var players = [
        "Montero",
        "Fernandez",
        "Gspurning",
        "Rosales"
    ];
    
    // add "Alonso" to end of array
    players.push("Alonso");
}

function insertPlayer() {
    var players = [
        "Montero",
        "Fernandez",
        "Gspurning",
        "Rosales"
    ];
    
    // insert "Alonso" at index 2 (after "Fernandez")
    players.splice(2, 0, "Alonso");
}

function removePlayer() {
    var players = [
        "Montero",
        "Fernandez",
        "Gspurning",
        "Rosales"
    ];
    
    // remove "Gspurning" at index 2
    players.splice(2, 1);
}

function findPlayerIndex() {
    var players = [
        "Montero",
        "Fernandez",
        "Gspurning",
        "Rosales"
    ];
    
    // find index of "Gspurning"
    var lookingFor = "Gspurning";
    var foundAt;
    for (var i = 0; i < players.length; i = i + 1) {
        var player = players[i];
        if (player == lookingFor) {
            // found player
            foundAt = i;
            break;
        }
    }
}

function removeThreeFirstPlayers() {
    var players = [
        "Montero",
        "Fernandez",
        "Gspurning",
        "Rosales"
    ];
    
    // repeat three times
    for (var i = 1; i <= 3; i = i + 1) {
        // remove first player
        players.splice(0, 1);        
    }
}

function removePlayersUntilTwoLeft() {
    var players = [
        "Montero",
        "Fernandez",
        "Gspurning",
        "Rosales"
    ];
    
    // keep repeating
    for (;;) {
        
        // when only two players left
        if (players.length == 2) {
            // stop loop
            break;
        }
        
        // remove first player
        players.splice(0, 1);        
    }
}