var ulEle=document.getElementById("floatbgnav");
var aEles=ulEle.getElementsByTagName("a");
var activBgXPos;

//导航菜单点击进入其它页面选中当前分类操作
var currentUrlPath = window.location.pathname;
var splitNum = currentUrlPath.split("/").length;
var currentFile = currentUrlPath.split("/")[splitNum - 1];
var pattern = new RegExp(currentFile);
for (var j = 0; j < aEles.length; j++) {
    var currentPath = aEles[j].href;
    if (pattern.test(currentPath)) {
        ulEle.style.backgroundPosition=j/5*100+"%  0";
        activBgXPos=j/5*100;
    }
}

//鼠标移动或移出a标签的背景图片定位操作
for (var i=0;i<aEles.length;i++){
    //闭包函数传入参数使得事件函数有权访问所要操作的i值(注意i是实参，j是形参)
    (function (j) {
        aEles[j].onmouseover=function () {
            /*js获取元素的css样式，没有用ele.style.background-position获取的原因是因为需要我们把元素的样式写在行内样式上才能获取到，
             但window.getComputedStyle在IE8以下是不兼容的,需要使用box.currentStyle获取*/
            var lastBgPos=window.getComputedStyle(ulEle,null)["background-position"];
            //正则表达式匹配background-position值中第一个参数的值，限制范围为0-100(去除了百分号便于计算)
            var pattern = /\s?^[0-9]{1,2}(?=%)|100/;
            var lastBgXPos=pattern.exec(lastBgPos);
            ulEle.style.backgroundPosition=j/5*100+"%  0";
            /*假设背景图片水平位置从0%移动到100%需要1秒，那么每移动1%的距离所需的时间为0.01秒,则计算transform的时间为
              (j/5*100-lastBgXPos[0])*0.05秒 */
            ulEle.style.transition="background-position "+Math.abs(j/5*100-parseInt(lastBgXPos[0]))*0.01+"s linear";
        };
        aEles[j].onmouseout=function () {
            ulEle.style.backgroundPosition= activBgXPos+"%  0";
            ulEle.style.transition="background-position "+Math.abs(j/5*100-parseInt( activBgXPos))*0.01+"s linear";
        };
    })(i)
}