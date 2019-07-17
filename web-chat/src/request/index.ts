import axios from 'axios';


let instance = axios.create({
    baseURL: "http://172.18.188.195:8080",
    headers: {
        "Content-Type": 'application/json'
    }
});

export default instance;