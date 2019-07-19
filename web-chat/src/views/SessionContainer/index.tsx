import React, {useEffect} from 'react';
import SessionList from './components/SessionList';
import styles from './index.scss';
import axios from '@/request';


interface Props{
    children: any
}
const SessionContainer = ({children}: Props) => {
    useEffect(() => {
        axios({
            url: '/test'
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    })

    return (
        <div className={styles.wrap}>
            <SessionList className={styles.sessionList} />

            <div className={styles.mainContent}>
                {children}
            </div>
        </div>
    )
}

export default SessionContainer;