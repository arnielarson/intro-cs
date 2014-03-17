function calculateSalesTax(amount, city) {
    var inSeattle = (city == "Seattle");
    var inWinthrop = (city == "Winthrop");
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

function calculate() {
    var city = document.getElementById("city").value;
    var amount = parseFloat(document.getElementById("amount").value);
    var tax = calculateSalesTax(amount, city);
    document.getElementById("tax").textContent=tax;
}
