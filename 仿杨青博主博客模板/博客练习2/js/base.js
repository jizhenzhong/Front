//logo头像排版
var logoDiv = document.getElementById("nav").getElementsByTagName("div")[0];
logoImg = document.getElementById("logoImg");
logoDiv.style.width = logoDiv.offsetHeight + "px";
var musicTip = document.getElementById("nav").getElementsByTagName("span")[0];
musicTip.style.left = logoDiv.offsetWidth * 1.1 + "px";
//logo头像音乐功能
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
var navLis = document.getElementById("nav").getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
var currentUrlPath = window.location.pathname;
var splitNum = currentUrlPath.split("/").length;
var currentFile = currentUrlPath.split("/")[splitNum - 1];
var pattern = new RegExp(currentFile);
for (var j = 0; j < navLis.length; j++) {
    var currentPath = navLis[j].getElementsByTagName("a")[0];
    if (pattern.test(currentPath)) {
        navLis[j].className = "active";
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


//更换皮肤(2)
if (typeof(Storage) !== "undefined") {
    var btnSkin = document.getElementById("changeSkin");
    var styleCSS = document.getElementById("skinCSS");
    var logoTitle = document.getElementById("nav").getElementsByTagName("h3")[0];
    var skinObject = {
        0: {cssFile: "skinPink.css", skinName: "浪漫粉"},
        1: {cssFile: "skinBlack.css", skinName: "科技黑"},
        2: {cssFile: "skinBlue.css", skinName: "经典蓝"}
    };
    for (var key in skinObject) {
        if (skinObject[key].cssFile === sessionStorage.getItem("currentSkin")) {
            btnSkin.innerHTML = skinObject[key].skinName;
        }
    }
    btnSkin.onclick = function () {
        for (var key in skinObject) {
            if (skinObject[key].cssFile === sessionStorage.getItem("currentSkin")) {
                if (parseInt(key) === 2) {
                    sessionStorage.setItem("currentSkin", "skinPink.css");
                    styleCSS.href = "css/" + "skinPink.css";
                    btnSkin.innerHTML = "浪漫粉";
                } else {
                    styleCSS.href = "css/" + skinObject[parseInt(key) + 1].cssFile;
                    btnSkin.innerHTML = skinObject[parseInt(key) + 1].skinName;
                    sessionStorage.setItem("currentSkin", skinObject[parseInt(key) + 1].cssFile);
                }
                break;
            }

        }
    };
    logoTitle.onclick = function () {
        var logoTitleLink = document.getElementById("nav").getElementsByTagName("h3")[0].getElementsByTagName("a")[0];
        if (document.body.offsetWidth <= 768) {
            logoTitleLink.href = "javascript:void(0)";
            for (var key in skinObject) {
                if (skinObject[key].cssFile === sessionStorage.getItem("currentSkin")) {
                    if (parseInt(key) === 2) {
                        sessionStorage.setItem("currentSkin", "skinPink.css");
                        //为了兼容从小于768px到大于768px的换肤按钮的显示问题
                        styleCSS.href = "css/" + "skinPink.css";
                        btnSkin.innerHTML = "浪漫粉";
                    } else {
                        styleCSS.href = "css/" + skinObject[parseInt(key) + 1].cssFile;
                        //为了兼容从小于768px到大于768px的换肤按钮的显示问题
                        btnSkin.innerHTML = skinObject[parseInt(key) + 1].skinName;
                        sessionStorage.setItem("currentSkin", skinObject[parseInt(key) + 1].cssFile);
                    }
                    break;
                }
            }
        } else {
            logoTitleLink.href = "index.html";
        }
    };
} else {
    document.getElementById("changeSkin").style.display = "none";
}

// //轮播图
var btnCarouselLeft = document.getElementById("left");
var btnCarouselRight = document.getElementById("right");
var carouselDiv = document.getElementById("carouselBox");
var carouselUl = carouselDiv.getElementsByTagName("ul")[0];
var carouselUlLis = carouselUl.getElementsByTagName("li");

var carouselImgNum = 7;
var carouselUlCurPos = 0;
var carouselUlLiCurscale = 1;
btnCarouselLeft.onclick = function () {
    carouselUlCurPos += 1 / 3;
    carouselUlCurPos = carouselUlCurPos > 0 ? -(carouselImgNum - 3) * (1 / 3) : carouselUlCurPos;
    carouselUl.style.left = carouselUlCurPos * 100 + '%';

    if (carouselUlLiCurscale === 1) {
        carouselUlLis[carouselUlLiCurscale].classList.remove("scaleLi");
        carouselUlLiCurscale = 5;
        carouselUlLis[carouselUlLiCurscale].classList.add("scaleLi");
    } else {
        carouselUlLis[carouselUlLiCurscale].classList.remove("scaleLi");
        carouselUlLiCurscale -= 1;
        carouselUlLis[carouselUlLiCurscale].classList.add("scaleLi");
    }
};
btnCarouselRight.onclick = function () {
    carouselUlCurPos -= 1 / 3;
    carouselUlCurPos = carouselUlCurPos < -(carouselImgNum - 3) * (1 / 3) ? 0 : carouselUlCurPos;
    carouselUl.style.left = carouselUlCurPos * 100 + '%';

    if (carouselUlLiCurscale === 5) {
        carouselUlLis[carouselUlLiCurscale].classList.remove("scaleLi");
        carouselUlLiCurscale = 1;
        carouselUlLis[carouselUlLiCurscale].classList.add("scaleLi");
    } else {
        carouselUlLis[carouselUlLiCurscale].classList.remove("scaleLi");
        carouselUlLiCurscale += 1;
        carouselUlLis[carouselUlLiCurscale].classList.add("scaleLi");
    }

};

var carouseAuto = setInterval(function () {
    carouselUlCurPos -= 1 / 3;
    carouselUlCurPos = carouselUlCurPos < -(carouselImgNum - 3) * (1 / 3) ? 0 : carouselUlCurPos;
    carouselUl.style.left = carouselUlCurPos * 100 + '%';

    if (carouselUlLiCurscale === 5) {
        carouselUlLis[carouselUlLiCurscale].classList.remove("scaleLi");
        carouselUlLiCurscale = 1;
        carouselUlLis[carouselUlLiCurscale].classList.add("scaleLi");
    } else {
        carouselUlLis[carouselUlLiCurscale].classList.remove("scaleLi");
        carouselUlLiCurscale += 1;
        carouselUlLis[carouselUlLiCurscale].classList.add("scaleLi");
    }
}, 3000);
carouselDiv.onmouseout = function () {
    carouseAuto = setInterval(function () {
        carouselUlCurPos -= 1 / 3;
        carouselUlCurPos = carouselUlCurPos < -(carouselImgNum - 3) * (1 / 3) ? 0 : carouselUlCurPos;
        carouselUl.style.left = carouselUlCurPos * 100 + '%';

        if (carouselUlLiCurscale === 5) {
            carouselUlLis[carouselUlLiCurscale].classList.remove("scaleLi");
            carouselUlLiCurscale = 1;
            carouselUlLis[carouselUlLiCurscale].classList.add("scaleLi");
        } else {
            carouselUlLis[carouselUlLiCurscale].classList.remove("scaleLi");
            carouselUlLiCurscale += 1;
            carouselUlLis[carouselUlLiCurscale].classList.add("scaleLi");
        }
    }, 3000);
};
carouselDiv.onmouseover = function () {
    clearInterval(carouseAuto);
};

//超重点知识点:与html、css、js文件加载顺序及执行情况有关，https://www.cnblogs.com/Walker-lyl/p/5262075.html
// window.onload是页面完全加载完成后执行(主要需要轮播图img图片加载完成后执行)
window.onload = function () {
    var carouselUlLiScaleHeight = document.getElementsByClassName("scaleLi")[0].offsetHeight * 1.8;
    var  carouselBox=document.getElementById("carouselBox");
    carouselBox.style.height = carouselUlLiScaleHeight + "px";
    //0.4/1.8的值通过几何算出来的,用了1天时间只能通过js来实现假响应式(假响应式就是缩放分辨率，高度不变，必须刷新页面当前js才执行)
    carouselUl.style.marginTop = carouselUlLiScaleHeight * (0.4 / 1.8) + "px";

    var contentDivBox=document.getElementById("content");
    contentDivBox.style.height=document.getElementsByTagName("section")[0].offsetHeight-carouselBox.offsetHeight+"px";

    var arcUl=document.getElementsByTagName("article")[0].getElementsByTagName("ul")[0];
    var arcUlLis=document.getElementsByTagName("article")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
    for (var i = 0;i<arcUlLis.length;i++)
    arcUlLis[i].style.marginBottom=0.02*arcUl.offsetHeight + "px";
};








