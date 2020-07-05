import fetch from 'node-fetch';

const API_URL = 'https://regalo-dev.microcms.io';
const API_TOKEN = process.env.MICROCMS_API_TOKEN;

export const microcmsAPI = async (id) => {
  const pageId = id || '';
  const res = await fetch( API_URL + '/api/v1/news2/' + pageId,
    {
      headers: {
            'X-API-KEY': process.env.MICROCMS_API_TOKEN,
        }
    })
  const json = await res.json();
  return(json);
}

export const getAllPostIds = async () => {
  const post = await microcmsAPI() || [];
  return post.contents.map(item => {
    return {
      params: {
        id: item.id
      }
    }
  })
}

export const getPostData = async (id) => {
    const json = await microcmsAPI(id) || [];
    return {
        id : json.id,
        createdAt : json.createdAt,
        updatedAt : json.updatedAt,
        title : json.title,
        contents : json.contents,
    }
}
