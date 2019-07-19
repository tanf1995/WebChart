import axios from '@/request';

const strangers = {
    get(limit: number = 10, offset: number = 0){
        return axios({
            url: "/strangers",
            method: "GET",
            params: {
                limit: limit,
                offset: offset
            }
        })
    }
}

export {
    strangers
};