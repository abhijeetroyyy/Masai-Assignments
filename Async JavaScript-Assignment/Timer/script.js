let timeremaing;
let intervalid;
function starttimeout() {
    let hours = Number(document.getElementById("hours").value);
    let minutes = Number(document.getElementById("minutes").value);
    let seconds = Number(document.getElementById("seconds").value);
    timeremaing = hours * 3600 + minutes * 60 + seconds;
    // console.log(`${hours} , ${minutes} , ${seconds} , ${timeremaing}`);
    intervalid = setInterval(function () {
        timeremaing--;
        let hour = Math.floor(timeremaing / 3600);
        let minute = Math.floor((timeremaing % 3600) / 60);
        let second = timeremaing % 60;
        document.getElementById("hours").value = hour;
        document.getElementById("minutes").value = minute;
        document.getElementById("seconds").value = second;
        if (timeremaing == 0) {
            clearInterval(intervalid);
            intervalid = null;
            alert("Time is up");
        }
    }, 1000)
}
function pausetimeout() {
    clearInterval(intervalid);
    intervalid = null;
}
function resettimeout() {
    pausetimeout();
    document.getElementById("hours").value = 0;
    document.getElementById("minutes").value = 0;
    document.getElementById("seconds").value = 0;
}