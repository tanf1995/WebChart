import React, {useState, useEffect} from 'react';
import styles from './index.scss';
import { Button, Input } from 'antd'
import MessageItem from '@/components/MessageItem';
import initSocket from '@/socketio';


const MessageBox = () => {
    const [msgList] = useState(["", ""]);

    useEffect(() => {
        const socket = initSocket();

        socket.listen();
        socket.sendMsg("hello")
    })

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