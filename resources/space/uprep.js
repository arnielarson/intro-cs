var standardUnits = [
    {
        id: "std_byte",
        name: "byte",
        abbreviation: " bytes",
        factor: 1,
        conversion: ""
    },
    {
        id: "std_bit",
        name: "bit",
        abbreviation: " bits",
        factor: 1/8,
        conversion: ""
    },
];

var memoryUnits = [
    {
        id: "mem_kb",
        name: "Kilobyte",
        abbreviation: "KB",
        factor: 1024,
        conversion: "1024"
    },
    {
        id: "mem_mb",
        name: "Megabyte",
        abbreviation: "MB",
        factor: Math.pow(1024, 2),
        conversion: "1024^2"
    },
    {
        id: "mem_gb",
        name: "Gigabyte",
        abbreviation: "GB",
        factor: Math.pow(1024, 3),
        conversion: "1024^3"
    },
    {
        id: "mem_tb",
        name: "Terrabyte",
        abbreviation: "TB",
        factor: Math.pow(1024, 4),
        conversion: "1024^4"
    },
];

var networkUnits = [
    {
        id: "net_kbit",
        name: "Kilobit",
        abbreviation: "KBit",
        factor: 1/8*1024,
        conversion: "1024"
    },
    {
        id: "net_mbit",
        name: "Megabit",
        abbreviation: "MBit",
        factor: 1/8*Math.pow(1024, 2),
        conversion: "1024^2"
    },
    {
        id: "net_gbit",
        name: "Gigabit",
        abbreviation: "GBit",
        factor: 1/8*Math.pow(1024, 3),
        conversion: "1024^3"
    },
    {
        id: "net_tbit",
        name: "Terrabit",
        abbreviation: "TBit",
        factor: 1/8*Math.pow(1024, 4),
        conversion: "1024^4"
    },
];

var diskUnits = [
    {
        id: "disk_kb",
        name: "Kilobyte",
        abbreviation: "KB",
        factor: 1000,
        conversion: "1000"
    },
    {
        id: "disk_mb",
        name: "Megabyte",
        abbreviation: "MB",
        factor: Math.pow(1000, 2),
        conversion: "1000^2"
    },
    {
        id: "disk_gb",
        name: "Gigabyte",
        abbreviation: "GB",
        factor: Math.pow(1000, 3),
        conversion: "1000^3"
    },
    {
        id: "disk_tb",
        name: "Terrabyte",
        abbreviation: "TB",
        factor: Math.pow(1000, 4),
        conversion: "1000^4"
    },
];

function start() {
    var spaceElement = document.getElementById("space");
    spaceElement.onkeyup = spaceChanged;
    var estimateElement = document.getElementById("estimate");
    estimateElement.onclick = estimateClicked;
    update();
}

function estimateClicked(event) {
    var codeElement = document.getElementById("code");
    var errorElement = document.getElementById("error");
    var code = codeElement.value;
    try {
        var actualCode = "(function () { return " + code + "; })();";
        var value = eval(actualCode);
    } catch (err) {
        errorElement.textContent = err;
        return;
    }
    var space = estimateValue(value);
    if (space == undefined) {
        errorElement.textContent = "Too complicated";
        return;
    } 
    errorElement.textContent = "";        
    console.log("estimate: " + space);
    var spaceElement = document.getElementById("space");
    spaceElement.value = space.toString();
    update();
}

function spaceChanged(event) {
    update();
}

function getValue(text) {
    text = text.trim();
    var unitFound = findUnit(networkUnits, text);
    if (unitFound == undefined) {
        unitFound = findUnit(memoryUnits, text);
    }
    if (unitFound != undefined) {
        text = removeUnit(unitFound, text);
    }
    text = text.trim();
    if (!isNumber(text)) {
        return undefined;
    }
    var value = parseFloat(text);
    if (unitFound != undefined) {
        value = value * unitFound.factor;
    }    
    return value;
}

function removeUnit(unit, text) {
    var index = findUnitIndex(unit, text);
    return text.substr(0, index) + text.substr(index + unit.abbreviation.length);
}

function findUnitIndex(unit, text) {
    return text.toLowerCase().indexOf(unit.abbreviation.toLowerCase());
}

function findUnit(units, text) {
    var unitFound;
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        var index = findUnitIndex(unit, text);
        if (index >= 0) {
            unitFound = unit;
            break;
        }
    }
    return unitFound;
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

function getSize(unit, value) {
    if (value == undefined) {
        return unit.abbreviation;
    } else {
        var scaled = Math.round(value / unit.factor);
        var formatted =  scaled.toString() + " " + unit.abbreviation; 
        return formatted;
    }
}

function getDescription(unit, where) {
    if (unit.conversion != "") {
        var description = "A " + unit.name;
        if (where != "") {
            description = description + " " + where;
        }
        description = description + " is " + 
            unit.conversion + " bytes";
        if (unit.factor > 1024) {
            description = description + " (" + unit.factor.toString() + ")";
        }
        return description;
    } else {
        return "";
    }
}

function update() {
    var spaceElement = document.getElementById("space");
    var value = getValue(spaceElement.value);
    updateUnits(standardUnits, value, "");
    updateUnits(memoryUnits, value, "in memory");
    updateUnits(diskUnits, value, "on disk");
    updateUnits(networkUnits, value, "");
}

function updateUnits(units, value, where) {
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        var element0 = document.getElementById(unit.id + "_value");
        element0.textContent = getSize(unit, value);
        var element1 = document.getElementById(unit.id + "_desc");
        element1.innerHTML = getDescription(unit, where);
    }
}
