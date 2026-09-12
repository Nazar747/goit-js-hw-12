import axios from 'axios';

const API_KEY = '57443656-d111e2eba84c34bca61fb3c61';

export async function getImagesByQuery(query, page = 1) {
  const { data } = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });

  return data;
}
