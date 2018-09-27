//图片切换功能
var logoEle = document.getElementById("logo").getElementsByTagName("img")[0];
var logoImgPaths = ["imgs/logo1.jpg", "imgs/logo2.jpg", "imgs/logo3.jpg", "imgs/logo4.jpg", "imgs/logo5.jpg", "imgs/logo6.jpg", "imgs/logo7.jpg"];
var currentIndex = 0;
setInterval(changeLogoImg, 2000);
function changeLogoImg() {
    currentIndex++;
    if (currentIndex >= logoImgPaths.length) {
        currentIndex = 0;
    }
    logoEle.src = logoImgPaths[currentIndex];
}

//音乐切换功能
var audioEle = document.getElementsByTagName("audio")[0];
var logoMusics = ["music/music1.mp3", "music/music2.mp3", "music/music3.mp3", "music/music4.mp3", "music/music5.mp3"];
var currentMusic = 0;
var isPlaying = true;
audioEle.volume = 0.1;
audioEle.loop=true;
logoEle.onclick = function () {
    if (isPlaying) {
        audioEle.pause();
        isPlaying = false;
    } else {
        audioEle.play();
        isPlaying = true;
    }
};
logoEle.ondblclick = function () {
    currentMusic++;
    if (currentMusic>=logoMusics.length){
        currentMusic=0;
    }
    audioEle.getElementsByTagName("source")[0].src=logoMusics[currentMusic];
    audioEle.load();
    audioEle.play();
    isPlaying = true;
};