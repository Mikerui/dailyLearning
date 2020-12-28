/**
 * @description 防抖函数
 * @param {*} func 函数
 * @param {number} [wait=1000]  延迟执行时间
 * @param {boolean} [immediate=true] 是否立即执行
 * @returns
 */
function debouncing(func, wait = 1000, immediate = true) {
  let timer = null;
  return function () {
    let args = arguments;
    let self = this;
    if (timer) {
      clearTimeout(timer);
    }
    if (!immediate) {
      // n秒之后执行，n秒内再次出发会重新计算时间
      timer = setTimeout(() => {
        func.apply(self, [...args]);
      }, wait);
    } else {
      // 立即执行， n秒内不可再触发
      let callNew = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNew) func.apply(self, [...args]);
    }
  };
}

function fn() {
  console.log('test');
}

let fl = debouncing(fn, 2000);
setInterval(() => {
  console.log(1);
  fl();
}, 25);
