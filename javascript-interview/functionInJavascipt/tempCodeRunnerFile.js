// iife =>
// (function (x) {
//   return (function (y) {
//     console.log(x);    // outpue => 1 due to closure
//   })(2);
// })(1);


// // function scope
//  var x = 1;
//  (function (y) {
//     console.log(x);    // output => 1 due to hoisting and function scope
//  })(2);

// // block scope (ES6)    
//  {
//     let x = 1;
//     console.log(x);    // output => 1 due to hoisting and block scope
//  }

//  for(let i =0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i+1); // output => 1,2,3,4,5 due to hoisting and block scope
//     },i*1000);
//  }