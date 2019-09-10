import axios from 'axios';
import config from './config';

const SEARCH_URL = (title) => `http://www.omdbapi.com/?t=${title}&apikey=${config.api_key}`;

const apiClient = {
  query(title) {
    title = encodeURIComponent(title);
    return axios.get(SEARCH_URL(title));
  }
}

window.apiClient = apiClient;
window.axios = axios;

export default apiClient;
