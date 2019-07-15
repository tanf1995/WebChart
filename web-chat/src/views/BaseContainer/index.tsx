import React from 'react';
import styles from './index.scss';
import BaseHeader from './components/BaseHeader';
import SessionList from './components/SessionList';


interface Props{
    children: any
}
const BaseContainer = ({children}: Props) => {
    return (
        <div className={styles.container}>
            <BaseHeader />

            <div className={styles.wrap}>
                <SessionList className={styles.sessionList} />

                <div className={styles.mainContent}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BaseContainer;