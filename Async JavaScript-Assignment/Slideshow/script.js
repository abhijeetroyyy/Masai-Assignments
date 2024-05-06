let slides= document.querySelectorAll("#slideshow img")
let interval;
let slideindex=0;
let images=[0,1,2,3,4,5,6,7,8,9,10]

function startslideshow(index) {
    slides.forEach(slides, i => {
        if (i === index) {
            slides.style.display = "block";
        } else {
            slides.style.display = "none";
        }
    });
}

function startslideshow(){
    interval=setInterval(function(){
        startslideshow(slideindex++)
    },1000)
}
function toggleslideshow(){
    if(interval){
        stopslideshow()
        interval=null;
    }
    else{
        startslideshow()
    }
}

function stopslideshow(){

}