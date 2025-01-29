// 1. SCOPE OF VAR LET CONST
console.log("scope");
{
    var a = 5;
    let b = 7;
    const g = 7;
}

console.log(a); // Output: ReferenceError: a is not defined
console.log(b);
console.log(g);


// 2 . Variable Shadowing
console.log("variable shadowing");

{
    let a = "shiva";

    if(true){
        let a = "kishore";
        console.log(a); // Output: kishore
    }
    console.log(a); // Output: shiva
}

// 3. Illegal Shadowing
    console.log("Illegal Shadowing");
function test(){
    var x = 10;
    let k = 5;
    if(true){
        let x = 20;
          var k = 7;
        //  let k =58;  prints new value
        console.log(x); // Output: 20
        console.log(k); // Output: k has already been defined
    }
    console.log(x); // Output: 10
}

test();


// 4. REDECLARATION
console.log("REDECLARATION");
const test2= ()=>{
    let a = 6;
    // let a= 8;
    console.log(a);

    var b =7;
    var b =9;
    console.log(b);
}
test2();


// 5. INTIALIZATION

console.log("INITIALIZATION");
const test3 =()=>{

    let z;
    console.log(z); // Output: undefined
    
    let b = undefined;
    console.log(b);

    var y;
    console.log(y); // Output: undefined
    
    let x = null;
    console.log(x); // Output: null
 
    const p;
    console.log(p); // Output: syntax error (missing intializer)
}

test3();

// 6. REINTIALIZATION

console.log("REINTIALIZATION");
const test4 =()=>{
    let a = 6;
    a = 8;
    console.log(a); // Output: 8

    const b = 7;
    b = 9;
    console.log(b); // Output: 9
}

test4();

// 7. HOISTING

console.log("HOISTING");
console.log(" two phases 1. creation phase => evry variable is taken in window object and given undefined while function gets whole function   2. execution phase");
const test4 = ()=>{

    console.log(a); // Output: undefined
    var a = 5;
    console.log(a); // Output: 5

    console.log(b);
    let b = 7;   // const and let has refrence error cant access before intialization and they are hoisted in temporal dead zone
    console.log(b); // Output: 7
}
test4();


console.log("example code for hoisting");
function abc(){
    console.log(a);  // undefined
    var a = 10;
}
abc();

function def(){
    console.log(a,m);  // hoisted but are in temporal dead zone and prints cant access before intialization
    const a = 10;
    let m = 20;
}
def();