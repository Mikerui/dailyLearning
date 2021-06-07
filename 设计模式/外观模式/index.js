// 外观模式是实现
function addEvent (dom, type, fn) {
  // 对于支持DOM2级事件处理程序addEventListener方法的浏览器
  if (dom.addEventListener) {
    dom.addEventListener (type, fn, false);
    // 对于支持attacheVent方法的浏览器
  } else if (dom.attacheEvent) {
    dom.attacheEvent ('on', +type, fn);
  } else {
    // 上面两种都不支持的
    dom['on' + type] = fn;
  }
}
