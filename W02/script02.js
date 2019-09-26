var w;

function startWorker() {
    if (typeof (Worker) !== "undefined") {
        if (typeof (w) == "undefined") {
            w = new Worker("worker.js");
        }
        w.onmessage = function (event) {
            document.getElementById("abc").innerHTML = "Random = " + event.data;
            document.getElementById("result").innerHTML = event.data + Number(document.getElementById("num1").value) + Number(document.getElementById("num2").value);
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}