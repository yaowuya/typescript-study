/**
 * ES6中的类
 */
(() => {
  /* ES5和ES6实现创建实例 */
  // @ts-ignore
  function Point (x, y) {
    this.x = x;
    this.y = y;
  }

  Point.prototype.getPosition = function () {
    return '(' + this.x + ', ' + this.y + ')';
  }
  const p1 = new Point(2, 3);
  console.log(p1, p1.getPosition());

  const p2 = new Point(4, 5);
  console.log(p2, p2.getPosition());

  /* ES6 constructor方法*/
  class Point1 {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    getPosition () {
      return `(${this.x}, ${this.y})`;
    }
  }
  const p3 = new Point1(2, 4)
  console.log(p3, p3.getPosition());
  console.log(p3.hasOwnProperty('getPosition'));
  console.log(p3.__proto__.hasOwnProperty('getPosition'))

  /* 取值函数和存值函数 */
  // es5
  let info = {
    _age: 8,
    // setter
    set age (newVal) {
      if (newVal > 18) {
        console.log('大于18岁')
      } else {
        console.log('小于18岁');
      }
    },
    // getter
    get age () {
      console.log(`my age is:${this._age}`);
      return this._age
    }
  }
  console.log(info.age);
  info.age = 15
  info.age = 20

  // es6
  class Info {
    constructor(age) {
      this._age = age
    }
    // setter
    set age (newAge) {
      console.log(`my age is ${newAge}`);
      this._age = newAge
    }
    // getter
    get age () {
      console.log('why get my age?');
      return this._age;
    }
  }
  const info2 = new Info(18)
  console.log(info2.age);
  info2.age = 17
  console.log(info2.age);

  /* class表达式 */
  // es5
  const func1 = function () { }
  function func2 () { }

  // es6
  const class1 = class { }
  class class2 { }

  /* 静态方法 */
  // es6
  class Point2 {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    getPosition () {
      return `(${this.x}, ${this.y})`
    }
    static getClassName () {
      return Point2.name
    }
  }
  const p4 = new Point2(4, 4)
  console.log(p4.getPosition(), Point2.getClassName());

  /* 实例属性其他写法 */



})()