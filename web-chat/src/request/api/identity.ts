import axios from '../index';

interface Accent{
    username: string,
    pwd: string
}
const identity = {
    login(accent: Accent){
        return axios({
            url: "/login",
            method: 'POST',
            data: accent
        })
    },
    register(accent: Accent){
        return axios({
            url: "/register",
            method: "POST",
            data: accent
        })
    },
    logout(){
        return axios({
            url: "/logout",
            method: "GET"
        })
    }
}

export default identity;