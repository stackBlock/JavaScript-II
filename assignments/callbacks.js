// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

const hope = ['Pencil', 'Notebook', 'yo-yo', 'Notebook', 'Gum']



  //Given this problem: 
  
  // function firstItem(arr, cb) {
  //   // firstItem passes the first item of the given array to the callback function.
  // }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });







function getLength(arr, cb) {
  return cb(arr.length);
}

function last(arr, cb) {
  return cb(arr[arr.length -1]);
  // last passes the last item of the array into the callback.
}

function sumNums(x, y, cb) {
  return cb(x+y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

function multiplyNums(x, y, cb) {
  return cb(x*y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function contains(item, list, cb) {
  for (let i = 0; i < list.length; i++) {
    if (item === list[i]) {
      return cb(true);
    } else {
    }
  }
  return cb(false);
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

getLength(items, (length) => console.log(length));

last(items, (last) => console.log(last));

sumNums(5, 6, (sum) => console.log(sum));

multiplyNums(5, 7, (multiply) => console.log(multiply));

contains("Gum", items, function(answer) {
  console.log(answer);
})


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  let newArray = array;
  for (let i = 0; i < array.length; i++) {

    for (let k = 0; k < array.length; k++) {
      if (array[i] === array[k]) {

        newArray = newArray.filter(function(same) {
          return same != array[i];

        })
      }
    }  
  }
  return cb(newArray);
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

removeDuplicates(hope, function(noDupes) {
  console.log(noDupes);
})
