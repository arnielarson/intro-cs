function start() {
    displayThankYou("Lawn Mower");
}

function displayThankYou(purchased) {
    var message = purchased;
    var paragraph = document.getElementById("thanks");
    paragraph.textContent = message;
}