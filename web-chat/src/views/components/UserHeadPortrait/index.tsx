import React from 'react';
import styles from './index.scss';
import { Menu, Dropdown, Avatar } from 'antd';


interface Props{
    className: string
}
const UserHeaderPortrait = ({className}: Props) => {
    const menu = (
        <Menu>
            <Menu.Item key="0">
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

export default UserHeaderPortrait;