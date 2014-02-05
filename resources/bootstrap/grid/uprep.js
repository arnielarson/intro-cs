var players = [
    {
        name: "Bob",
        score: 1
    },
    {
        name: "Cindy",
        score: 2
    },
    {
        name: "Fred",
        score: 0
    }
];

function start() {
    var playersElement = document.getElementById("players");

    var html = "";
    for (var i = 0; i < players.length; i = i + 1) {
        var player = players[i];
        html = html + "<tr><td>" + player.name + "</td><td>" + 
            player.score.toString() + "</td></tr>";
    }

    playersElement.innerHTML = html;    
}

function start() {
    // get an element using its id
    var someElement = document.getElementById("someid");

    // if the element has the style named "hidden"
    if (someElement.className == "hidden") {
        // switch to the style named "visible"
        someElement.className = "visible";
    } else {
        // otherwise switch to the style named "hidden"
        someElement.className = "hidden";
    }
}