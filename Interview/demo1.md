# 1.说一下 Vue 的双向绑定数据的原理

vue 实现数据双向绑定主要是：采用数据劫持结合“发布者 – 订阅者”模式的方式，通过 Object.defineProperty() 来劫持各个属性的 setter、 getter，在数据变动时发布消息给订阅者，触发相应监听回调。

# 2. 解释单向数据流和双向数据绑定

单向数据流：顾名思义，数据流是单向的。数据流动方向可以跟踪，流动单一，追查问题的时候可以更快捷。缺点就是写起来不太方便。要使 UI 发生变更就必须创建各种 action 来维护对应的 state。
双向数据绑定：数据之间是相通的，将数据变更的操作隐藏在框架内部。优点是在表单交互较多的场景下，会简化大量与业务无关的代码。缺点就是无法追踪局部状态的变化，增加了出错时 debug 的难度。

# 3. Vue 如何去除 URL 中的

vue-router 默认使用 hash 模式，所以在路由加载的时候，项目中的 URL 会自带 “#”。如果不想使用 “#”， 可以使用 vue-router 的另一种模式 history：

```
new Router({
  mode: 'history',
  routes: [ ]
})
```

需要注意的是，当我们启用 history 模式的时候，由于我们的项目是一个单页面应用，所以在路由跳转的时候，就会出现访问不到静态资源而出现 “404” 的情况，这时候就需要服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 “index.html” 页面。

# 4. 对 MVC、MVVM 的理解

![Image text](https://static.javascriptc.com/frontend/interview/vuejs/1110/vu001.webp)

### 特点：

1. View 传送指令到 Controller；
2. Controller 完成业务逻辑后，要求 Model 改变状态
3. Model 将新的数据发送到 View，用户得到反馈。
4. 所有通信都是单向的。
