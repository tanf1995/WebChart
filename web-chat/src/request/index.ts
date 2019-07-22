import axios from 'axios';
import {userStore} from '@/store';
import Cookies from 'cookies-ts';


let baseUrl = "";

if(process.env.NODE_ENV === 'development'){
    baseUrl = "http://192.168.0.103:8080"
}

let instance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": 'application/json',
        "Authorization": userStore.user.token
    }
});

instance.interceptors.response.use(
    res => {
        if(res.data.token){
            (new Cookies()).set('token', res.data.token);
            userStore.setToken(res.data.token);
            delete res.data.token;
        }

        return res;
    },
    err => {
        let _err = {...err};
        if(_err.response && _err.response.status === 401){
            userStore.setToken("");
            (new Cookies()).remove('token');
            window.location.href = '/login';
        }
        return err;
    }
);


export {baseUrl}

export default instance;