// 1. js 复杂对象， 引用拷贝
// 2. 递归 树  key =>value value object

// 1. 递归主体, 循环要解决的问题
// 2. 推出条件 不能一直递归, 要退出

function deepClone(o1,o2) {
  for (let k in o2) {
    o1[k] = o2[k];
    if (typeof o2[k] ==='object') {
      o1[k] = {}
      deepClone(o1[k], o2[k]);
    } else {
      o1[k] = o2[k];
    }
  }
}

let obj = {
  a: 1,
  b: [1,2,3],
  c: {
    d: 4
  }
}

let emptyObj = Object.create(null);
deepClone(emptyObj, obj);
console.log(emptyObj.a == obj.a); //true
console.log(emptyObj.b == obj.b); //false
obj.a =2
console.log(emptyObj)

console.log(obj)