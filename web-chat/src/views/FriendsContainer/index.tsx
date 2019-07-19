import React from 'react';
import styles from './index.scss';
import FriendList from './components/FriendList';


interface Props{
    children: any
}
const FriendsDetail = ({children}: Props) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.list}>
                <FriendList />
            </div>

            <div className={styles.info}>
                {children}
            </div>
        </div>
    )
}

export default FriendsDetail;