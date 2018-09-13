//更换皮肤(1)
var styleCSS = document.getElementById("skinCSS");
var skinObject = {
    0: {cssFile: "skinPink.css", skinName: "浪漫粉"},
    1: {cssFile: "skinBlack.css", skinName: "科技黑"},
    2: {cssFile: "skinBlue.css", skinName: "经典蓝"}
};
if (typeof(Storage) !== "undefined") {
    if (!sessionStorage.currentSkin) {
        sessionStorage.setItem("currentSkin", "skinPink.css");
    } else {
        for (var key in skinObject) {
            if (skinObject[key].cssFile === sessionStorage.getItem("currentSkin")) {
                styleCSS.href = "css/" + skinObject[key].cssFile;
            }
        }

    }
} else {
    alert("抱歉，您的浏览器不支持换肤功能");
    styleCSS.href = "css/skinPink.css";
}

//给不支持classList的浏览器（ie9及以下等的元素添加classList属性,百度得来的
if (!("classList" in document.documentElement)) {
    Object.defineProperty(HTMLElement.prototype, 'classList', {
        get: function() {
            var self = this;
            function update(fn) {
                return function(value) {
                    var classes = self.className.split(/\s+/g),
                        index = classes.indexOf(value);

                    fn(classes, index, value);
                    self.className = classes.join(" ");
                }
            }
            return {
                add: update(function(classes, index, value) {
                    if (!~index) classes.push(value);
                }),

                remove: update(function(classes, index) {
                    if (~index) classes.splice(index, 1);
                }),

                toggle: update(function(classes, index, value) {
                    if (~index)
                        classes.splice(index, 1);
                    else
                        classes.push(value);
                }),

                contains: function(value) {
                    return !!~self.className.split(/\s+/g).indexOf(value);
                },

                item: function(i) {
                    return self.className.split(/\s+/g)[i] || null;
                }
            };
        }
    });
}
