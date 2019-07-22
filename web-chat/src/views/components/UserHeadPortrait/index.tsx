import React, { useEffect} from 'react';
import styles from './index.scss';
import { Menu, Dropdown, Avatar } from 'antd';
import identity from '@/request/api/identity';
import {userStore} from '@/store';
import {withRouter} from 'react-router-dom';
import {message} from 'antd';
import userInfo from '@/request/api/userInfo';
import {observer} from 'mobx-react';
import {baseUrl} from '@/request';


interface Props{
    className: string,
    location: any,
    history: any,
    match: any
}
const UserHeaderPortrait = ({className, history}: Props) => {
    const handleLogout = () => {
        identity.logout()
            .then(res => {
                userStore.setToken("");
                userStore.setCookieToken("");
                message.success("Logout success.");
                history.push("/login");
            })
            .catch(err => {
                console.log(err);
                message.error("Logout faild!");
            })
    }

    const handleToInfo = () => {
        history.push({
            pathname: "/friend/" + userStore.user.username
        })
    }

    useEffect(() => {
        userInfo.get()
            .then(res => {
                let userInfo = res.data.data;

                userStore.setUserInfo({
                    username: userInfo.username,
                    nickname: userInfo.nickname,
                    avatarUrl: baseUrl + userInfo.avatarUrl
                });
            })
            .catch(err => console.log(err))
    })

    const menu = (
        <Menu>
            <Menu.Item key="0" onClick={handleToInfo}>
                个人信息
            </Menu.Item>
            <Menu.Item key="1" onClick={handleLogout}>
                退出
            </Menu.Item>
        </Menu>
    );

    return (
        <div className={[className, styles.head].join(" ")}>
            <Dropdown overlay={menu} trigger={['click']}
                overlayClassName={styles.menu}
            >
                <Avatar size={40}  src={userStore.user.avatarUrl} />
            </Dropdown>
        </div>
    )
}

export default withRouter(observer(UserHeaderPortrait))