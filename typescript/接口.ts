interface Girl{
  name: string;
  age: number;
  bust: number;
  waistline?: number
}
const getResume = (girl: Girl) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "胸围是：" + girl.bust);
  girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);
}
const girl = {
  name:'小姐姐',
  age:18,
  bust:36,
  waistline:80
}
getResume(girl)

// 加入任意值
interface Home {
  name:string,
  num:number,
  [age:string]:any // 任意类型
}


// 接口里的方法
interface Home1 {
  name:string,
  num:number,
  [sex:string]:any, // 任意类型
  say():string
}
// 接口的约束 
class XiaoJieJie implements Girl {
  name = "刘英";
  age = 18;
  bust = 90;
  say() {
    return "欢迎光临 ，红浪漫洗浴！！";
  }
}

// 接口继承
interface techer extends Girl {
  teach()
}