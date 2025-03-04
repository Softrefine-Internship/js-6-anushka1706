// Write a JavaScript function that fetches data from an API and cancels
//  the request if it takes longer than a specified time.
function timeout(seconds, controller) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      controller.abort();
      reject(new Error(`Request timed out after ${seconds} seconds`));
    }, seconds * 1000);
  });
}
async function fetchWithTimeout(url, timeoutSeconds = 5) {
  const controller = new AbortController();
  const signal = controller.signal;
  try {
    const fetchPromise = fetch(url, { signal }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
    const result = await Promise.race([
      fetchPromise,
      timeout(timeoutSeconds, controller),
    ]);
    return result;
  } catch (error) {
    throw error;
  }
}

fetchWithTimeout("https://restcountries.com/v2/name/australia", 2)
  .then((data) => {
    console.log("Country capital:", data[0].capital);
  })
  .catch((error) => {
    console.log(error);
  });

fetchWithTimeout("https://restcountries.com/v2/name/spain", 0.1)
  .then((data) => {
    console.log("Country capital:", data[0].capital);
  })
  .catch((error) => {
    console.log(error);
  });
