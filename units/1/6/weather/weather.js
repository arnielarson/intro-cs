

/* 
 * This function decides what I will do given the weather
 */
function decide(condition) {
    if (condition=="cloudy") {
        display("Do homework");
    } else {
        display("How should I know?");
    }

}

/*
 *  This function displays a message to the element with id "activity"
 */
function display(message) {
    document.getElementById("activity").textContent = message;
}

