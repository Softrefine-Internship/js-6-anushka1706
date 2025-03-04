// Write a JavaScript function that takes a callback and
// invokes it after a delay of 2 second.

function displayMessage(callBack, delay) {
  setTimeout(callBack, delay);
}

displayMessage(() => {
  console.log("This msg will display after 2sec");
}, 2000);
