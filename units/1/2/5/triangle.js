function triangleArea(ax, ay, bx, by, cx, cy) {
    var t1 = ax * (by - cy);
    var t2 = bx  * (cy - ay);
    var t3 = cx * (ay - by);
    var sum = t1 + t2 + t3;
    var area = Math.abs(sum / 2);
    return area;
}

function onLoad() {
    var area1 = triangleArea(16, 19, 23, 30, 50, 25);    
    var area2 = triangleArea(19, 22, 13, 31, 48, 19);    
}
