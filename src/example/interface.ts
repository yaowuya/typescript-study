/**
 * 接口
 * @param param0
 * @returns
 */

const getFullName1 = ({ firstName, lastName }: { firstName: string, lastName: string }) => {
  const msg = `${firstName} ${lastName}`
  console.log(msg);
  return msg
}

getFullName1({ firstName: 'haha', lastName: '18' })

// 接口
interface NameInfo {
  firstName: string,
  lastName: string
}

const getFullName2 = ({ firstName, lastName }: NameInfo): string => {
  const msg = `${firstName} ${lastName}`
  console.log(msg);
  return msg
}
const getFullName3 = (nameInfo: NameInfo): string => {
  const msg = `${nameInfo.firstName} ${nameInfo.lastName}`
  console.log(msg);
  return msg
}

getFullName2({ firstName: "zhong", lastName: "lala" })
getFullName3({ firstName: "zhong", lastName: "lala" })
// 1.可选参数
// 可选参数,通过'?'设置
interface Vegetable {
  color?: string,
  type: string
}

const getVegetable = ({ color, type }: Vegetable): string => {
  const result = `A ${color ? (color + ' ') : ''} ${type}`
  console.log(result);
  return result
}

getVegetable({ type: "tomato" })

// 2.消除多余参数验证
// 2.1 消除多余参数验证
getVegetable({ type: "cucumber", color: 'green', size: 2 } as Vegetable)

// 2.2索引签名，消除多余参数验证
// interface Vegetable {
//   color?: string,
//   type: string,
//   [prop: string]: any
// }

// 2.3 类型兼容性。
// let b=a,b会拥有a的属性
const vegetableInfo = {
  type: "cucumber",
  color: 'green',
  size: 2
}
getVegetable(vegetableInfo)

// 3.只读属性
interface Animal {
  readonly name: string
}

const dog: Animal = {
  name: "huahua"
}
// Cannot assign to 'name' because it is a read-only property
// dog.name = "ddd"

// 4.限定数组
interface ArrInter {
  0: number,
  readonly 1: string
}
let arr: ArrInter = [1, 'b']
// 只读限定
// arr[1]='b'

// 5.接口-函数类型， 定义函数的参数和参数类型
// 函数参数名不必和接口定义的参数名一样，位置一致就行
// interface AddFunc {
//   (num1: number, num2: number): number
// }
type AddFunc = (num1: number, num2: number) => number
const add: AddFunc = (n1, n2) => n1 + n2


// 6.接口-可索引的类型
// TypeScript支持两种索引签名：字符串和数字。
// 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
// 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。
// 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。

interface RoleDic {
  [id: number]: string
}

const role1: RoleDic = {
  0: "super_admin"
}

interface RoleDic2 {
  [id: string]: string
}
// 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。
// 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
const role2: RoleDic2 = {
  a: "super_admin",
  1: "admin"
}

// 7.类类型
// 实现接口
// 与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约。
interface ColockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}
// x! 将从 x 值域中排除 null 和 undefined.
class Clock implements ColockInterface {
  currentTime!: Date;
  setTime(d: Date): void {
    this.currentTime = d
  }

  constructor(h: number, m: number) { }
}

// 8.继承接口
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

// 9.混合类型
// 先前我们提过，接口能够描述JavaScript里丰富的类型。
// 因为JavaScript其动态灵活的特点，有时你会希望一个对象可以同时具有上面提到的多种类型。
// 一个例子就是，一个对象可以同时做为函数和对象使用，并带有额外的属性。
interface Counter {
  (): void;
  count: number;
}

const getCounter = (): Counter => {
  // tslint:disable-next-line: no-shadowed-variable
  const counter = () => { counter.count++ }
  counter.count = 0
  return counter
}

const counter: Counter = getCounter()
counter()
console.log(counter.count);
