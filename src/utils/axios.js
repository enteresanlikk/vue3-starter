import axios from 'axios'

export const jphAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});