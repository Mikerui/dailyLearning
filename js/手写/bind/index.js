Function.prototype.myBind = function () {
  // 将类数组转为数组
  const outerArgs = Array.from(arguments);
  // 取出数组第一个
  const ctx = outerArgs.shift();
  const self = this;
  return function () {
    const innerArgs = Array.from(arguments);
    // 方法重用
    return self.apply(ctx, [...outerArgs, ...innerArgs]);
  };
};
