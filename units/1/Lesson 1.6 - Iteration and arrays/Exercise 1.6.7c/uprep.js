function start() {
    var canvas = document.getElementById("mainCanvas");
    var context = canvas.getContext("2d");
    
    var dark = false;
    
    for (var y = 0; y < 400; y = y + 50) {
        
        dark = !dark;
            
        for (var x = 0; x < 400; x = x + 50) {
            
            dark = !dark;
        
            // fill a rectangle
            if (dark) {
                context.fillStyle = "red";                
            } else {
                context.fillStyle = "black";                                
            }
            var width = 50;
            var height = 50;
            context.fillRect(x, y, width, height);
        }
    }
}