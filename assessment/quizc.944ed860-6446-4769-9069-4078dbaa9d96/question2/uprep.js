function start() {
    
    var prices = [ 30, 20, 9, 17, 4, 34 ];
    
    var priceFound;
    
    for (var i = 0; i < prices.length; i = i + 1) {
        
        var price = prices[i];
            
        if (price < 10) {
            priceFound = price;
            break;
        }
    }
}
