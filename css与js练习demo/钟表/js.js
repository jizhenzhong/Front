var hour = document.getElementById("hour"),
    minute = document.getElementById("minute"),
    second = document.getElementById("second");

//文档一加载先执行一次changTime，则因为计时器在1秒后才执行，会出现一开始看见00:00:00的情况
changeTime();

function changeTime() {
    var date = new Date();
    if (date.getHours() < 10)
        hour.innerHTML = "0" + date.getHours() + "&nbsp" + ":";
    else
        hour.innerHTML = date.getHours() + "&nbsp" + ":";
    if (date.getMinutes() < 10)
        minute.innerHTML = "0" + date.getMinutes() + "&nbsp" + ":";
    else
        minute.innerHTML = date.getMinutes() + "&nbsp" + ":";
    if (date.getSeconds() < 10)
        second.innerHTML = "0" + date.getSeconds();
    else
        second.innerHTML = date.getSeconds();
}
setInterval(changeTime, 1000);

