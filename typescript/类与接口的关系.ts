interface Human {
    name: string;
    eat(): void;
}
// 接口只能限制类的共有成员  也不能约束类的构造函数
class Asian implements Human {
    constructor(name: string) {
        this.name = name
    }
    name: string
    eat() { }
    sleep() { }
}

interface Man extends Human {
    run(): void
}

interface Child {
    cry(): void
}

interface Boy extends Man, Child { }
let Boy: Boy = {
    name: '',
    run() { },
    cry() { },
    eat() { }
}


// 接口继承类
class Auto {
    state = 1
    state2 = 2
}
interface AutoInterface extends Auto {

}

class c implements AutoInterface {
    state = 1
    state2 = 2
}

class Bus extends Auto implements AutoInterface {

}
