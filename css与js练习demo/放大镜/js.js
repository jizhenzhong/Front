var minImg = document.getElementById("minImg"),
    iElement = document.getElementsByTagName("i")[0],
    maxImg = document.getElementById("maxImg"),
    box = document.getElementById("box"),
    img = document.getElementById("img");
minImg.onmousemove = function (e) {
    iElement.style.display = "block";
    maxImg.style.display = "block";
    var event = window.event || e;
    /*document.documentElement.scrollTop和document.documentElement.scrollLeft当不加时如果有滚动条的话会
     出现鼠标点不在放大镜区域中间,且要做标准模式与混杂模式的兼容处理。
     */
    var srollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    var srollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var x = (event.clientX + srollLeft - box.offsetLeft - iElement.offsetWidth / 2);
    var y = (event.clientY + srollTop - box.offsetTop - iElement.offsetHeight / 2);

    if (x < 0)
        x = 0;
    else if (x > minImg.offsetWidth - iElement.offsetWidth)
        x = minImg.offsetWidth - iElement.offsetWidth;
    if (y < 0)
        y = 0;
    else if (y > minImg.offsetWidth - iElement.offsetHeight)
        y = minImg.offsetWidth - iElement.offsetHeight;
    iElement.style.left = x + "px";
    iElement.style.top = y + "px";
    img.style.left = -x * 2 + "px";
    img.style.top = -y * 2 + "px";


};
minImg.onmouseout = function () {
    iElement.style.display = "none";
    maxImg.style.display = "none";
};

/* if (x<0)
//     x=0;
// else if(x>minImg.offsetWidth-iElement.offsetWidth)
//     x=minImg.offsetWidth-iElement.offsetWidth;
// if (y<0)
//     y=0;
// else if(y>minImg.offsetWidth-iElement.offsetHeight)
//     y=minImg.offsetWidth-iElement.offsetHeight;
没有这段代码，onmoseout这段代码在鼠标移除后没有执行，没有解决此问题。但有了这段代码则没有问题。
*/