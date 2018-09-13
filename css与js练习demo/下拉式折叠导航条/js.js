window.onload = function () {
    var navHead = document.getElementsByClassName("li-outside");
    var navBody = document.getElementsByClassName("ul-body");
    var flag=0;
    for (var i = 0; i < navBody.length; i++) {
        navBody[i].style.display = "none";
    }
    for (var j=0;j<navHead.length;j++){
            navHead[j].addEventListener("click",function () {
                if (flag==0){
                    this.childNodes[3].style.display="block";
                    this.childNodes[1].style.color="pink";
                    flag=1;
                }else if (flag==1){
                    this.childNodes[3].style.display="none";
                    this.childNodes[1].style.color="black";
                    flag=0;
                }
            },false)
        }
};