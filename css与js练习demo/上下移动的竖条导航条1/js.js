//导航菜单上下移动的js代码(移动不是很流畅)
var curValueY = 0;
var ul = document.getElementById("ul");
var flag = -1;
function move() {
    if (flag == -1) {
        if (curValueY > -26) {
            curValueY = curValueY + flag;
            ul.style.transform = "translate(0px," + curValueY + "px)";
        } else {
            flag = 1;
        }
    } else if (flag == 1) {
        if (curValueY < 26) {
            curValueY = curValueY + flag;
            ul.style.transform = "translate(0px," + curValueY + "px)";
        } else {
            flag = -1;
        }
    }
}
setInterval(move, 80);



