import React, {useState, useEffect} from 'react';
import styles from './index.scss';
import {Input, Button, Icon, message} from 'antd';
import PasswdInput from './components/PasswdInput';
import {Link} from 'react-router-dom';
import identity from '@/request/api/identity';


interface Props{
    match: any
}
interface Accent{
    username?: string,
    pwd?: string
}
const LoginOrRegister = ({match}: Props) => {
    const [accent, setAccent] = useState({
        username: "",
        pwd: ""
    });
    const [isLoginPage, setIsLoginPage] = useState(true);
    const handleSetAccent = (partOfAccent: Accent) => {
        setAccent(Object.assign({}, accent, partOfAccent));
    }
    const handleSubmit = () => {
        if(!accent.username || !accent.pwd){
            return message.error('Your account is incorrect!');
        }
        if(isLoginPage){
            identity.login(accent)
                .then(res => {
                    if(res.data.errCode === 0){
                        message.success("Login success!");
                    }else{
                        message.error(res.data.msg);
                    }
                })
                .catch(err => {
                    console.log(err);
                    message.error('Server error!');
                })
        }else{
            identity.register(accent)
                .then(res => {
                    if(res.data.errCode === 0){
                        message.success("Register success!");
                    }else{
                        message.error(res.data.msg);
                    }
                })
                .catch(err => {
                    console.log(err);
                    message.error('Server error!');
                })
        }
    }
    const handleKeydown = (e: any) => {
        if(e.keyCode === 13) handleSubmit();
    }

    useEffect(() => {
        setIsLoginPage(match.path === '/login');
    }, [match.path])

    return (
        <div className={styles.container}>
            <h2>{isLoginPage? "Login": "Register"}</h2>

            <div className={styles.inp}>
                <Input prefix={<Icon type="user" />} 
                    value={accent.username}
                    onChange={e => handleSetAccent({username: e.target.value})}
                    onKeyDown={handleKeydown}
                />
            </div>
            <div className={styles.inp}>
                <PasswdInput 
                    value={accent.pwd}
                    handleSetAccent={handleSetAccent}
                    handleKeydown={handleKeydown}
                />
            </div>
            
            <Button className={styles.sub} onClick={handleSubmit}>submit</Button>
            {
                isLoginPage? (
                    <Link to="/register">go to register</Link>
                ): (
                    <Link to="/login">go to login</Link>
                )
            }
        </div>
    )
}

export default LoginOrRegister;