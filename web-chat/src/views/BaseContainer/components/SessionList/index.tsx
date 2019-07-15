import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import styles from './index.scss';
import UserItem from '@/components/UserItem';


interface Props{
    className: string
}
const SessionList = ({className}: Props) => {
    let [isCollapsed, setCollapsed] = useState(false);
    let [userList, setUserList] = useState(["", ""]);

    const handleSetMenuStatus = () => {
        setCollapsed(!isCollapsed);
    }

    return (
        <div className={[className, styles.list].join(" ")}>
            <div className={styles.menu}>
                <Button icon="menu-fold" 
                    onClick={handleSetMenuStatus} 
                    className={isCollapsed? styles.unfold: ""}
                />
            </div>

            <Menu mode="inline"
                inlineCollapsed={isCollapsed}
            >
                {userList.map((user, index) => (
                    <Menu.Item key={index}>
                        <UserItem />
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    )
}

export default SessionList;