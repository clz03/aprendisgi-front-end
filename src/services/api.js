import axios from 'axios';

const api = axios.create({
    //baseURL: "https://wcqiplataforma.herokuapp.com/"
    baseURL: "http://localhost:8080/"
})

export default api;