import React from 'react';
import {Icon} from 'antd';
import styles from './index.scss';


const HomePage = () => {
    return (
        <div className={styles.home}>
            <div className={styles.bg}>
                <Icon type="message" />
            </div>
        </div>
    )
}

export default HomePage;