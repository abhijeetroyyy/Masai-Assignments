const display = document.getElementById("display");
const start = document.getElementById("startbtn");
const pause = document.getElementById("pausebtn");
const reset = document.getElementById("resetbtn");
start.addEventListener("click", starttimeout);
pause.addEventListener("click", pausetimeout);
reset.addEventListener("click", resettimeout);
let timer;
let second = 0
function starttimeout() {
    timer = setInterval(updatetimer, 1000)
}
function updatetimer(){
    second++;
    const displaymin=Math.floor(second/60);
    const displaysec=second%60;
    display.innerHTML=`<h1>${displaymin.toString().padStart(2,"0")}:${displaysec.toString().padStart(2,"0")}</h1>`;    
}
function pausetimeout() {
    clearInterval(timer);
}
function resettimeout() {
    clearInterval(timer);
    second = 0; 
    display.innerHTML=`<h1>00:00</h1>`;
}