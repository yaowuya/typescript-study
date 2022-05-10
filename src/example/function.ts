/**
 * 函数
 */

(() => {
  // 1.函数
  function add(x: number, y: number) {
    return x + y
  }

  const add1 = (x: number, y: number) => x + y

  // 2.函数类型
  // 2.1为函数定义类型
  function add2(x: number, y: number): number {
    return x + y
  }

  // 2.2 完整的函数类型
  let add3: (x: number, y: number) => number
  add3 = (arg1: number, arg2: number): number => arg1 + arg2
  add3 = (arg1: number, arg2: number) => arg1 + arg2

  // 2.3 使用接口定义函数类型（类型别名）
  // interface Add {
  //   (x: number, y: number): number
  // }
  type Add = (x: number, y: number) => number
  type isString = string
  let addFunc: Add
  addFunc = (arg1: number, arg2: number) => arg1 + arg2

  // 3.可选参数和默认参数
  // 3.1 可选参数
  type AddFunction = (arg1: number, arg2: number, arg3?: number) => number
  let addFunction: AddFunction
  addFunction = (x: number, y: number) => x + y
  addFunction = (x: number, y: number, z?: number) => x + y + (z as number)

  // 3.2 默认参数
  const addFunction1 = (x: number, y: number = 3) => x + y
  console.log(addFunction1(1));

  /* 3.3 剩余参数 */
  // es5
  function handleData() {
    if (arguments.length === 1) return arguments[0] * 2
    else if (arguments.length === 2) return arguments[0] * arguments[1]
    else return Array.prototype.slice.apply(arguments).join("_")
  }
  // console.log(handleData(1, 2));

  const handleData1 = (arg1: number, ...args: number[]) => {
    // ...
  }

  // 4. 重载
  // ------------重载部分------------
  function funcTest(x: string): string[]
  function funcTest(x: number): number[]
  // ------------实体部分------------
  function funcTest(x: any): any {
    if (typeof x === 'string') {
      return x.split('')
    } else {
      return x.toString().split('').map((item: string) => Number(item))
    }
  }

  funcTest('abc').map((item) => {
    return item.fixed()
  })
  funcTest(123).map((item) => {
    return item * 2
  })






})()

