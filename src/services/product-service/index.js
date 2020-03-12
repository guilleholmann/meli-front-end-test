import axios from 'axios';
import {SERVER_BASE_URL} from '../../constants'; 

export const searchProducts = (query) => {
    return axios.get(`${SERVER_BASE_URL}/items?q=${query}`)
        .then(({ data }) => data)
        .catch(() => []);
}
