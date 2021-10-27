import axios from 'axios';
const FETCH_URL = `https://jsonplaceholder.typicode.com`

export const get = (entity) => {
    return axios.get(FETCH_URL + `/${entity}`);
}

// interceptor for get request
axios.interceptors.request.use(request => {
    // console.log('config', config);
    return request
},(error) => {
    return Promise.reject(error)
});
