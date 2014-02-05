function start() {
    var canvas = document.getElementById("mainCanvas");
    var context = canvas.getContext("2d");
    
    // x starts at 10 and then increases 20 at a time
    for (var x = 10; x < canvas.width; x = x + 20) {
        
        // fill a rectangle
        context.fillStyle = "red";
        var width = 15;
        var height = 15;
        var y = 30;
        context.fillRect(x, y, width, height);
    }
}
