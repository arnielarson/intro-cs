// whether the game has been started
var started = false;

// birds that are in flight
var birds = [];

// pigs that are still around
var pigs = [];

// the current bird pulled back in the slingshot (or undefined if none)
var birdToLaunch = undefined;

// different types of birds.  to add more kinds, add an image to the HTML, add an ID, and list it here.
var birdKinds = [
    { name: "bird1", width: 40, height: 40 },
    { name: "bird2", width: 40, height: 40 },
    { name: "bird3", width: 40, height: 40 },
];

// different types of pigs  to add more kinds, add an image to the HTML, add an ID, and list it here.
var pigKinds = [
    { name: "pig1", width: 50, height: 50 },
    { name: "pig2", width: 50, height: 50 },
];

// information about where pigs appear
var pigArea = {
    x: 300,
    minPigs: 3,
    maxPigs: 5
};

// main animation function, called many times every second
function animate() {
    moveAllBirds();
    checkForCollisions();
    drawEverything();
}

// move all the birds
function moveAllBirds() {
    for (var i = 0; i < birds.length; i = i + 1) {
        var bird = birds[i];
        moveOneBird(bird);
    }        
}

// move a single bird
function moveOneBird(bird) {
    bird.x = bird.x + bird.dx;
    bird.y = bird.y + bird.dy;
    bird.dy = bird.dy + 0.25; // gravity
}

// if any birds hit a pig, remove both the pig and bird
function checkForCollisions() {
    for (var i = 0; i < birds.length; i++) {
        var bird = birds[i];
        var pigIndex = digBirdHitAnyPigs(bird);
        if (pigIndex != undefined) {
            collision(i, pigIndex);
            break;
        }
    }
}

// handle a collision by removing the bird and the pig
function collision(birdIndex, pigIndex) {
    pigs.splice(pigIndex, 1);
    birds.splice(birdIndex, 1);
}

// see if a bird hit any pigs
function digBirdHitAnyPigs(bird) {
    for (var i = 0; i < pigs.length; i++) {
        var pig = pigs[i];
        if (didBirdHitPig(bird, pig)) {
            return i;
        }
    }
    return undefined;
}

// see if a bird hit a pig
function didBirdHitPig(bird, pig) {
    var horizontalDistance = Math.abs(bird.x - pig.x);
    var combinedWidth = bird.width / 2 + pig.width / 2;
    
    var verticalDistance = Math.abs(bird.y - pig.y);
    var combinedHeight = bird.height / 2 + pig.height / 2;
    
    if (verticalDistance < combinedHeight &&
        horizontalDistance < combinedWidth) {
        return true;
    }
    
    return false;    
}

// convert degress (0..360) to radians (0..Math.PI*2)
function degreesToRadians(degrees) {
    return (degrees / 360) * Math.PI * 2;
}

// used to launch a bird given an angle and speed
function launchBirdAtAngleAndSpeed(angleInDegrees, speed) {
    // calculate how far pulled back in rubber band
    var angleInRadians = degreesToRadians(angleInDegrees);
    var radius = speed * 10;
    var dx = Math.cos(angleInRadians) * radius;
    var dy = Math.sin(angleInRadians) * radius;    
    var canvas = getCanvas();
    var slingshotTop = canvas.height - slingshot.height - slingshot.bottom;
    var slingshotLeft = slingshot.left;
    var x = slingshot.left - dx;
    var y = slingshotTop + dy;
    
    // add a bird to rubber band
    putBirdInRubberBand(x, y);
    
    // draw one frame so you see rubber band stretched
    drawEverything();
    
    // release the rubber band
    releaseRubberBand();
}

// puts a new bird in the rubber band
function putBirdInRubberBand(x, y) {
    if (birdToLaunch == undefined) {
        // pick a random bird kind
        var birdKindIndex = randomBetween(0, birdKinds.length - 1);
        
        // get info about that kind of bird
        var birdKind = birdKinds[birdKindIndex];
        
        // create bird object
        birdToLaunch = {
            x: x,
            y: y,
            width: birdKind.width,
            height: birdKind.height,
            name: birdKind.name
        };
    }
}

// moves the rubber band, if ia bird is loaded
function moveRubberBand(x, y) {
    if (birdToLaunch != undefined) {
        birdToLaunch.x = x;
        birdToLaunch.y = y;
    }
}

// releases the rubber band, if ia bird is loaded
function releaseRubberBand() {
    if (birdToLaunch != undefined) {
        var canvas = getCanvas();
        var slingshotTop = canvas.height - slingshot.height - slingshot.bottom;
        birdToLaunch.dx = slingshot.left - birdToLaunch.x;
        birdToLaunch.dy = slingshotTop - birdToLaunch.y;
        birdToLaunch.dx = birdToLaunch.dx / 10;
        birdToLaunch.dy = birdToLaunch.dy / 5;
        birds.push(birdToLaunch);
        birdToLaunch = undefined;
    }
}

// make a random integer between low and high, inclusive
function randomBetween(low, high) {
    var range = high - low + 1;
    var value = Math.floor(Math.random() * range);
    return low + value;
}

function makePig(canvas, pigKind) {
    // calculate available space for pigs
    var pigAreaWidth = canvas.width - pigArea.x;
    if (pigAreaWidth < 1) {
        pigAreaWidth = 1;
    }
    var pigAreaHeight = background.horizon;
    
    // calculate area where we can create a pig
    var pigAreaTop = canvas.height - pigAreaHeight + pigKind.height / 2;
    var pigAreaBottom = canvas.height - pigKind.height / 2;
    var pigAreaLeft = pigArea.x + pigKind.width / 2;
    var pigAreaRight = pigArea.x + pigAreaWidth - pigKind.width / 2;
    
    // place pig randomly within area
    var x = randomBetween(pigAreaLeft, pigAreaRight - 1);
    var y = randomBetween(pigAreaTop, pigAreaBottom - 1);
    
    // make pig object
    var pig = {
        name: pigKind.name,
        width: pigKind.width,
        height: pigKind.height,
        x: x,
        y: y - pigKind.height / 2
    };
    
    // add to pigs array
    pigs.push(pig);
}

// used to start (or restart) the game
function startGame() {
    // if we haven't started before
    if (!started) {        
        // resize game now
        resizeGame();
        
        // resize game when window is resized
        window.onresize = resizeGame;
        
        // start animating
        var framesPerSecond = 30;
        setInterval(animate, 1000 / framesPerSecond);
        started = true;        
    }    
    
    // remove any birds
    birds.splice(0, birds.length);
    
    // remove any pigs
    pigs.splice(0, pigs.length);
    
    // decide how many pigs to make
    var actualNumberOfPigs = randomBetween(pigArea.minPigs, pigArea.maxPigs);
    
    // make all the pigs
    canvas = getCanvas();    
    for (var i = 0; i < actualNumberOfPigs; i++) {
        // pick a random pig kind
        var pigKindIndex = randomBetween(0, pigKinds.length - 1);
        var pigKind = pigKinds[pigKindIndex];
        
        //  make a pig of that kind
        makePig(canvas, pigKind);
    }
}

// called when the game needs resizing, for example when the window size changes
function resizeGame() {
    var canvas = getCanvas();
    var panel = document.getElementById("panel");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - panel.clientHeight;
}
