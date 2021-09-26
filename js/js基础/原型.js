class Person {
  constructor (name) {
    this.name = name;
  }
  drink () {
    console.log ('喝水');
  }
}

// 使用extends继承父类person
class Student extends Person {
  // 构造函数
  constructor (name, source) {
    super (name);
    this.source = source;
  }
  introduce () {
    console.log (`${this.name}, 考了${this.source}分`);
  }
}

const student = new Student ('张三', 100);
console.log (student);
class Teacher extends Person {
  constructor (name, subject) {
    super (name);
    this.subject = subject;
  }
  teach () {
    console.log (`我是${this.name}, 教${this.subject}`);
  }
}

const teacher = new Teacher ('张三', '语文');
console.log (teacher);
