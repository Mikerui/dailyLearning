// 判断类型
function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}
// 判断是否是原始类型类型.
// 对应可引用的数据类型，需要递归遍历；对应不可引用的数据类型，直接复制即可
function isReferenceType(target) {
  let type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
}
// 获取原型上的方法
function getInit(target) {
  let ClassNames = target.constructor;
  return new ClassNames();
}
// 引用类型
const mapTag = 'Map';
const setTag = 'Set';
const arrayTag = 'Array';
const objectTag = 'Object';

// 不可引用类型
const boolTag = 'Boolean';
const dateTag = 'Date';
const errorTag = 'Error';
const numberTag = 'Number';
const regexpTag = 'RegExp';
const stringTag = 'String';
const symbolTag = 'Symbol';
const bufferTag = 'Uint8Array';

let deepTag = [mapTag, setTag, arrayTag, objectTag];
function deepClone(target, map = new WeakMap()) {
  let type = getType(target);
  let isOriginType = isReferenceType(target);
  if (!isOriginType) {
    return target;
  } // 对于不可引用的数据类型，直接复制即可

  let cloneTarget;
  if (deepTag.includes(type)) {
    cloneTarget = getInit(target);
  }

  // 防止循环引用
  if (map.get(target)) {
    return map.get(target);
  }
  map.set(target, cloneTarget);

  // 如果是 mapTag 类型
  if (type === mapTag) {
    console.log(target, cloneTarget, 'target');
    target.forEach((v, key) => {
      cloneTarget.set(key, deepClone(v, map));
    });
    return cloneTarget;
  }

  // 如果是 setTag 类型
  if (type === setTag) {
    target.forEach((v) => {
      cloneTarget.add(deepClone(v, map));
    });
    return cloneTarget;
  }

  // 如果是 arrayTag 类型
  if (type === arrayTag) {
    target.forEach((v, i) => {
      cloneTarget[i] = deepClone(v, map);
    });
    return cloneTarget;
  }

  // 如果是 objectTag 类型
  if (type === objectTag) {
    let array = Object.keys(target);
    array.forEach((i, v) => {
      cloneTarget[i] = deepClone(target[i], map);
    });
    return cloneTarget;
  }
}
