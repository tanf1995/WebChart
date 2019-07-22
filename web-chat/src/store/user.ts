import {observable, action} from 'mobx';
import Cookies from 'cookies-ts';


interface UserInfo{
    username: string,
    nickname: string,
    avatarUrl: string
}
class UserStore{
    @observable user = {
        username: "",
        nickname: "",
        avatarUrl: "",
        token: ""
    }

    @action setToken = (token: string) => {
        this.user.token = token;
    }

    @action setUserInfo = (user: UserInfo) => {
        this.user = Object.assign({}, this.user, user);
    }

    setCookieToken = (token: string) => {
        let cookies = new Cookies();

        if(token){
            cookies.set("token", token);
        } else{
            cookies.remove("token");
        }
    }
}

const userStore = new UserStore();

export default userStore;