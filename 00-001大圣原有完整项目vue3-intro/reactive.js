// // let count = 1
// // let double = count * 2
// // console.log(double)
// // count = 2
// // console.log(double)


// // let count = 1
// // // 计算过程封装成函数
// // let double = getDouble(count)
// // console.log(double)

// // count = 2
// // // 重新计算
// // double = getDouble(count)
// // console.log(double)

// let getDouble = n=>n*2
// let obj = {
//     count:1
// }
// let double = getDouble(obj.count)

// let proxy = new Proxy(obj,{
//     get : function (target,prop) {
//         return target[prop]
//     },
//     set : function (target,prop,value) {
//         target[prop] = value;
//         if(prop==='count'){
//             double = getDouble(value)
//         }
//     },
//     deleteProperty(target,prop){
//         delete target[prop]
//         if(prop==='count'){
//             double = undefined
//         }
//     }
// })
// console.log(obj.count,double)
// proxy.count = 2
// console.log(obj.count,double) 
// delete proxy.count
// console.log(obj.count,double) 


// let obj = new Prox
// Object.defineProperty(obj,'count',{
//     get(){
//         return count
//     },
//     set(val){
//         count = val
//         double = getDouble(val)
//     }
// })
// console.log(double)
// obj.count = 2
// console.log(double)

// delete obj.count
// console.log(double) // doube还是4


let getDouble = n => n * 2
let _value = 1
double = getDouble(_value)

let count = {
  get value() {
    return _value
  },
  set value(val) {
    _value = val
    double = getDouble(_value)

  }
}
console.log(count.value,double)
count.value = 2
console.log(count.value,double)


