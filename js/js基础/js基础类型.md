# 1. 判断函数

```
const date = new Date()
console.log(Object.prototype.toString.call(date))  //  [object Date]

```

```
// 以下是11种：
var number = 1;          // [object Number]
var string = '123';      // [object String]
var boolean = true;      // [object Boolean]
var und = undefined;     // [object Undefined]
var nul = null;          // [object Null]
var obj = {a: 1}         // [object Object]
var array = [1, 2, 3];   // [object Array]
var date = new Date();   // [object Date]
var error = new Error(); // [object Error]
var reg = /a/g;          // [object RegExp]
var func = function a(){}; // [object Function]

function checkType() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(Object.prototype.toString.call(arguments[i]))
    }
}

checkType(number, string, boolean, und, nul, obj, array, date, error, reg, func)
```
***
# 2.类型转换



# 3.this 

 > 1 new 绑定
```
function foo(){
    this.a = 10;
    console.log(this);
}
foo();                    // window对象
console.log(window.a);    // 10   默认绑定

var obj = new foo();      // foo{ a : 10 }  创建的新对象的默认名为函数名
                          // 然后等价于 foo { a : 10 };  var obj = foo;
console.log(obj.a);       // 10    new绑定 
```

**使用new调用函数后，函数会 以自己的名字 命名 和 创建 一个新的对象，并返回 **

特别注意 : 如果原函数返回一个对象类型，那么将无法返回新对象,你将丢失绑定this的新对象，例:
``` function foo(){
    this.a = 10;
    return new String("捣蛋鬼");
}
var obj = new foo();
console.log(obj.a);       // undefined
console.log(obj);         // "捣蛋鬼" 
```

> this绑定优先级

__new 绑定 > 显示绑定 > 隐式绑定 > 默认绑定__

> 总结
+ 如果函数被new 修饰
`this绑定的是新创建的对象，例:var bar = new foo();  函数 foo 中的 this 就是一个叫foo的新创建的对象 , 然后将这个对象赋给bar , 这样的绑定方式叫 new绑定 .`
+ 如果函数是使用call,apply,bind来调用的
`this绑定的是 call,apply,bind 的第一个参数.例: foo.call(obj); , foo 中的 this 就是 obj , 这样的绑定方式叫 显性绑定 .`
+ 如果函数是在某个 上下文对象 下被调用
`this绑定的是那个上下文对象，例 : var obj = { foo : foo };    obj.foo();  foo 中的 this 就是 obj . 这样的绑定方式叫 隐性绑定 .`
+ 如果都不是，即使用默认绑定
`  例:function foo(){...} foo() ,foo 中的 this 就是 window.(严格模式下默认绑定到undefined).
   这样的绑定方式叫 默认绑定 .
`



