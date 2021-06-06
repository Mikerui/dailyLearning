//1.使用 ！开头，结构清晰，不容易混乱，推荐使用；
!(function () {
  document.write('ni hao')
})()(
  //2.无法表明函数与之后的()的整体性，不推荐使用。
  function () {
    document.write('wo hao')
  }
)()

//3.能够将匿名函数与调用的()为一个整体，官方推荐使用；
;(function () {
  document.write('hello')
})()

//4.放在中括号内执行
;[
  (function () {
    document.write('world')
  })(),
]

//5.使用 + 运算符
;+(function () {
  document.write('ni hao')
})()
//6.使用 - 运算符
;-(function () {
  document.write('ni hao')
})()

//7.使用波浪符 ~
~(function () {
  document.write('ni hao')
})()

//8.使用 void
void (function () {
  document.write('ni hao')
})()
