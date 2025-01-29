// sum(1)(2)(3)(4)
const e = 7;
function sum(a) {
  console.log(a);
  return function (b) {
    console.log(b);
    return function (c) {
      console.log(c);
      // console.log(d);   refernce error

      return function (d) {
        console.log(d);
        return a + b + c + d + e;
      };
    };
  };
}
const sumAns = sum(1)(2)(3)(4);
console.log(`the final sumAnswer of (A+B+C+D+E) is : ${sumAns}`);

// question 2

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; // shaodwing block scope
    console.log(count); //1
  }
  console.log(count); // 0
})();

// question 3
// write a function that returns

var addSix = createBase(6);
addSix(10); // return 16
addSix(21); // returns 27

function createBase(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

// 4 quetsion ... optimize the time of code

// function find(index) {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }
//   console.log(a[index]);
// }
// console.time("6");
// find(6);
// console.timeEnd("6");

// console.time("12");

// find(12);
// console.timeEnd("12");

function find(){
    let a =[];
    for (let i = 0; i < 1000000; i++) {
        a.push(i*i);
    }
    return function (index){
        a[index];
    }
};
 const closure = find(6);
 
console.time("6");
find(6);
console.timeEnd("6");

console.time("12");

find(12);
console.timeEnd("12");


