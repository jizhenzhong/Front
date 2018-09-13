var box = document.getElementById("box");

box.onmousedown = function (e1) {
    var e1 = window.event || e1;
    var x = e1.clientX - box.offsetLeft;
    var y = e1.clientY - box.offsetTop;
    //当为box.onmousemove时，当鼠标移动过快时会指向其他document元素，导致不再移动
    document.onmousemove = function (e2) {
        var e2 = window.event || e2;
        box.style.left = e2.clientX - x + "px";
        box.style.top = e2.clientY - y + "px";
    }

};
box.onmouseup = function () {
    document.onmousemove = null;
};