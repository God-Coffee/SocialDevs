const menu = document.querySelector(".menu");
var i = 1;

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

function bait(){
    alert("Sujestão enviada com sucesso!")
}