import fetch from 'node-fetch';

const API_URL = 'https://graph.instagram.com';
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;

export const instagramAPI = async () => {
  const res = await fetch(API_URL + '/me/media?fields=media_url&access_token=' + INSTAGRAM_ACCESS_TOKEN);
  const json = res.status === 200 ? await res.json() : {};
  return(json);
}
