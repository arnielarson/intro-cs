function start() {
    var area;
    area = areaOfCircle(1);
    area = areaOfCircle(2);
}

function areaOfCircle(radius) {
    var radiusSquared = radius * radius;
    var area = Math.PI * radiusSquared;
    return area;
}
