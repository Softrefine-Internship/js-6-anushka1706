// Write a JavaScript program to implement a function that executes a
// given function repeatedly at a fixed interval using 'setInterval()'.

function greet(callback, interval) {
  const timerId = setInterval(callback, interval);
  return () => {
    console.log("stopping execution");
    clearInterval(timerId);
  };
}
const start = greet(() => console.log("Hello, Anushka!"), 2000);
// const start1 = greet(() => console.log("Hello, Anushka!"), 2000);
setTimeout(start, 10000);
// setTimeout(start1, 5000);
