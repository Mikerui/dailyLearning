// 小型的单例库
const A = {
  Util: {
    util_method: function () {},
  },
  Tool: {
    tool_method: function () {},
  },
  Ajax: {
    get: function () {},
    post: function () {},
  },
  Others: {
    getCont: function () {},
  },
};

// 惰性单例模式
const LazySingle = (function () {
  // 单例实例应用
  const _instance = null;
  // 单例
  function Single () {
    // 定义私有属性和方法
    return {
      publicMethod: function () {},
      publicProperty: '1.0',
    };
  }
  // 获取单例接口
  return function () {
    // 如果为单列创建单例？
    if (!_instance) {
      _instance = Single ();
    }
    // 返回单例
    return _instance;
  };
}) ();
