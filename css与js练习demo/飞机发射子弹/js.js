var plane = document.getElementById("plane");
var bullet = document.getElementsByClassName("bullet");
document.onkeydown = function (e) {
    var event = window.event || e;
    switch (event.keyCode) {
        case 37:
            plane.style.left = plane.offsetLeft - 10 + "px";
            break;
        case 38:
            plane.style.top = plane.offsetTop - 10 + "px";
            break;
        case 39:
            plane.style.left = plane.offsetLeft + 10 + "px";
            break;
        case 40:
            plane.style.top = plane.offsetTop + 10 + "px";
            break;
        case 32:
            launch(plane.offsetTop, plane.offsetLeft + plane.offsetWidth / 2);
            break;


    }
};

function launch(top, left) {

    for (var i = 0; i < bullet.length; i++) {
        if (bullet[i].style.display === "none" || bullet[i].style.display === "") {
            bullet[i].style.top = top + "px";
            bullet[i].style.left = left + "px";
            bullet[i].style.display = "block";
            break;
        }
    }
}

setInterval(function () {
    for (var i = 0; i < bullet.length; i++) {
        bullet[i].style.top = bullet[i].offsetTop - 10 + "px";
        /*bullet[i].offsetTop不能写成bullet[i].style.top，因为bullet[i].offsetTop的值为number类型,而bullet[i].style.top为string类型
        ，但可以稍微改为bullet[i].style.top< "0px"就可以了
        */
        if (bullet[i].offsetTop < 0) {
            bullet[i].style.display = "none";

        }
    }
}, 50);