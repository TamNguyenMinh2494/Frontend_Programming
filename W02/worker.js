var i = 0;
function timedCount() {
    i = i + 2;
    result = i;
    postMessage(i);
    setTimeout("timedCount()", 5000); //wait 5s
}

timedCount();