(function () {
    time();
})();

function time() {
    let systemTime = new Date();
    document.getElementById("time").innerHTML = systemTime.toLocaleString();
}