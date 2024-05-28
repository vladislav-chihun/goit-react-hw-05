import axios from "axios";

export default function moviesApi(params) {
    const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: '5499238a19a5e78ff87a4990e8837714'
  }
};

axios.get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));


} 