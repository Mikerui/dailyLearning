// 函数柯里化
function add() {
  const numberList = Array.from(arguments);
  // 进一步收集剩余参数
  const calculate = function () {
    numberList.push(...arguments);
    return calculate;
  }; // 闭包返回数据

  // 利用 toString 隐式转换，最后执行时进行转换
  calculate.toString = function () {
    return numberList.reduce((a, b) => a + b, 0);
  };

  return calculate;
}
console.log(add(1, 34, 5)(5));
console.log(add(1)(2)(3)); // 6
console.log(add(1, 2, 3)(4)); // 10;
console.log(add(1)(2)(3)(4)(5)); // 15;
