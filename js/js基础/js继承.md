# 1.原型链继承

```javascript
function Parent() {
  this.name = "pick"
}
Parent.prototype.getName = function () {
  return this.name
}
function Child() {}
Child.prototype = new Parent()
const child = new Child()
console.log(child.getName()) // pick
```

> 1.引用类型的属性被所有实例共享，举个例子：

```javascript
function Parent() {
  this.names = ["kevin", "daisy"]
}

function Child() {}

Child.prototype = new Parent()

var child1 = new Child()

child1.names.push("yayu")

console.log(child1.names) // ["kevin", "daisy", "yayu"]

var child2 = new Child()

console.log(child2.names) // ["kevin", "daisy", "yayu"]
```

> 2.在创建 Child 的实例时，不能向 Parent 传参

---

# 2.借用构造函数(经典继承)

```javascript
function Parent() {
  this.names = ["kevin", "daisy"]
}

function Child() {
  Parent.call(this)
}

var child1 = new Child()

child1.names.push("yayu")

console.log(child1.names) // ["kevin", "daisy", "yayu"]

var child2 = new Child()

console.log(child2.names) // ["kevin", "daisy"]
```

> 优点：

1.避免了引用类型的属性被所有实例共享

2.可以在 Child 中向 Parent 传参

举个例子：

```javascript
function Parent(name) {
  this.name = name
}

function Child(name) {
  // 使用call将其中的数据都传递过去
  Parent.call(this, name)
}

var child1 = new Child("kevin")

console.log(child1.name) // kevin

var child2 = new Child("daisy")

console.log(child2.name) // daisy
```

> 缺点：
> 方法都在构造函数中定义，每次创建实例都会创建一遍方法。

---

# 3.组合继承

原型链继承和经典继承双剑合璧。

```js
function Parent(name) {
  this.name = name
  this.colors = ["red", "yellow", "blue"]
}
Parent.prototype.getName = function () {
  return this.name
}
function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}
// 原型指向父级，继承父级的属性和方法
Child.prototype = new Parent()
// 如果不在此指定子类的构造器的指向,当使用constructor在构造函数的prototype上新增属性，会直接添加到父类上
Child.prototype.constructor = Child

const child1 = new Child("小明", "18")
child1.colors.push("green")

console.log(child1.name) // 小明
console.log(child1.age) // 18
console.log(child1.colors) // ['red', 'yellow', 'blue', 'green']

var child2 = new Child("小红", "30")

console.log(child2.name) // 小红
console.log(child2.age) // 30
console.log(child2.colors) // ["red", "blue", "green"]
```

优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。

---

# 4.原型式继承

```js
function createObj(o) {
  function F() {}
  F.prototype = o
  return new F()
}
```

就是 ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型。
缺点：
包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。

```js
const person = {
    name: '张三',
    friends:['小红', '小蓝']
}
const person1 = createObj(person)
const person2 = createObj(person)
person1.name = '李四'
console.log(person2.name); // 张三
person1.friends.push('王五');
console.log(person2.friends); // ['小红', '小蓝', '王五']
注意：修改person1.name的值，person2.name的值并未发生改变，并不是因为person1和person2有独立的 name 值，而是因为person1.name = 'person1'，给person1添加了 name 值，并非修改了原型上的 name 值。
```

# 5. 寄生式继承

创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。

```js
function createObj(o) {
  const clone = Object.create(o)
  clone.sayName = function () {
    consol.log("hello word")
  }
  return clone
}
```

缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。
***
# 6. 寄生组合式继承
```js
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function prototype(child, parent) {
    var prototype = object(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}

// 当我们使用的时候：
prototype(Child, Parent);
```