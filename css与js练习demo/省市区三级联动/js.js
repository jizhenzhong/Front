var allArea = [
    "陕西",
    [
        "渭南", ["渭南1", "渭南2", "渭南3"],
        "韩城", ["韩城1", "韩城2", "韩城3"],
        "西安", ["西安1", "西安2", "西安3"]
    ],
    "山东",
    [
        "济南", ["济南1", "济南2", "济南3"],
        "青岛", ["青岛1", "青岛2", "青岛3"],
        "济宁", ["济宁1", "济宁2", "济宁3"]
    ],
    "河南",
    [
        "郑州", ["郑州1", "郑州2", "郑州3"],
        "洛阳", ["洛阳1", "洛阳2", "洛阳3"]
    ]
];

var province = document.getElementById("province");
var city = document.getElementById("city");
var area = document.getElementById("area");
for (var i = 0; i < allArea.length; i++) {
    if (typeof allArea[i] === "string") {
        // var option = document.createElement("option");
        // option.innerHTML = allArea[i];
        // province.appendChild(option);
        //new Option()第一个参数为option元素的文本，第二个参数为option元素的value值
        var option = new Option(allArea[i], allArea[i]);
        province.add(option);
    }
}

province.onchange = function () {
    for (var i = 0; i < allArea.length; i++)
        if (typeof allArea[i] === "string") {
            if (province.value === allArea[i]) {
                city.innerHTML = "";
                for (var j = 0; j < allArea[i + 1].length; j++)
                    if (typeof allArea[i + 1][j] === "string") {
                        var option = new Option(allArea[i + 1][j], allArea[i + 1][j]);
                        city.add(option);
                    }
            }
        }
};

city.onchange = function () {
    for (var i = 0; i < allArea.length; i++)
        if (typeof allArea[i] !== "string")
            for (var j = 0; j < allArea[i].length; j++)
                if (typeof allArea[i][j] === "string") {
                    if (city.value === allArea[i][j]) {
                        area.innerHTML = "";
                        for (var k = 0; k < allArea[i][j + 1].length; k++) {
                            var option = new Option(allArea[i][j + 1][k], allArea[i][j + 1][k]);
                            area.add(option)
                        }
                    }
                }
};
