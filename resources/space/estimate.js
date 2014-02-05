function estimateValue(value) {
    var what = Object.prototype.toString.call(value);
    console.log(what);
    if (what == "[object String]") {
        return estimateString(value);
    }
    if (what == "[object Array]") {
        return estimateArray(value);
    }
    if (what == "[object Object]") {
        return estimateObject(value);
    }
    if (what == "[object Number]") {
        return estimateNumber(value);
    }
    if (what == "[object Null]") {
        return estimateNull(value);
    }
    if (what == "[object Boolean]") {
        return estimateNull(value);
    }
    if (what == "[object Undefined]") {
        return estimateUndefined(value);
    }
    return undefined;
}

function estimateObject(value) {
    var size = 16;
    for (var property in value) {
        var propertyValue = value[property];
        var propertySize = estimateValue(propertyValue);
        if (propertySize == undefined) {
            return undefined;
        }
        size += propertySize;
    }
    return size;
}

function estimateArray(value) {
    var size = 16;
    for (var i = 0; i < value.length; i++) {
        var elementValue = value[i];
        var elementSize = estimateValue(elementValue);
        if (elementSize == undefined) {
            return undefined;
        }
        size += elementSize;
    }
    return size;
}

function estimateNumber(value) {
    return 8;
}

function estimateBoolean(value) {
    return 8;
}

function estimateNull(value) {
    return 8;
}

function estimateUndefined(value) {
    return 8;
}

function estimateString(value) {
    return 16 + value.length * 2;
}