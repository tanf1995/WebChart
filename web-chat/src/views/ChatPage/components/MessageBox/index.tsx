import React, {useState} from 'react';
import styles from './index.scss';
import { Button, Input } from 'antd'
import MessageItem from '@/components/MessageItem';


const MessageBox = () => {
    const [msgList] = useState(["", ""]);

    return (
        <div className={styles.msgBox}>
            <ul className={styles.msgList}>
                {msgList.map((msg, index) => (
                    <MessageItem key={index} />
                ))}
            </ul>

            <div className={styles.sendBox}>
                <Input.TextArea rows={5} className={styles.input} />
                
                <div className={styles.btn}>
                    <Button type="primary" size="small">发送</Button>
                </div>
            </div>
        </div>
    )
}

export default MessageBox;