var bits = [128, 64, 32, 16, 8, 4, 2, 1];

function start() {
    var byteElement = document.getElementById("byte");
    byteElement.onkeyup = byteChanged;

    for (var i = 0; i < bits.length; i++) {
        var bit = bits[i];
        var labelElement = getLabelElement(bit);
        labelElement.onclick = createToggleFunction(bit);
        var imageElement = getImageElement(bit);
        imageElement.onclick = createToggleFunction(bit);
    }

    update();
}

function createToggleFunction(bit) {
    return function (event) {
        toggleBit(bit);
    };
}

function toggleBit(bit) {
    value = getValue();
    if (value == undefined) {
        value = 0;
    }
    if ((value & bit) != 0) {
        value &= ~bit;
    } else {
        value |= bit;
    }
    var byteElement = document.getElementById("byte");
    byteElement.value = value.toString();
    update();
}

function byteChanged(event) {
    update();
}

function getValue() {    
    var byteElement = document.getElementById("byte");
    var text = byteElement.value; 
    if (isNumber(text)) {
        var value = parseFloat(text);
        if (Math.floor(value) == value && value >= 0 && value <= 255) {
            return value;
        }
    }    
    return undefined;
}

function getLabelElement(bit) {
    var labelId = "label_" + bit.toString();
    var labelElement = document.getElementById(labelId);
    return labelElement;
}

function getImageElement(bit) {
    var imageId = "img_" + bit.toString();
    var imageElement = document.getElementById(imageId);
    return imageElement;
}

function update() {
    value = getValue();
    var haveValue;
    if (value == undefined) {
        value = 0;
        haveValue = false;
    } else {
        haveValue = true;
    }
    var html = "";
    var math = "";
    for (var i = 0; i < bits.length; i++) {
        var bit = bits[i];
        var imageElement = getImageElement(bit);
        var labelElement = getLabelElement(bit);
        var bitSet = (value & bit) != 0;
        if (bitSet) {
            if (math.length > 0) {
                math += " + ";
            }
            math += bit.toString();
            html += "<span class=\"text-success\">1</span>";
            imageElement.src = "up.png";
            labelElement.className = "label label-success clickable";
        } else {
            if (html.length > 0) {
                html += "<span class=\"text-default\">0</span>";
            }
            imageElement.src = "down.png";
            labelElement.className = "label label-default clickable";
        }
    }
    if (html.length == 0) {
        html += "<span class=\"text-default\">0</span>";
    }

    var mathElement = document.getElementById("math");
    if (math.indexOf("+") >= 0) {
        mathElement.innerHTML = math + " = " + value.toString();
    } else {
        mathElement.innerHTML = "&nbsp;";
    }

    var binaryElement = document.getElementById("binary");
    if (haveValue) {
        binaryElement.innerHTML = html;
    } else {
        binaryElement.innerHTML = "&nbsp;";
    }

}

function isNumber(text) {
    if (text.length == 0) {
        return false;
    }
    var start = "0".charCodeAt(0);
    var end = "9".charCodeAt(0);
    var period = ".".charCodeAt(0);
    for (var i = 0; i < text.length; i++) {
        var ch = text.charCodeAt(i);
        if (ch != period && (ch < start || ch > end)) {
            return false;
        }
    }
    return true;
}
