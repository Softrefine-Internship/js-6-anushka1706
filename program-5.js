// Write a JavaScript function that fetches data from multiple APIs
// concurrently and returns a combined result using Promises and
// 'Promise.all()'.
async function fetchDataFromMultipleAPIs(apiUrls) {
  try {
    const fetchPromises = [];
    apiUrls.forEach((url) => {
      fetchPromises.push(
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `HTTP error! URL: ${url}, Status: ${response.status}`
              );
            }
            return response.json();
          })
          .then((data) => {
            if (!data || !data[0] || !data[0].population) {
              throw new Error(`Invalid data from ${url}: population not found`);
            }
            return { country: data[0].name, population: data[0].population };
          })
      );
    });

    const results = await Promise.all(fetchPromises);
    return results;
  } catch (error) {
    throw new Error(`Failed to fetch data from APIs: ${error.message}`);
  }
}

const apiUrls = [
  "https://restcountries.com/v2/name/greece",
  "https://restcountries.com/v2/name/australia",
];

fetchDataFromMultipleAPIs(apiUrls)
  .then((result) => console.log(result))
  .catch((error) => console.log("Error:", error));
