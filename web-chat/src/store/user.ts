import {observable, action} from 'mobx';


class UserStore{
    @observable user = {
        nickname: "",
        token: ""
    }

    @action setToken = (token: string) => {
        this.user.token = token;
    }
}

const userStore = new UserStore();

export default userStore;