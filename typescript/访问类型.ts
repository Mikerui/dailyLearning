class Person {
  public name:string // 公有属性，外面可以访问
  private age:number // 只允许再类的内部被调用，外部不允许调用
  protected sex:string // 允许在类内及继承的子类中使用
  public sayHello(){
    console.log(this.name + this.age + ' say hello');
    return this.name
  }
}
const person = new Person()
person.name = 'hello word'
// person.age = 18
console.log(person.sayHello())