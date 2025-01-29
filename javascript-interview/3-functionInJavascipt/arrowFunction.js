// unlimiited arguments
const fnArr = (...args)=>{
 console.log(...args);
 
}
fnArr(1,2,3);

// normal function
function normalFunction(){
    console.log(arguments);  // [Arguments] { '0': 1, '1': 2, '2': 3 }
    
}

normalFunction(1,2,3);

// this keyword in arrow functions
const arrowFunction = () => {
    console.log(this);  // Window object
}

arrowFunction();


// this function in arrow function points at global window object and in normal function it ppoints to the current object

const obj = {
    name: 'John',
    greet: () => {
        console.log(`Hello, ${this.name}`);  // points global object
    },
    greet2(){
        console.log(`Hello, ${this.name}`);
    }
};

obj.greet(); // Hello, UNDEFINED

obj.greet2(); // Hello, John

