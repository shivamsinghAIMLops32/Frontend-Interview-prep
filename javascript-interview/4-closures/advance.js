// functon()(value);
var count =7;
function makeFunc (){
    var count = 4;
    return function(value){
        count += value;
        return count;
    }
}

var increment = makeFunc()(5);

console.log(increment); // Output: 8

// or
var increment2 = makeFunc();

console.log(increment2(3)); // Output: 7


console.log("*************************************************************************************************");


console.log('scope chaining');

const globalName = "john cena"
var obj1 = 5;  // global scope

function outerFunction() {
    var obj1 = 8;
    console.log(obj1);  // Output: 8

    var obj2 = 9; // 
   return function innerFunction() {
        console.log(obj1);  // Output: 8
        console.log(obj2);  // Output: 9

        return function innerInnerFunction(passedValue) {
            console.log(obj1); // Output: 8
            console.log(obj1+obj2+passedValue);  // Output: 22
            console.log(globalName); // Output : john cena
            
            
        }
    }
}

outerFunction()()(5);