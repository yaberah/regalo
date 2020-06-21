import fetch from 'node-fetch';

const API_URL = 'https://regalo-dev.microcms.io';
const API_TOKEN = process.env.MICROCMS_API_TOKEN;

export const microcmsAPI = async () => {
  const res = await fetch( API_URL + '/api/v1/news2',
    {
      headers: {
            'X-API-KEY': process.env.MICROCMS_API_TOKEN,
        }
    })
  const json = await res.json();
  return(json);
}
