import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import styles from './index.scss';
import UserItem from '@/components/UserItem';
import {Link} from 'react-router-dom';


interface Props{
    className: string
}
const SessionList = ({className}: Props) => {
    let [isCollapsed, setCollapsed] = useState(false);
    let [userList] = useState(["", ""]);

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
                overflowedIndicator={<span>tx</span>}
            >
                {userList.map((user, index) => (
                    <Menu.Item key={index}>
                        <Link to="/session/kobe">
                            <UserItem nickname="kobe" />
                        </Link>
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    )
}

export default SessionList;