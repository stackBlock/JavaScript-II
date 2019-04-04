// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function circle() {
  let circleColor = "green";
  let squareColor = "red";
  let triangleColor = "purple";
  console.log(`The circle is ${circleColor}`);
  square();
  function square() {
    console.log(`The square is ${squareColor}`);
    triangle();
    function triangle() {
      console.log(`The triangle is ${triangleColor}`);
    }
  }
};

circle();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    count = count + 1;
    return count;
  }
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
// newCounter(); // 1
// newCounter(); // 2



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

// const counterFactory = () => {
const counterFactory = (function() {
  let number = 0;
  function changeNumber(val) {
    console.log(`Changed to: ${number += val}`);
  }
  return {
    increment: function() {
      changeNumber(1);
    },
    decrement: function() {
      changeNumber(-1);
    },
    // value: function() {
    //   return number;
    // }
  }
  
})();

// alert(counterFactory.value());
counterFactory.increment();
counterFactory.increment();
// alert(counterFactory.value()); // 2
counterFactory.decrement();
// alert(counterFactory.value()); // 1




// Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.


