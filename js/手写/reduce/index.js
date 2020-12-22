/**
 * @description: reduce方法 累加器
 * @callback {*}  回调函数
 * @initialVal {*} 初始值
 */
Array.prototype.myReduce = function (callback, initialVal = 0) {
  const arr = this;
  let base = !initialVal ? 0 : initialVal;
  let startPoint = !initialVal ? 0 : 1;
  for (let index = 0; index < arr.length; index++) {
    base = callback(base, arr[i], i + startPoint, arr);
  }
  return base;
};
console.log([1, 2, 3, 4].myReduce((total, cur) => total + cur, 0));
