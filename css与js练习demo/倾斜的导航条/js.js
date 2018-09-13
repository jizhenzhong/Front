var allSpan=document.getElementsByClassName("span");
for (var i=0;i<allSpan.length;i++){
    allSpan[i].onmouseover=function () {
        var arrNum=new Array(3);
        for (var j=0;j<arrNum.length;j++){
            arrNum[j]=parseInt(Math.random()*255);
        }
        this.style.backgroundColor="rgb("+arrNum[0]+","+arrNum[1]+","+arrNum[2]+")";
    }
    allSpan[i].onmouseout=function () {
        this.style.backgroundColor=null;
    }
}


