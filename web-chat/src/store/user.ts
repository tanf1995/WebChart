import {observable, action} from 'mobx';
import Cookies from 'cookies-ts';


class UserStore{
    @observable user = {
        nickname: "",
        token: ""
    }

    @action setToken = (token: string) => {
        this.user.token = token;
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