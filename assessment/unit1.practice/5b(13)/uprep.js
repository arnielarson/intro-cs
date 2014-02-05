function start() {
    var size = findStandardClothingSize(36);
}

function findStandardClothingSize(waist) {
    if (waist == 28 || waist == 30) {
        return 38;
    } else if (waist == 32 || waist == 34) {
        return 40;
    } else if (waist == 36 || waist == 38) {
        return 42;
    } else if (waist == 40 || waist == 42) {
        return 44;
    } else {
        return undefined;
    }
}