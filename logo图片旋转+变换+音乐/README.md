#### 一、此小插件的功能
        实现logo的切换和旋转，另外增加音乐播放的功能。
#### 二、使用教程
        (1)找到#logo的标签，设置宽和高，把此容器定位在您页面的任何位置。
        (2)需要设置一下#logo span标签的line-height值为 (#logo盒子的height)*60%/2,目的为了让#logo span里面的文本两行显示。
        (3)替换log.js文件中的logoImgPaths = ["imgs/logo1.jpg", "imgs/logo2.jpg", "imgs/logo3.jpg", "imgs/logo4.jpg",
        "imgs/logo5.jpg","imgs/logo6.jpg", "imgs/logo7.jpg"]和logoMusics = ["music/music1.mp3", "music/music2.mp3",
        "music/music3.mp3", "music/music4.mp3","music/music5.mp3"]数组的值为您的logo图片和music文件的地址。
        注意：替换的logo图片大小大于您设置#logo容器的大小，因为我设置img标签的高为max-height：100%(不懂这个属性的去百度)。
#### 三、使用的知识点
        (1)html5的audio标签，css3的animation和translate。
        (2)百分比布局和定位布局
        (3)css的:before伪元素做一个三角箭头指示。
        (4)简单js操作等等。
#### 四、测试环境
          由于太晚了，就只是在火狐、谷歌、IE、Opera这几个当前最新版本浏览器测试了下完美运行，测试时间:2018/9/28。
#### 五、已知bug
          个别浏览器(包括Android、iPhone浏览器)限制了媒体的autoplay功能。
#### 六、个人总结
          做这个小插件不但学到了前端很多细节的知识点(代码里面有注释的)，而且可以把这个小插件稍微修改可以放在任何网站，虽然耗费5
          个多小时(小白的 话慢慢折腾吧)，但是收获满满 QAQ 。

