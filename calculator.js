exports.add = function(a, b) {
    return a+b;
}

exports.subtract = function(a, b) {
    return a-b;
}

exports.foo = function(){
  this.foo1();
  this.foo1();
  return 'foo';
}

exports.foo1 = function(){
  return 'foo1';
}


// //broswer
// var calculator = {
//   add(a, b){
//     return a+b;
//   },
//   subtract(a, b){
//     return a-b;
//   }
// }