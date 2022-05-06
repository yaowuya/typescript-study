// 布尔类型
let bool: boolean
bool = true
// bool = 123

// 数字类型
let num: number = 123
// num = "abc"

num = 0x7b
num = 0b1111011

//字符串类型
let str: string
str = 'abc'
str = `数值类型：${num}`

// console.log(str);

// 数组类型
let arr1: number[]
arr1 = [5]

let arr2: Array<number> = [1, 2, 3]

let arr3: (string | number)[] = ['a', 1, 2]

//元组类型
let tuple: [string, number, boolean]
tuple = ['a', 1, true]

//枚举类型
enum Roles {
  SUPER_ADMIN = 1,
  ADMIN = 2,
  USER = 3
}

// console.log(Roles[1]);
// console.log(Roles.ADMIN);
// console.log(Roles.USER);
// if (roles===Roles.ADMIN){}

//any类型
let value: any
value = 'abc'
value = 123
value = true

const arr4: any[] = [1, 'a', true]

// void类型
// 函数不返回任何值时，可以设置返回类型为void
const consoleText = (text: string): void => {
  console.log(text);
}

consoleText('abc')

// null和undefined
let u: undefined
u = undefined
// u=123

let n: null
n = null
// 严格检查类型时（tsconfig.js "strict": true），其他类型赋值成undefined 和 null 会报错。如果不进行严格检查，不会
// num = undefined
// num = null

// never类型,不存在的子类型
/**
 * never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never
 */
const errorFunc = (message: string): never => {
  throw new Error(message)
}

const infiniteFunc = (): never => {
  while (true) { }
}

//object类型
let obj = {
  name: 'zrf'
}
let obj2 = obj
obj2.name = 'L'
console.log(obj);

function getObject(obj: object): void {
  console.log(obj);
}

getObject(obj2)

// 类型断言
const getLength = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (<string>target).length
  } else {
    return target.toString().length
  }
}
