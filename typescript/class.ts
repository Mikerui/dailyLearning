class Lady {
  content  = 'Hi 美女'
  sayHello (){
    return this.content 
  }
}
const goods = new Lady()
console.log(goods.sayHello())
// 类的继承
class shuaige extends Lady {
  sayLove(){
    return '加个微信'
  }
}
const shuaige1 = new shuaige()
console.log(shuaige1.sayHello(), shuaige1.sayLove())
// 类的重写
class Chognxie extends Lady {
  sayHello(){
    return '这是重写的类'
  }
  sayLove(){
    return '加个微信'
  }
}
const chognxie = new Chognxie()
console.log(chognxie.sayHello(), chognxie.sayLove())  