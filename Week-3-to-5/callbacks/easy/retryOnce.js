// Problem Description – retryOnce(fn)
//
// You are given a function `fn` that returns a Promise.
// Your task is to return a new function that calls `fn` and retries it once
// if the first attempt rejects.
// If the second attempt also rejects, the error should be propagated.

// function retryOnce(fn) {
//   return function (...args) {
//     const finalCallback = args.pop();

//     fn(...args, (err1, result1) => {
//       if (!err1) {
//         return finalCallback(null, result1);
//       }

//       fn(...args, (err2, result2) => {
//         finalCallback(err2, result2);
//       });
//     });
//   };
// }

function retryOnce(fn) {
  //now i have seen the other function maybe they have given us the solution but its ok we couldnt do anything right.
  return () => {};
}

function fn() {
  return new Promise((resolve, reject) => {
    try {
      resolve("hi");
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = retryOnce;

// now how are we going to solve this thing, the flow is what, we need to firstly call the thing and then once more so a count basically and if that reaches 2 and we still dont have a value to show for it, so be it
