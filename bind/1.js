// Function.prototype.bind2 = function (context, ) {
//   var args = Array.prototype.slice.call(arguments,1); //借用方法 arguments类数组
//   // console.log(args)
//   var that = this
//   return function () {
//     // ? bar 是谁？
//     // ？.apply(context) bar->Function
//     const bindArgs = Array.prototype.slice.call(arguments)
//     console.log(bindArgs)
//     that.apply(this instanceof that ? this : context, args.concat(bindArgs))
//     // console.log(context)
//   }
// }

Function.prototype.bind2 = function(context) {
  var self = this;
  //context
  var args = Array.prototype.slice.call(arguments, 1);
  var FNOP = function() {}
  var bound = function () {
      console.log(arguments)  
    var bindArgs = Array.prototype.slice.call(arguments);
    // console.log(bindArgs)
    self.apply(this instanceof self ? this: context, args.concat(bindArgs));
  }
  FNOP.prototype = this.prototype;
  bound.prototype = new FNOP();
  return bound;
}

var value = 2;
var foo = {
  value: 1
}

function bar(name,age) {
  this.habit = 'shopping'
  console.log(this.value);
  console.log(name);
  console.log(age)
}

bar.prototype.friend = 'kevin'
var bindFoo = bar.bind2(foo, 'daisy');
var obj = new bindFoo('18');
console.log(obj.habit);
console.log(obj.friend);
// bar.apply(foo)
// const bar2 = bar.bind2(foo,'daisy',19);
// bar2();

// bind ?
// 1 返回一个新的函数， 高阶函数 return function() { bar()}
// this的指向? 闭包