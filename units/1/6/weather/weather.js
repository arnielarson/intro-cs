
var weather;
var season;

/* 
 * This function decides what I will do today
 */
function decide() {
    var message;
    if (weather=="snowy" && season=="winter") {
        message = "It's a winter wonderland, let's go skiing!!";
    } else if (weather=="rainy" && season=="winter") {
        message = "Yuck - I'm playing video games all day";
    } else {
        // This is also the default setting..
        message = "How should I know?";
    }
    display(message, "activity")
}

function selectWeather(input) {
    weather = input;
    display("The weather is "+input, "weather");
}

function selectSeason(input) {
    season = input;
    display("The season is "+input, "season");
}

/*
 *  This function displays a message to the an element with specified id
 */
function display(message, id) {
    document.getElementById(id).textContent = message;
}

