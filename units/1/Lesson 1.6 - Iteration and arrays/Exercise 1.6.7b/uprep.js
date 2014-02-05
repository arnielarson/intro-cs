function start() {
    var canvas = document.getElementById("mainCanvas");
    var context = canvas.getContext("2d");
    
    // y starts at 40 and then increases 50 at a time
    for (var y = 40; y < canvas.height; y = y + 50) {
            
        // x starts at 10 and then increases 20 at a time
        for (var x = 10; x < canvas.width; x = x + 20) {
        
            // fill a rectangle
            context.fillStyle = "red";
            var width = 15;
            var height = 15;
            context.fillRect(x, y, width, height);
        }
    }
}
