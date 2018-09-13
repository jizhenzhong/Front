var mnavH2 = document.getElementById("mnav").getElementsByTagName("h2")[0];
var mnavUl= document.getElementById("mnav").getElementsByTagName("ul")[0];
mnavH2.onclick = function () {
    mnavUl.style.display = mnavUl.style.display === "block" ? "none" : "block";
    mnavH2.className = mnavUl.style.display === "block" ? "open" : ""
};