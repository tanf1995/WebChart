import React from 'react';
import styles from './index.scss';
import { Avatar } from 'antd';


interface Props{
    size?: "default" | "mini",
    nickname: string
}
const UserItem = ({size, nickname}: Props) => {
    return (
        <div className={[
                styles.user,
                size === "mini"? styles.mini: ""
            ].join(" ")}
        >
            <Avatar icon="user"
                size={size === "mini"? 24: 32}
            />

            <span className={styles.name}>{nickname}</span>
        </div>
    )
}

export default UserItem;