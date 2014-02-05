function start() {
    
    var weights = [ 30, 20, 19, 17, 4, 34 ];
    
    var weightFound;
    
    for (var i = 0; i < weights.length; i = i + 1) {
        
        var weight = weights[i];
            
        if (weight < 10) {
            weightFound = weight;
            break;
        }
    }
}
