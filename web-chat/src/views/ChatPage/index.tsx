import React from 'react';
import styles from './index.scss';
import MessageBox from './components/MessageBox';
import MemberList from './components/MemberList';


const ChatPage = () => {
    return (
        <div className={styles.chat}>
            <div className={styles.head}>
                xxx-Group
            </div>

            <div className={styles.content}>
                <MessageBox />

                <MemberList />
            </div>
        </div>
    )
}

export default ChatPage;