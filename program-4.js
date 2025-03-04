// Write a JavaScript program that implements a function that performs a
// series of asynchronous operations in sequence using 'async/await'.

// note: here async operations refers to async functions. your task is to
// write multiple async functions using promises and call them in sequence
// in a function using async/await

async function allAsync() {
  const res1 = await asyncOne();
  console.log(res1);
  const res2 = await asyncTwo();
  console.log(res2);
  const res3 = await asyncThree();
  console.log(res3);
}
function asyncOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Result from asyncOne");
    }, 1000);
  });
}
function asyncTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Result from asyncTwo");
    }, 1000);
  });
}
function asyncThree() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Result from asyncThree");
    }, 1000);
  });
}
allAsync();
