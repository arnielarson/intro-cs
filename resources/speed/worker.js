function startWorker(event) {
    var data = JSON.parse(event.data);
    var algorithm = data.algorithm;
    var start = data.start;
    var end = data.end;
    var input = data.input;
    var total;
    var startDate = new Date();
    if (algorithm == "algorithm1") {
        total = algorithm1(start, end, input);
    } else if (algorithm == "algorithm2") {
        total = algorithm2(start, end, input);
    } else if (algorithm == "algorithm3") {
        total = algorithm3(start, end, input);
    } else {
        total = undefined;
    }
    var endDate = new Date();
    var timeSpent = endDate - startDate;
    data.total = total;
    data.timeSpent = timeSpent;
    postMessage(JSON.stringify(data));
}

function algorithm1(start, end, input) {
    return 0;
}

function algorithm2(start, end, input) {
    var total = 0;
    for (var i = start; i <= end; i = i + 1) {
        total = total + i;
    }    
    return total;
}

function algorithm3(start, end, input) {
    var total = 0;
    for (var i = start; i <= end; i = i + 1) {
        for (var j = 0; j < input; j = j + 1) {
            total = total + j;
        }
    }    
    return total;        
}    

onmessage = startWorker;