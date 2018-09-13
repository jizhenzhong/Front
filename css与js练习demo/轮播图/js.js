// var lis = document.getElementById("ulImg").getElementsByTagName("li");
// var pointLis = document.getElementById("point").getElementsByTagName("li");
// var left = document.getElementById("left");
// var right = document.getElementById("right");
// var imgSeq = 0;
//
// left.onclick = function () {
//     if (imgSeq === 0)
//         imgSeq = lis.length - 1;
//     else
//         imgSeq--;
//     for (var i = 0; i < lis.length; i++) {
//         lis[i].style.display = "none";
//         pointLis[i].style.backgroundColor = "snow";
//     }
//     lis[imgSeq].style.display = "list-item";
//     pointLis[imgSeq].style.backgroundColor = "red";
//     clearInterval(intervalId);
//
// };
// right.onclick = function () {
//     if (imgSeq === (lis.length - 1))
//         imgSeq = 0;
//     else
//         imgSeq++;
//     for (var i = 0; i < lis.length; i++) {
//         lis[i].style.display = "none";
//         pointLis[i].style.backgroundColor = "snow";
//     }
//     lis[imgSeq].style.display = "list-item";
//     pointLis[imgSeq].style.backgroundColor = "red";
//     clearInterval(intervalId);
// };
//
// var intervalId = setInterval(function () {
//     if (imgSeq >= lis.length)
//         imgSeq = 0;
//     for (var i = 0; i < lis.length; i++) {
//         lis[i].style.display = "none";
//         pointLis[i].style.backgroundColor = "snow";
//     }
//     lis[imgSeq].style.display = "list-item";
//     pointLis[imgSeq].style.backgroundColor = "red";
//     imgSeq++;
// }, 3000);
//
