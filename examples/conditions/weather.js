

/* 
 * This function decides what I will do given the weather!
 */
function decide(weather) {
    if (weather=="cloudy") {
        alert("let's stay home");
    } else if (weather=="sunny") {
        alert("let's go outside!");
    } else {
        alert("unknown options: "+weather);
    }

}

