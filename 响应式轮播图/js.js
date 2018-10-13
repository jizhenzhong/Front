var carouselImgNum = 6;
var carouseBox = document.getElementById("carouselBox");
var carouselUl = document.getElementById("carouselBox").getElementsByTagName("ul")[0];
var carouselSwitch = document.getElementById("switchBtn");
var carouselCurLeft = 0;
//事件委托的使用(冒泡原理)
carouselSwitch.onclick = function (e) {
    var event = e || window.event;
    var target = event.target || event.srcElement;
    if (target.className === "left") {
        if (carouselCurLeft === 0) {
            carouselCurLeft = -(carouselImgNum - 1) * 100;
        } else {
            carouselCurLeft += 100;
        }
        carouselUl.style.left = carouselCurLeft + "%";
    } else if (target.className === "right") {
        if (carouselCurLeft === -(carouselImgNum - 1) * 100) {
            carouselCurLeft = 0;
        } else {
            carouselCurLeft -= 100;
        }
        carouselUl.style.left = carouselCurLeft + "%";
    }
};
//先执行定时器函数，是因为当刷新页面时浏览器不会自动执行onmouseout事件
var carouseAuto = setInterval(function () {
    if (carouselCurLeft === -(carouselImgNum - 1) * 100) {
        carouselCurLeft = 0;
    } else {
        carouselCurLeft -= 100;
    }
    carouselUl.style.left = carouselCurLeft + "%";
}, 3000);
carouseBox.onmouseout = function () {
    carouseAuto = setInterval(function () {
        if (carouselCurLeft === -(carouselImgNum - 1) * 100) {
            carouselCurLeft = 0;
        } else {
            carouselCurLeft -= 100;
        }
        carouselUl.style.left = carouselCurLeft + "%";
    }, 3000);
};
carouseBox.onmouseover = function () {
    clearInterval(carouseAuto);
};

