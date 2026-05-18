// Problem Description – fetchWithTimeout(url, ms, callback)
//
// You are required to write a function named fetchWithTimeout that accepts a URL,
// a time limit in milliseconds, and a callback function.
// The function attempts to fetch data from the given URL.
// If the request completes within the specified time, the callback is invoked with
// null as the first argument and the fetched data as the second argument.
// If the operation exceeds the time limit, the callback is invoked with an Error
// whose message is "Request Timed Out".

function fetchWithTimeout(url, ms, callback) {
  let data;
  console.log("program starts");
  console.log(logTime());
  console.log("data :" + data);
  fetch(url)
    .then((response) => {
      data = response;
      if (response) {
        console.log("got reponse");
        console.log(logTime());
      }
    })
    .catch((err) => console.log(err));
  setTimeout(() => {
    console.log(logTime());
    console.log("inside the timeout function");
    if (!data) {
      callback(new Error("Request Timed Out"));
      throw new Error("request not completed under the specified time");
    } else {
      callback(null, data);
    }
  }, ms);
}

function logTime() {
  return new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });
}

fetchWithTimeout("https://www.google.com", 1000, (err, data) => {
  if (err) {
    console.log(err.message);
  } else if (data) {
    // console.log(data);
    console.log("no error, but there is data");
  }
});

module.exports = fetchWithTimeout;
