import React from 'react';
import styles from './index.scss';
import { Avatar } from 'antd';


interface Props{
    menuIsCollapsed?: boolean,
    size?: "default" | "mini"
}
const UserItem = ({menuIsCollapsed, size}: Props) => {
    return (
        <div className={[
                styles.user,
                menuIsCollapsed? styles.collapsed: "",
                size === "mini"? styles.mini: ""
            ].join(" ")}
        >
            <Avatar icon="user"
                size={size === "mini"? 24: 32}
            />

            <span className={styles.name}>科比 布莱恩特</span>
        </div>
    )
}

export default UserItem;