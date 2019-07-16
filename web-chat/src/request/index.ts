import axios from 'axios';


let instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": 'application/json'
    }
});

export default instance;