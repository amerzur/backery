import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fathomless-bayou-33029.herokuapp.com/'
});

export default instance;