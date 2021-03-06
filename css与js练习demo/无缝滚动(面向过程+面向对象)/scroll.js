/*
var box1 = document.getElementById("box1");
box1.style.overflow = "hidden";
var ul = box1.getElementsByTagName("ul")[0];
var li = ul.getElementsByTagName("li");
var li_num = li.length;
var li_width = parseInt(getAttr());
ul.style.width = li_num*li_width+"px";
var index = 0;
setInterval(function(){
    index--;
    ul.style.marginLeft = index+"px";
    if(Math.abs(index)>=li_width){

        ul.appendChild( ul.firstElementChild );
        ul.style.marginLeft = "0px";
        index=0;
    }
},50);

function getAttr(){

    if(li[0].currentStyle){

        return li[0].currentStyle["width"];

    }else{
        return getComputedStyle(li[0],null)["width"];
    }

}*/


function Scroll(options){

    this.el = document.getElementById( options.el );
    //得到参数
    this.ul = this.el.getElementsByTagName("ul")[0];
    //获取ul
    this.li = this.ul.getElementsByTagName("li");
    //获取li
    this.direction = options.direction;
    //无缝走向
    this.speed = options.speed;
    //速度值
    this.index = 0;

    this.init();
}

Scroll.prototype = {

    init:function(){
    //效果的开始
        this.li_num = this.li.length;


        //1>给父元素  设置溢出隐藏
        this.el.style.overflow = "hidden";

        if(this.direction=="x"){
            //宽度

            this.change("width","marginLeft");



        }else if(this.direction=="y"){
            //高度

            this.change("height","marginTop");


        }


    },
    change:function(attr1,attr2){
    //定时器
        var That = this;
        this.li_attr = parseInt(this.getAttr(attr1));
        this.ul.style[attr1] = this.li_num*this.li_attr+"px";
        setInterval(function(){
                 That.index--;
                 That.ul.style[attr2] = That.index+"px";
                if(Math.abs(That.index)>=That.li_attr){
                    That.ul.appendChild( That.ul.firstElementChild );
                    That.ul.style[attr2] = "0px";
                    That.index=0;
                }
        },this.speed);

    },
    getAttr:function(attr){
    //获取样式值的
        if(this.li[0].currentStyle){

            return this.li[0].currentStyle[attr];

        }else{
            return getComputedStyle(this.li[0],null)[attr];
        }

    }

};

new Scroll({
    el:"box1",
    direction:"x",
    speed:10
});

new Scroll({
    el:"box2",
    direction:"y",
    speed:30
});










