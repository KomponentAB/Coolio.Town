// Function to handle fetch with timeout
export const fetchWithTimeout = (
  url: string,
  options: RequestInit,
  timeout = 5000
) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), timeout)
    ),
  ]);
};
