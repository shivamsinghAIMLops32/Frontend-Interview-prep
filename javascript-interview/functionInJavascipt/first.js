// functions in js

// q1 whhat is function declaration
function greet(name) {
  console.log(`${name} welcome to my website`);
}
greet("john cena");

// q2 what is function expression
const greet2 = function (name) {
  console.log(`${name} welcome to my website`);
};
greet2("jane");

// q3 what is arrow function
const greet3 = (name) => {
  console.log(`${name} welcome to my website`);
};
greet3("tim");

const sum = (a, b) => a + b;
console.log(sum(2, 3)); // 5

// question : what is IIFE (immediately invocked function expression)
(function () {
  console.log("IIFE executed");
})();

// q4 what is function hoisting
console.log(greet4("jim")); // undefined
function greet4(name) {
  console.log(`${name} welcome to my website`);
}

console.log(mul(2, 5));

function mul(a, b) {
  return a * b;
}

// q5 what is callback function  => in js functions are first class objects so that means we can pass it in another function like other normal variable
function greet5(name, callback) {
  console.log(`${name} welcome to my website`);
  callback(name);
}
greet5("jim", function (naming) {
  console.log(`${naming} callback function executed`);
});

// q6 callback another example

function greetings(name, age, callback) {
  console.log(`your name is ${name} and age is ${age}`);
  callback(age, 5);
}
greetings("john", 30, function (age, diff) {
  console.log(`the difference between your age and 5 is ${age - diff}`);
});

// q7 what is async/await
async function getData(url) {
  try {
    const jsonData = await fetch(`url`);

    if (!jsonData.ok) {
      throw new Error(`HTTP error! status: ${jsonData.status}`);
    }
    const data = await jsonData.json();
    return data;
  } catch (error) {
    console.log(`error getting data`, error);
  }
}
getData("https://api.example.com/data");

// q8 what is promise chaining

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
  }, 1000);
}).then((result) => {
  console.log(result);
});

// q9 what is promise using fetch
new Promise((resolve, reject) => {
  setTimeout(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => resolve(data));
  }, 5000);
});

// q 10 what is call back
