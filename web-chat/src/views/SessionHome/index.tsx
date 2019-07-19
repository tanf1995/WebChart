import React from 'react';
import styles from './index.scss';
import {Icon} from 'antd';


const SessionHome = () => {
    return (
        <div className={styles.home}>
            <div className={styles.bg}>
                <Icon type="message" />
            </div>
        </div>
    )
}

export default SessionHome;