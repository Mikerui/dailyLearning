// @ts-nocheck
// 函数定义的方法  
/**
 * 怎么能让团队的小伙伴更好的使用0.
 * 
 */

// 函数式
function checkName(){
  // 验证姓名
}
function checkEmail(){
  // 验证邮箱
}

// 函数的另一种形式
var checkName = function () {}
var checkEmail = function () {}

// 用对象收编变量
var checkObject = {
  checkName:function(){},
  checkEmail:function(){},
}
// 对象的另一种形式
var checkObject = function(){}
checkObject.checkName = function(){}
checkObject.checkEmail = function(){}
// 真假对象
var checkObject = function () {
  return {
    checkName:function(){},
    checkEmail:function(){},
  }
}
// 类也可以
var checkObject = function () {
    this.checkName =function(){}
    this.checkEmail =function(){}
}