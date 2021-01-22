import axios from 'axios';

const instance = axios.create({
    //locally: 'http://localhost:8000'
    baseURL: 'https://fathomless-bayou-33029.herokuapp.com/'
});

export default instance;