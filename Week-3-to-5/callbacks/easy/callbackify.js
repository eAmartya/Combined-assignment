// Problem Description – callbackify(fn)
//
// You are required to write a function named callbackify that takes a function
// which returns a Promise.
// The function should return a new function that accepts a callback as its
// last argument.
// When the Promise resolves, the callback should be called with `(null, data)`.
// When the Promise rejects, the callback should be called with the error.

const fn = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve("hi");
    } catch (error) {
      reject(error);
    }
  });
};

function callbackify(fn, cb) {
  fn()
    .then((data) => {
      cb(null, data);
    })
    .catch((err) => {
      cb(err, null);
    });
}
callbackify(fn, (err, content) => {
  if (err) {
    console.log(err);
  } else {
    console.log(content);
  }
});

// fn.then().catch() promises way of dealing with this function right. but there gotta be another callback version as well which according to GPTs explaination and rewritting of the question statement seems like a newfn which is newFNCallback(takesACallback) and internally handles or rather calls the callback once the thing is finished

module.exports = callbackify;
