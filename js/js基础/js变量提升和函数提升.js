// 对于变量声明，在真正执行到赋值语句之前，我们就已经可以使用此变量，但是初值为 undefined；而对于函数声明，在执行到函数声明之前，函数对象就已经存在在内存当中，并可以直接调用了。
console.log(a) // undefined
var a = 3
console.log(a) // 3

// 好像等于下面的代码
var a
console.log(a) // undefined
a = 3
console.log(a) // 3

// 变量提升和函数提升，都是将声明“提升”到当前作用域的顶端：
var foo = 5
function hoist() {
    console.log(foo) // function foo() {}
    foo = 3
    console.log(foo) // 3
    function foo() {}
}
hoist()
console.log(foo) // 5
// 相当于下面的代码
var hoist
var foo
hoist = function() {
    var foo
    foo = function() {}
    console.log(foo) // function foo() {}
    foo = 3
    console.log(foo) // 3
}
foo = 5
hoist()
console.log(foo) // 5
// 匿名函数声明
/**
 * 使用匿名函数声明时，sayHi 声明发生变量提升，但赋值为 undefined，因此执行 sayHi() 时会报错 Uncaught TypeError: sayHi is not a function。随后执行完赋值语句后，才成为一个可以执行的函数变量。
 */
sayHi() // Uncaught TypeError: sayHi is not a function
console.log(sayHi) // undefined
var sayHi = function() {
    console.log('Hi there!')
}
sayHi() // Hi there!

// 防止变量提升