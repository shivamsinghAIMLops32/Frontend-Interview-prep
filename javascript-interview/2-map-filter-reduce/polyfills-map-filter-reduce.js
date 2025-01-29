// map polyfill

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this)); // current arr[i],i,array
  }
  return temp;
};

const array7 = [1, 2, 3, 4, 5, 6, 7];

const ans = array7.myMap((val, i, array7) => val * 5);

console.log(ans); // [5, 10, 15, 20, 25, 30, 35]

// filter polyfill
Array.prototype.myFilter = function (cb) {

    let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  
    }
  return temp;
}

const array8 = [1, 2, 3, 4, 5, 6, 7];

const ans2 = array8.myFilter((val, i, array8) => val % 2 === 0);



// reduce pollyfills

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue || this[0];
  for (let i = initialValue? 0 : 1; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }
  return accumulator;
}
