const LOCAL_API = 'devis';
const PROD_API =
  'contracts?apiKey=uL19TxbOTqdHcHTPd1AgQbR-FjqEDqWK';
const URL_API = process.env.NODE_ENV === 'production' ? PROD_API : LOCAL_API;

const FETCH_CONFIG = {
  contentType: 'application/json; charset=utf-8',
  responseType: 'json',
  'Access-Control-Allow-Origin': '*',
  withCredentials: true,
};

const fetchDevis = fetch =>async () =>
  fetch(URL_API, FETCH_CONFIG);

export default fetchDevis;
