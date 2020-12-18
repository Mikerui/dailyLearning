function instanceOf(a, b) {
  // 判断基本类型
  if (typeof a !== 'object' || b === null) return false;
  // getPrototypeOf 获取参数的原型对象
  let proto = Object.getPrototypeOf(a);
  const prototype = b.prototype;
  while (proto) {
    if (proto === null) return false;
    if (proto === prototype) return true;
    // 进一步迭代
    proto = proto.__proto__;
  }
}
