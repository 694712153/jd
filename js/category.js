window.addEventListener('load', function() {
    var jd = new JD();
    //调用初始化左侧swiper滑动函数
    jd.initSwiperLeft();
    // 调用初始化右侧swiper滑动
    jd.initSwiperRight();
});

var JD = function() {

}

JD.prototype = {
    //初始化左侧swiper滑动函数
    initSwiperLeft: function() {
        var swiper = new Swiper('.category-left .swiper-container', {
            direction: 'vertical', //滑动方向垂直
            slidesPerView: 'auto', //支持多张轮播图一起滑动
            freeMode: true, //回弹效果
            mousewheel: true, //支持鼠标滚轮滚动
        });
    },
    //初始化右侧swiper滑动
    initSwiperRight: function() {
        var swiper = new Swiper('.category-right .swiper-container', {
            direction: 'vertical', //滑动方向垂直
            slidesPerView: 'auto', //支持多张轮播图一起滑动
            freeMode: true, //回弹效果
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true, //支持鼠标滚轮滚动
        });
    }
}
