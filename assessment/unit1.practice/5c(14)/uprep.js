function start() {
    var size = findStandardClothingSize(9);
}

function findStandardClothingSize(weight) {
    if (weight >= 5 && weight <= 8) {
        return "NB";
    } else if (weight > 8 && weight <= 12.5) {
        return "0-3 mo";
    } else if (weight > 12.5 && weight <= 16.5) {
        return "3-6 mo";
    } else if (weight > 16.5 && weight <= 20.5) {
        return "6-9 mo";
    } else if (weight > 20.5 && weight <= 24.5) {
        return "9-12 mo";
    } else if (weight > 24.5 && weight <= 27.5) {
        return "18 mo";
    } else if (weight > 27.5 && weight <= 30) {
        return "24 mo";
    } else {
        return undefined;
    }
}