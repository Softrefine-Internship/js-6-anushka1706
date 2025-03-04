// Write a JavaScript a function that makes an HTTP GET
// request and returns a Promise that resolves with the
// response data.

function getCountryDetails(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

const url = "https://restcountries.com/v2/name/portugal";
getCountryDetails(url)
  .then((data) => {
    console.log("Country data:", data);
  })
  .catch((error) => {
    console.log(error);
  });
