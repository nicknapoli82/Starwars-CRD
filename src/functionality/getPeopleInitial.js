import axios from 'axios';

export async function getPeopleInitial() {
  const profRootAPI = 'https://profs-star-wars.herokuapp.com/people';
  let response = await axios.get(profRootAPI);
  return response.data;
}
