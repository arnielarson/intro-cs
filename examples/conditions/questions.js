/*s
 *  Javascript Game - guesses a number between 
 *
 */

// Data that describes the game
var game = {
    tries : 0,
    maxtries : 10,
    number : undefined,
    min : 0,
    max : 100,
    heckle : false,
};

var heckler = {   
    heckles : [
        "Come on - stop being ridiculous",
        "Are you even trying?",
        "Is that the best you can do?",
        "Are you out of your mind?",
        "What's wrong with you?",
        "Oh come on, get your act together",
        "This is a travesty",
        "Are you serious?",
        "Obviously, you are not a Computer Scientist",
        "Give me a break",
        "You are a silly goose",
        "Is that all you've got?"
    ],
    
    getHeckle : function() {
        var randomIndex = Math.round(Math.random()*(this.heckles.length -1 ));
        return this.heckles[randomIndex];
    }
}

// Reset and play a new game
function play() {
    if (game.number==undefined) {
        setup();
    } else if (confirm("Are you sure you'd like to start a new game?")) {
        setup();
    }
}

// Set up a new game
function setup() {
    game.number=Math.round(Math.random()*game.max);
    game.tries=0;
    message("Guess a number between "+game.min+" and "+game.max, "main");
    message("Ok then.  Lets play!","msg");
    resetInputs();
}

function toggleHeckle() {
    game.heckle=document.getElementById("hecklemode").checked;
}

// heckle -
// set threshold = -1 
function heckle(threshold) {
    if (!game.heckle) {
        return
    }
    if (undefined==threshold || threshold < 0) {
        alert(heckler.getHeckle());
    } else if (Math.random()>threshold) {
        alert(heckler.getHeckle());
    }
}

function checkGuess() {
    
    
}

// Process user's guess
function guess() {
    if (game.number==undefined) {
        return;
    }
    var guess = parseInt(document.getElementById('guess').value);
    if (isNaN(guess)) {
        message("You must guess a number!", "msg");
        heckle();
        return;
    }
    if (guess<game.min) {
        message("Your guess is smaller than "+game.min+".", "msg");
        heckle();
        return;
    }
    if (guess>game.max) {
        message("Your guess is larger than "+game.max+".", "msg");
        heckle();
        return;
    }
    
    // Play the game -
    // 1. Update the number of tries
    // 2. If exceeded Max Tries - you lose!
    // 3. If guessed correctly - you win!
    // 4. If greater or less than answer, update game state
    updateTries();
    if (game.tries>=game.maxtries) {
        
    } else if (guess==game.number) {
        message("Congratulations - You guessed correctly!","main");
        message("It took you "+game.tries+" tries", "msg");
        game.number=undefined;
    } else if (guess < game.number) {

        message("Your guess is LESS than my number", "msg");
        heckle(.5);
    } else if (guess > game.number) {
        message("Your guess is GREATER than my number", "msg");
        heckle(.5)
    } else {
        message("debug: your "+guess);
    }
}

// Updates the game messages
function message(msg, id) {
    document.getElementById(id).textContent=msg;
}

function updateTries() {
    game.tries++;
    document.getElementById("tries").textContent=game.tries;
}

function resetInputs() {
    document.getElementById("tries").textContent=0;
    document.getElementById("guess").value="";
}
