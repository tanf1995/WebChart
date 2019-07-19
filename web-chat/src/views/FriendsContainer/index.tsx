import React from 'react';
import styles from './index.scss';
import FriendList from './components/FriendList';


const FriendsDetail = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.list}>
                <FriendList />
            </div>

            <div className={styles.info}>
                info
            </div>
        </div>
    )
}

export default FriendsDetail;