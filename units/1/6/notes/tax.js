function calculateSalesTax(amount, city) {
    var inSeattle = true;
    var inWinthrop = false;
    var rate;
    if (inSeattle) {
        rate = 0.095;
    } else if (inWinthrop) {
        rate = 0.078;
    } else {
        return undefined;
    }
    var tax = amount * rate;
    var total = amount + tax;
    return total;
}

function start() {
    var seattle = calculateSalesTax(2.00, "Seattle");
    var winthrop = calculateSalesTax(2.00, "Winthrop");
    var olympia = calculateSalesTax(2.00, "Olympia");
}
