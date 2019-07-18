import React, {useEffect} from 'react';
import {Icon} from 'antd';
import styles from './index.scss';
import axios from '@/request';


const HomePage = () => {
    useEffect(() => {
        axios({
            url: '/test'
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    })

    return (
        <div className={styles.home}>
            <div className={styles.bg}>
                <Icon type="message" />
            </div>
        </div>
    )
}

export default HomePage;