import React from 'react';
import styles from './index.scss';
import { Menu, Dropdown, Avatar } from 'antd';
import identity from '@/request/api/identity';
import {userStore} from '@/store';
import {withRouter} from 'react-router-dom';
import {message} from 'antd';


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

    const menu = (
        <Menu>
            <Menu.Item key="0" onClick={handleLogout}>
                退出
            </Menu.Item>
        </Menu>
    );

    return (
        <div className={[className, styles.head].join(" ")}>
            <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter"
                overlayClassName={styles.menu}
            >
                <Avatar size={40} icon="user" />
            </Dropdown>
        </div>
    )
}

export default withRouter(UserHeaderPortrait);