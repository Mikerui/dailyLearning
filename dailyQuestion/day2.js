// js动画最佳实现——requestAnimationFrame
// setInterval和setTimeout刷新率不固定，可能会造成视觉闪动

/**
 * 1、 requestAnimationFrame 会把每一帧中的所有DOM操作集中起来， 在一次重绘或回流中就完成， 并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率， 一般来说， 这个频率为每秒60帧。
 * 2、 在隐藏或不可见的元素中， requestAnimationFrame将不会进行重绘或回流， 这当然就意味着更少的的cpu， gpu和内存使用量。
 * 3、还可以用来渲染大数据量
 */
let dis = 0
let div = document.getElementById('id')

function step() {
  requestAnimationFrame(function () {
    div.style.left = ++dis + 'px';
    if (dis < 50) step();
  })
}
step()

// DocumentFragment
/**
 * DocumentFragment，文档片段接口，表示一个没有父级文件的最小文档对象。它被作为一个轻量版的 Document使用，用于存储已排好版的或尚未打理好格式的XML片段。最大的区别是因为 DocumentFragment不是真实DOM树的一部分，它的变化不会触发DOM树的（重新渲染) ，且不会导致性能等问题。
  可以使用 document.createDocumentFragment方法或者构造函数来创建一个空的 DocumentFragment
 */

//需要插入的容器

let ul = document.getElementById('container');
// 插入十万条数据
let total = 100000;
// 一次插入 20 条
let once = 20;
//总页数
let page = total / once
//每条记录的索引
let index = 0;
//循环加载数据
/**
 * @param {Number} curTotal  当前总条数
 * @param {Number} curIndex  当前次数
 */
function loop(curTotal, curIndex) {
  if (curTotal <= 0) {
    return false;
  }
  //每页多少条
  let pageCount = Math.min(curTotal, once);
  window.requestAnimationFrame(
    function () {
      let fragment = document.createDocumentFragment();
      for (let i = 0; i < pageCount; i++) {
        let li = document.createElement('li');
        li.innerText = curIndex + i + ' : ' + ~~(Math.random() * total)
        fragment.appendChild(li)
      }
      ul.appendChild(fragment)
      loop(curTotal - pageCount, curIndex + pageCount)
    })
}
loop(total, index);