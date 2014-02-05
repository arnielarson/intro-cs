function triangleArea(ax, ay, bx, by, cx, cy) {
    var t1 = ax * (by - cy);
    var t2 = bx  * (cy - ay);
    var t3 = cx * (ay - by);
    var sum = t1 + t2 + t3;
    var area = Math.abs(sum / 2);
    return area;
}

function showYearOnPage(year) {
    var grade6 = jQuery("#grade6");
    grade6.text(year.grade6 + "," + year.grade7);
    var text = grade6.text();
    var grade7 = jQuery("#grade7");
    grade7.text(year.grade7);    
    var grade8 = jQuery("#grade8");
    grade8.text(year.grade8);
    
    var table = jQuery("#students");
    
    var x = table.html();
    table.html("<tr><td>" + year.grade6 + "what</td></tr>")
}

function drawText(text, color, x, y) {
    var canvas = document.getElementById("mainCanvas");
    var context = canvas.getContext("2d");
    context.font = "20pt Calibri";
    context.fillStyle = color;
    context.textBaseline = "top";
    context.fillText(text, x, y);
}

function drawMainCanvas() {
    drawText("hello", "red", 0, 0);
}

function onLoad() {
    var area = triangleArea(16, 19, 23, 30, 50, 25);    
    
    var year = {
        grade6: 66,
        grade7: 74,
        grade8: 74,
        grade9: 82,
        grade10: 81,
        grade11: 79,
        grade12: 76
    };
    
    showYearOnPage(year);    
}
