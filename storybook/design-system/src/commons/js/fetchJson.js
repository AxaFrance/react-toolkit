export default async (apiUrl, errorMessage = 'fetch failed') => fetch(apiUrl)
  .then(res => res.json())
  .catch(() => console.log(errorMessage));
