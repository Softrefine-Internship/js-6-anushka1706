// Write a JavaScript function that fetches data from an API and retries
// the request a specified number of times if it fails.
async function fetchCountry(url, retries = 3) {
  for (let i = 1; i <= retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      return `Fetched data in ${i} attempt : Capital of ${data[0].name} is ${data[0].capital}`;
    } catch (error) {
      console.log(`Attempt ${i} failed:`, error); 
      if (i === retries) throw error;
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }
}

fetchCountry("https://restcountries.com/v2/name/australia")
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
