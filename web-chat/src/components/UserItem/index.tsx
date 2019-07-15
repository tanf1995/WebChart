import React from 'react';
import styles from './index.scss';
import { Avatar } from 'antd';


interface Props{
    menuIsCollapsed: boolean
}
const UserItem = ({menuIsCollapsed}: Props) => {
    return (
        <div className={[
                styles.user,
                menuIsCollapsed? styles.collapsed: ""
            ].join(" ")}
        >
            <Avatar size={32} icon="user" />

            <span className={styles.name}>科比 布莱恩特</span>
        </div>
    )
}

export default UserItem;