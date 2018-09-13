var div = document.getElementById("div");
var ul = document.getElementsByTagName("ul")[0];
var lis = document.getElementsByTagName("li");
var iElement = document.getElementsByTagName("i")[0];
var index = -1;

div.onclick = function () {
    ul.style.display = "block";
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            this.style.backgroundColor = "gray";
        };
        lis[i].onmouseout = function () {
            this.style.backgroundColor = "white";
        };
        lis[i].onclick = function (e) {
            if (e.stopPropagation)
                e.stopPropagation();
            else
                e.cancelBubble = true;
            iElement.innerHTML = this.innerHTML;
            ul.style.display = "none";
        }
    }
};

document.onkeydown = function (e) {
    e = window.event || e;
    switch (e.keyCode) {
        case 38:
            for (var i = 0; i < lis.length; i++)
                lis[i].style.backgroundColor = "white";
            index--;
            if (index < 0)
                index = lis.length - 1;
            lis[index].style.backgroundColor = "gray";
            break;
        case 40:
            for (var j = 0; j < lis.length; j++)
                lis[j].style.backgroundColor = "white";
            index++;
            if (index > lis.length - 1)
                index = 0;
            lis[index].style.backgroundColor = "gray";
            break;
        case 13:
            iElement.innerHTML = lis[index].innerHTML;
            ul.style.display = "none";
            for (var k = 0; k < lis.length; k++)
                lis[k].style.backgroundColor = "white";
            break;
    }
};

document.onmousemove = function (e) {
    e = window.event || e;
    if (e.clientX < div.offsetLeft || e.clientX > div.offsetLeft + div.offsetWidth ||
        e.clientY < div.offsetTop || e.clientY > div.offsetTop + div.offsetHeight + ul.offsetHeight)
        ul.style.display = "none";
};


