import axios from "axios";

const API_KEY = '5499238a19a5e78ff87a4990e8837714';

export default async function MoviesApi(params) {
    const url = 'https://api.themoviedb.org/3/search/movie?';

    const options = {
        params: {
            query: 'Inception',
            api_key: API_KEY,
            include_adult: false,
            language: 'en-US',
            page: 1,
            ...params
        },
        headers: {
            Authorization: 'Bearer 5499238a19a5e78ff87a4990e8837714'
        }
    };
    
    try {
        const response = await axios.get(url, options);
        return response.data;
    } catch (err) {
        console.error('Error fetching movies:', err);
        throw err;
    }

} 