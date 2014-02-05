function changeUsingRemainder(cents) {
    var remainder = cents % 25;
    var quarters = (cents - remainder) / 25;
    cents = remainder;
    
    var remainder = cents % 10;
    var dimes = (cents - remainder) / 10;
    cents = remainder;    
    
    var remainder = cents % 5;
    var nickels = (cents - remainder) / 5;
    cents = remainder;
    
    var pennies = cents;
    
    return quarters + dimes + nickels + pennies;
}

function changeUsingFloor(cents) {
    var quarters = Math.floor(cents / 25);
    cents = cents - (quarters * 25);
    
    var dimes = Math.floor(cents / 10);
    cents = cents - (dimes * 10);
    
    var nickels = Math.floor(cents / 5);
    cents = cents - (nickels * 5);
    
    var pennies = cents;
    
    return quarters + dimes + nickels + pennies;    
}

function onLoad() {
    var x = Math.ceil(1.5);
    var coins1 = changeUsingRemainder(97);
    var coins2 = changeUsingFloor(97);
}