var uls = document.getElementById("uls"),
    lis = uls.getElementsByTagName("li"),
    boxDiv = document.getElementsByTagName("div");

for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onmouseover = function () {

        for (var j = 0; j < boxDiv.length; j++) {
            boxDiv[j].style.display = "none";
            lis[j].className = "";
        }
        boxDiv[this.index].style.display = "block";
        lis[this.index].className = "active";


    };
}


