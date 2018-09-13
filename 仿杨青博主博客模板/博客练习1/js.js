/*logo头像功能*/
logoImg = document.getElementById("logoimg");
var logoNum = 7;
var currentLogo = 1;
setInterval(function () {
    if (currentLogo > logoNum)
        currentLogo = 1;
    logoImg.setAttribute("src", "imgs/logo" + currentLogo + ".jpg");
    currentLogo++;
}, 3000);
var logoMusic = document.getElementById("music");
var flag = false;
logoImg.onclick = function () {
    if (!flag) {
        logoMusic.volume = 0.1;
        logoMusic.loop = true;
        logoMusic.play();
        flag = true;
    } else {
        logoMusic.volume = 0.1;
        logoMusic.pause();
        flag = false;
    }
};
var musicNum = 5;
var currentMusic = 1;
logoImg.ondblclick = function () {
    currentMusic++;
    if (currentMusic > musicNum)
        currentMusic = 1;
    logoMusic.getElementsByTagName("source")[0].src = "music/music" + currentMusic + ".mp3";
    logoMusic.getElementsByTagName("source")[0].type = "audio/mpeg";
    logoMusic.loop = true;
    logoMusic.load();
    logoMusic.play();
    flag = true;
};

//导航菜单功能
var currentUrlPath = window.location.pathname;
var splitNum = currentUrlPath.split("/").length;
var currentFile = currentUrlPath.split("/")[splitNum - 1];
var patt = new RegExp(currentFile);
var navLis = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
for (var i = 0; i < navLis.length; i++) {
    var currentPath = navLis[i].getElementsByTagName("a")[0];
    if (patt.test(currentPath)) {
        navLis[i].className = "active";
    }
}

var mnavIcon = document.getElementById("mnavicon");
var mnavClose = document.getElementById("mnav").getElementsByTagName("span")[0];
mnavIcon.onclick = function () {
    document.getElementById("mnav").className = "open";
};
mnavClose.onclick = function () {
    document.getElementById("mnav").className = "close";
};

//轮播图
var btnCarouselLeft = document.getElementById("left");
var btnCarouselRight = document.getElementById("right");
var carouselDiv = document.getElementById("carousel").getElementsByTagName("div")[0];
var carouselUl = carouselDiv.getElementsByTagName("ul")[0];

var carouselImgNum = 4;
var carouselUlCurPos = 0;
var parityFlag = 0;
btnCarouselLeft.onclick = function () {
    carouselUlCurPos -= 100;
    carouselUlCurPos = carouselUlCurPos === -carouselImgNum * 100 ? 0 : carouselUlCurPos;
    carouselUl.style.left = carouselUlCurPos + '%';
    if (parityFlag === 0) {
        carouselDiv.style.animation = "carouselDivLeft1 0.5s linear 1";
        parityFlag = 1;
    } else if (parityFlag === 1) {
        carouselDiv.style.animation = "carouselDivLeft2 0.5s linear 1";
        parityFlag = 0;
    }
};
btnCarouselRight.onclick = function () {
    carouselUlCurPos += 100;
    carouselUlCurPos = carouselUlCurPos === 100 ? -(carouselImgNum - 1) * 100 : carouselUlCurPos;
    carouselUl.style.left = carouselUlCurPos + '%';
    if (parityFlag === 0) {
        carouselDiv.style.animation = "carouselDivRight1 0.5s linear 1";
        parityFlag = 1;
    } else if (parityFlag === 1) {
        carouselDiv.style.animation = "carouselDivRight2 0.5s linear 1";
        parityFlag = 0;
    }
};

var carouseAuto = setInterval(function () {
    carouselUlCurPos -= 100;
    carouselUlCurPos = carouselUlCurPos === -carouselImgNum * 100 ? 0 : carouselUlCurPos;
    carouselUl.style.left = carouselUlCurPos + '%';
}, 3000);
carouselDiv.onmouseout = function () {
    carouseAuto = setInterval(function () {
        carouselUlCurPos -= 100;
        carouselUlCurPos = carouselUlCurPos === -carouselImgNum * 100 ? 0 : carouselUlCurPos;
        carouselUl.style.left = carouselUlCurPos + '%';
    }, 3000);
};
carouselDiv.onmouseover = function () {
    clearInterval(carouseAuto);
};


//文章区域
var articleNum = 6;
for (var j = 0; j < articleNum; j++) {
    var arcLi = document.getElementById("article").getElementsByTagName("ul")[0].getElementsByTagName("li")[j];
    var arcRightWidthDiv = arcLi.getElementsByTagName("div")[2];
    var arcLeftWidth = arcLi.offsetWidth - arcRightWidthDiv.offsetHeight;
    arcLi.getElementsByTagName("div")[0].style.width = arcLeftWidth + "px";
}


