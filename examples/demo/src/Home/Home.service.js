const LOCAL_API = 'http://localhost:5000/api/devis';
const PROD_API =
  'https://api.mlab.com/api/1/databases/toolkitaxa/collections/contracts?apiKey=uL19TxbOTqdHcHTPd1AgQbR-FjqEDqWK';
const URL_API = process.env.NODE_ENV === 'production' ? PROD_API : LOCAL_API;

const FETCH_CONFIG = {
  contentType: 'application/json; charset=utf-8',
  responseType: 'json',
  'Access-Control-Allow-Origin': '*',
  withCredentials: true,
};

const fetchDevis = async () =>
  fetch(URL_API, FETCH_CONFIG).then(res => res.json());

export default fetchDevis;
