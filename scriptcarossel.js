const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
const menu = document.querySelector(".menu");
var i = 1

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 800}px)`;
}

setInterval(carrossel, 2800);

function timer(){
    menu.style.display = "inline"
}

function MenuInterruptor(){
    if(i == 1){
        menu.style.transform = "translateY(100%)";
        i = 0;
    } else{
        menu.style.transform = "translateY(0%)";
        i = 1;
    }
}

function blog1(){
    window.location.replace("indexBlog.html");
}