# ts 的类型

- Undefined :
- Number:数值类型
- string : 字符串类型;
- Boolean: 布尔类型；
- enum：枚举类型；
- any : 任意类型，一个牛 X 的类型；
- void：空类型；
- Array : 数组类型;
- Tuple : 元祖类型；
- Null ：空类型。
- Undefined 类型

## Undefined 类型

声明数值类型的变量 age，但不予赋值

```
var age:number
console.log(age)
```

## Number 类型

```var age:number = 18
var stature:number = 178.5
console.log(age)
console.log(stature)
```

### 注意：几种特殊的 Number 类型

- NaN：它是 Not a Number 的简写，意思就是不是一个数值。如果一个计算结果或者函数的返回值本应该是数值，但是由于种种原因，他不是数字。出现这种状况不会报错，而是把它的结果看成了 NaN
- Infinity :正无穷大。
- -Infinity：负无穷大。

## String 类型

由单引号或者双引号括起来的一串字符就是字符串。比如："test",'123456'

```
const str:string = "字符串类型"
console.log(str)
```

## Boolean 布尔类型

通过对与错的判断是最直观的逻辑处理，值只有两种 true 和 false

```
const a:boolean = true
const b:boolean = true
```

## enum 类型

有多个值，并且是固定的，比如

- 一年的四季：春夏秋冬
- 性别：男、女、人妖

```
enum fourSeasons{nan,nv,renYao}
console.log(fourSeasons.nan) // 返回下标
```

## any 类型

任何类型都可以

```
var t:any =10
t = "test"
t = true
console.log(t)
```

## Null

代表空，跟 Undefined 类似

# ts 的函数

## 定义函数

```
function teFunc(name: string): string {
  return `${name}测试ts函数`
}
console.log(teFunc('mike_ma'))
```

## 形参和实参

- 形参的使用:函数定义的时候写的参数是形参。从字面意义上我们可以看出，形参就是形式上的参数。我们定义了形参也就规定了此函数的参数个数和参数类型，规范了函数。

```
function teFunc(name: string): string {
  return `${name}测试ts函数`
}
```

> 比如这个函数，就定义了一个形参，它的类型是字符串类型。

- 实参的使用：调用函数时传递的具体值就是实参。同样从字面理解，实参就是真实的参数，我们在使用的时候，具体真实传递过去的就是实参，比如 'mike','mike_ma'，这些具体的参数就是实参。 实参是真正需要使用的时候才传递

> 注意，我们使用的时候，有几个形参就要传递几个实参，并且类型都要对应上

## 有可选参数的函数

```
function teFunc(name: string,age?:number): string {
  let str:string = ''
  if(age!=undefined){
    str = `${age}岁的`
  }
  return `str${name}测试ts函数`
}
console.log(teFunc('mike',18))
```

## 有默认参数的函数

不传递的时候，会给我们一个默认的值

```
function teFunc(name: string='mike',age?:number=18): string {
  let str:string = ''
  if(age!=undefined){
    str = `${age}岁的`
  }
  return `str${name}测试ts函数`
}
console.log(teFunc('mike',18))
```

# 三种函数的定义方式
