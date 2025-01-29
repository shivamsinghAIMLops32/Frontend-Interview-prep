// map : used to return a new array by iterating over the existing array and perform some operation 


const array = [1, 2, 3, 4, 6];
const mappedArray = array.map((value) => {
    return value.toString();
});
console.log(mappedArray);

console.log("array of object");

const array2 = [
  {
    name: "John",
    age: 25,
  },
  {
      name: "Alice",
      age: 7,
    },
    {
        name: "Bob",
        age: 28,
    },
    {
        name: "Charlie",
        age: 14,
    },
    {
        name: "David",
        age: 27,
    },
];

const mappedArray2 = array2.map(
    (value) => {
      return {
        name: value.name,
        age: value.age.toString(),
      };
    }
);

console.log(mappedArray2);

// filer 
console.log("FILTER EXAMPLE");

const filteredArray = array2.filter((value)=>value?.age <= 15);

console.log(filteredArray);



// reduce

console.log("REDUCE EXAMPLE : it returns a single value" );

const ages = [1, 2, 3, 4, 6,56];

const sumOfAges = ages.reduce((accumulator, currentValue) => {
    console.log(currentValue);
    return accumulator + currentValue},0);

console.log( sumOfAges);


console.log("number of elements in array");
const noOfAges = ages.reduce((accumulator,currentValue)=> accumulator+1,0); // counts the number of elements in the array

console.log(noOfAges);