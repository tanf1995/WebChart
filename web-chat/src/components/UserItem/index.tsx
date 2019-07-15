import React from 'react';
import styles from './index.scss';
import { Avatar } from 'antd';


const UserItem = () => {
    return (
        <div className={styles.user}>
            <Avatar size={32} icon="user" />

            <span className={styles.name}>科比 布莱恩特</span>
        </div>
    )
}

export default UserItem;