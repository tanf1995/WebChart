import axios from "@/request";


interface EditUserInfo{
    nickname: string,
    description: string
}
const userInfo = {
    get(username?: string){
        if(username){
            return axios({
                url: "/userInfo",
                method: "GET",
                params: {
                    username: username
                }
            })
        }else{
            return axios({
                url: "/userInfo",
                method: "GET"
            })
        }
    },
    post(userInfo: EditUserInfo){
        return axios({
            url: "/userInfo",
            method: "POST",
            data: userInfo
        })
    }
}

export default userInfo;