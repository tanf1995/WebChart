import React from 'react';
import SessionList from './components/SessionList';
import styles from './index.scss';


interface Props{
    children: any
}
const SessionContainer = ({children}: Props) => {
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