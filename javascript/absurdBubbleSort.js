// const readline = require('readline');
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
//
// function absurdBubbleSort (arr, sortCompletionCallback) {
//   let sorted = false;
//   while (sorted === false) {
//     sorted = true;
//
//     for (var i = 0; i < arr.length; i++) {
//       let j = i + 1;
//       if (arr[i] > arr[j]){
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         sorted = false;
//       }
//     }
//   }
//   // reader.close();
//   return arr;
// }
//
// function askIfGreaterThan(el1, el2, callback) {
//   reader.question(`Is ${el1} bigger than ${el2}, bro?`, (res) => {
//
//   });
// }
//
// absurdBubbleSort([1, 4, 6, 7, 3, 6, 2]);




const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`Is ${el1} bigger than ${el2}, bro? `, (res) => {
    if (res === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.

  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], function (input) {
      if (input) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        i++;
        innerBubbleSortLoop(arr, i, true, outerBubbleSortLoop);
      } else {
        i++;
        innerBubbleSortLoop(arr, i, false, outerBubbleSortLoop);
      }
    });
  }
}

innerBubbleSortLoop([1,5,6642,3,3], 0, true );

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
