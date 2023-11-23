import axios from "axios";

export const url = "http://localhost:8080";

const axiosConfig = {
    baseURL: url
};

axios.defaults.withCredentials = false;

export const axiosInstance = axios.create(axiosConfig);