function start() {
    var canvas = document.getElementById("mainCanvas");
    var context = canvas.getContext("2d");
    drawWeather(context);
}

function drawWeather(context) {
    var canvas = context.canvas;
    var date = weather[0].DATE;
    for (var i = 0; i < weather.length; i++) {
        date = weather[i].DATE;
        context.fillStyle = "blue";
        var day = weather[i];
        var precipitation = day.PRCP;
        var y = canvas.height - precipitation;
        context.fillRect(i, y, 1, precipitation);
        var y = canvas.height - day.TMAX;
        context.fillStyle = "green";
        context.fillRect(i-1, y, 3, 1);
        var y = canvas.height - day.TMIN;
        context.fillStyle = "red";
        context.fillRect(i-1, y, 3, 1);
    }
}