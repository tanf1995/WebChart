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
    }
}

export default identity;