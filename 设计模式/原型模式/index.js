// 图片轮播类
const LoopImages = function (imgArr, container) {
  this.imgArr = imgArr // 图片轮播数组
  this.container = container // 轮播图片的容器
}

// 上下滑动切换
LoopImages.prototype = {
  // 创建图片
  createImage: function () {
    console.log('LoopImages createImage function')
  },
  //   切换图片
  changeImage: function () {
    console.log('LoopImages changeImage function')
  },
}
// 上下滑动切换类
const SlideLoopImg = function (imgArr, container) {
  // 构造函数继承图片轮播类
  LoopImages.call(this, imgArr, container)
}
SlideLoopImg.prototype = new LoopImages()
// 重写继承的下一张切换图片的方法
SlideLoopImg.prototype.changeImage = function () {
  console.log('slideLoopImage changeImage function')
}
// 渐隐切换类
const FadeLoopImg = function (imgArr, container, arrow) {
  LoopImages.call(this, imgArr, container)
  // 切换箭头的私有变量
  this.arrow = arrow
}
FadeLoopImg.prototype = new LoopImages()
FadeLoopImg.prototype.changeImage = function () {
  console.log('FadeLoopImg  changeImage function')
}
// 测试用例
const fadeImg = new FadeLoopImg(['img1', 'img2', 'img3'], 'slide', [
  'left.jpg',
  'right.jpg',
])
console.log(fadeImg.container) // slide
fadeImg.changeImage() // 图片切换了
