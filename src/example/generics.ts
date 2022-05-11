/**
 * 泛型
 */
(() => {
  // 1.简单实用
  const genGetArray = <T>(value: T, times: number = 5): T[] => {
    return new Array(times).fill(value)
  }

  console.log(genGetArray<string>('hello', 3));
  console.log(genGetArray<number>(124, 3));

  // 2.泛型变量
  const genGetArray1 = <T, U>(arg1: T, arg2: U, times: number): [T, U][] => {
    return new Array(times).fill([arg1, arg2])
  }
  console.log(genGetArray1<string, number>("a", 2, 4));

  // 3.泛型类型
  // 无约束时
  let genGetArray2: <T>(arg: T, times: number) => T[]
  genGetArray2 = (arg: any, times = 5) => {
    return new Array(times).fill(arg)
  }
  // genGetArray2(123, 3).map(item => item.length)

  // 4. 泛型约束
  // 函数别名
  type genGetArray3 = <T>(arg: T, times: number) => T[]
  const getArray: genGetArray3 = (arg: any, times = 5) => {
    return new Array(times).fill(arg);
  }

  // // 函数接口
  // interface GenGetArray4 {
  //   <T>(arg: T, times: number): T[]
  // }

  // 外层泛型变量
  interface GenGetArray4<T> {
    (arg: T, times: number): T[],
    data: T[]
  }

  // 5.泛型约束中使用类型参数
  interface ValueWithLength {
    length: number
  }

  const genGetArray5 = <T extends ValueWithLength>(arg: T, times = 5): T[] => {
    return new Array(times).fill(arg)
  }
  genGetArray5([1, 2, 3], 5)
  genGetArray5('hello', 5)
  // genGetArray5(10, 5)
  genGetArray5({
    length: 3
  }, 5)

  const getProps = <T, K extends keyof T>(object: T, propName: K) => {
    return object[propName]
  }

  getProps({ a: 1, b: 'x' }, 'a')
  // getProps({a: 1, b: 'x'}, 'c') // ERROR


})()