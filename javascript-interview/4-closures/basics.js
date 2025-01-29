// CLOSURES IN JAVASCRIPT

// LEXICAL SCOPE => global values is accessible inside function
var name = "brock";

function local() {
//   var name = "john";
  console.log("Hello, boy " + name);  // directly access brock
}
local();
console.log("Hello, " + name);

 console.log("another function**************************************************************");
 
function local2() {
    console.log(name);        // undefined
   var name = "john";
  console.log("Hello, boy " + name);  // john
}
local2();



// block level var_
function local3(){
    var value = 7;
}

console.log(value);  // ReferenceError: value is not defined