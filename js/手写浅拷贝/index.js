const shallowClone = (target) => {
  const result = [];
  for (let prop in target) {
    // 如果这个属性是自身的，而不是通过原型链给的，那就赋值过来
    if (target.hasOwnProperty(prop)) {
      result[prop] = target[prop];
    }
  }
  // 返回拷贝后的结果
  return result;
};

// 定义检测数据类型的功能函数
const checkedType = (target) => {
  return Object.prototype.toString.call(target).slice(8, -1);
};

const deepClone = (target) => {
  let result;
  const targetType = checkedType(target);
  if (targetType === 'Object') {
    result = {};
  } else if (targetType === 'Array') {
    result = [];
  } else {
    return result;
  }
  //   遍历目标对象
  for (let i in target) {
    let value = target[i];
    if (checkedType(value) === 'Object' || checkedType(value) === 'Array') {
      result[i] = deepClone(value);
    } else {
      result[i] = value;
    }
  }
  return result;
};
