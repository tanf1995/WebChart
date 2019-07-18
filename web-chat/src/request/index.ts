import axios from 'axios';
import {userStore} from '@/store';
import Cookies from 'cookies-ts';


let instance = axios.create({
    baseURL: "http://172.18.188.195:8080",
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


export default instance;