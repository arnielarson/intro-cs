var workers = [];
var results = [];

var algorithm1Text = 
    "function algorithm1(input) {\n" +
    "    return 0;\n" +
    "}";

var algorithm2Text = 
    "function algorithm2(input) {\n" +
    "    var total = 0;\n" +
    "    for (var i = 0; i < input; i = i + 1) {\n" +
    "        total = total + i;\n" + 
    "    }\n" +
    "    return total;\n" +
    "}";

var algorithm3Text = 
    "function algorithm3(input) {\n" +
    "    var total = 0;\n" +
    "    for (var i = 0; i < input; i = i + 1) {\n" +
    "        for (var j = 0; j < input; j = j + 1) {\n" + 
    "            total = total + i;\n" + 
    "        }\n" + 
    "    }\n" +
    "    return total;\n" +
    "}";

function start() {
    var startButton = document.getElementById("start");
    startButton.onclick = startButtonClicked;
    var clearButton = document.getElementById("clear");
    clearButton.onclick = clearButtonClicked;
    var algorithmElement = document.getElementById("algorithm");
    algorithmElement.onchange = algorithmChanged;
    displayResults();
    displayAlgorithm();
}

function startButtonClicked() {
    clearWorkers();
    startWorkers();
    displayResults();
}

function startWorkers() {
    var inputElement = document.getElementById("input");
    var input = parseFloat(inputElement.value);
    var workersElement = document.getElementById("workers");
    var workers = parseFloat(workersElement.value);
    var algorithmElement = document.getElementById("algorithm");
    var algorithm = algorithmElement.value;
    
    var part = input / workers;
    for (var i = 0; i < workers; i = i + 1) {
        var start = i * part;
        var end = start + part - 1;
        addWorker(algorithm, start, end, input);
    }
}

function clearWorkers() {
    for (var i = 0; i < workers.length; i = i + 1) {
        var worker = workers[i]
        worker.terminate();
    }
    workers.splice(0, workers.length);
    results.splice(0, results.length);
}

function addWorker(algorithm, start, end, input) {
    var worker = new Worker("worker.js");
    worker.onmessage = gotMessageFromWorker;
    var message = {
        algorithm: algorithm,
        start: start,
        end: end,
        input: input,
        index: workers.length
    };
    worker.postMessage(JSON.stringify(message));
    workers.push(worker);
    results.push(message);
}

function gotMessageFromWorker(event) {
    var data = JSON.parse(event.data);
    results[data.index] = data;
    displayResults();
}

function displayResults() {
    if (results.length == 0) {
        return;
    }

    var total = undefined;
    var done = 0;
    var progressHTML = "";    
    for (var i = 0; i < results.length; i = i + 1) {
        var result = results[i];
        if (result.timeSpent == undefined) {
            progressHTML += " <span class=\"label label-danger\">working</span>";
        } else {
            progressHTML += " <span class=\"label label-success\">done</span>";
            if (total == undefined || result.timeSpent > total) {
                total = result.timeSpent;
            }
            done++;
        }
    }

    var progress = document.getElementById("progress");

    if (done == results.length && results.length > 0) {
        progress.innerHTML = "";
        recordResults(results.length, total);
    } else {
        progress.innerHTML = progressHTML;
    }
}

function recordResults(workers, total) {
    var algorithmElement = document.getElementById("algorithm");
    var algorithm = algorithmElement.value;

    var inputElement = document.getElementById("input");
    var input = parseFloat(inputElement.value);

    var className;
    if (algorithm == "algorithm1") {
        className = "success";
    } else if (algorithm == "algorithm2") {
        className = "warning";
    } else if (algorithm == "algorithm3") {
        className = "danger";
    }
    var tbodyElement = document.getElementById("results");
    var seconds = total / 1000;
    var secondsPerInput = input / seconds;
    if (!isFinite(secondsPerInput)) {
        secondsPerInput = 0;
    }
    var row = [
        algorithm, 
        workers.toString(),
        input.toString(), 
        seconds.toString(), 
        secondsPerInput.toString()
    ];
    var rowHTML = "<tr class=\"" + className + "\"><td>" + row.join("</td><td>") + "</td></tr>";
    tbodyElement.innerHTML = rowHTML + tbodyElement.innerHTML;
}


function algorithmChanged(event) {
    displayAlgorithm();
}

function displayAlgorithm() {
    var algorithmElement = document.getElementById("algorithm");
    var algorithm = algorithmElement.value;
    var text;
    if (algorithm == "algorithm1") {
        text = algorithm1Text;
    } else if (algorithm == "algorithm2") {
        text = algorithm2Text;
    } else if (algorithm == "algorithm3") {
        text = algorithm3Text;
    }
    var codeElement = document.getElementById("code");
    code.textContent = text;
}

function clearButtonClicked() {
    clearWorkers();
    var tbodyElement = document.getElementById("results");
    tbodyElement.innerHTML = "";
    var progress = document.getElementById("progress");
    progress.innerHTML = "";
}