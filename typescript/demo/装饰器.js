class Circle{
  draw(){
    console.log('画一个圆形')
  }
}

class Decorator{
  constructor(circle){
    this.circle = circle
  }
  draw(){
    this.circle.draw()
    this.setRedBorder(circle)
  }
  setRedBorder(){
    console.log('设置红色的边框')
  }
}

// 测试代码
let circle = new Circle()
circle.draw()
let dec = new Decorator(circle)
dec.draw()





function testDesc(isDesc){
  return function(target){
    target.isDesc = isDesc
  }
}

@testDesc(false)
class Demo {

}
alert(Demo.isDesc)

