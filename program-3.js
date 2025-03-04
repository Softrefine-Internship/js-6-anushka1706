//  Write a JavaScript function that takes an array of
// URLs and downloads the contents of each URL in
// parallel using Promises.

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! URL: ${url}, Status: ${response.status}`);
    }
    const data = await response.json();
    return {
      country: data[0].name,
      capital: data[0].capital,
      borders: data[0].borders || 'no borders'
    };
  } catch (error) {
    throw error;
  }
}
async function fetchMultipleUrls(urls) {
  try {
    const fetchPromises = urls.map((url) => fetchData(url));
    const results = await Promise.all(fetchPromises);
    return results;
  } catch (error) {
    throw new Error(`Failed to fetch one or more URLs: ${error.message}`);
  }
}
const urls = [
  "https://restcountries.com/v2/name/greece",
  "https://restcountries.com/v2/name/australia",
  "https://restcountries.com/v2/name/spain",
];
fetchMultipleUrls(urls)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
