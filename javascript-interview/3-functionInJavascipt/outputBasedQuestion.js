// // iife =>
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


//  // using var
//  for(var i =0;i<5;i++){
//     setTimeout(function(){
//         console.log(i); // output => 5,5,5,5,5 due to hoisting and function scope
//     },i*1000);
//  }


//  // function hoisting function guess output 
//  var x = 21;
//   function guess() {
//     console.log(x);
//     var x = 42;
//   }
//   guess(); // output => undefined cause of local var 


  // spread and rest operator

  function multiply(...args){
    return args.reduce((acc,curr) => acc * curr, 1);
  }
 const ans = multiply(1,2,3,4,5); 
  console.log(ans); // output => 120

  // rest operator should be at last of ()
 function fn(a,x,y,...numbers){
    console.log(a,x,y,numbers);
 }
 fn(1,2,3,4,5,6,7); // output => 1,2,3,[4,5,6,7]