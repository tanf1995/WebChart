import React, {FC} from 'react';
import styles from './index.scss';
import BaseHeader from './components/BaseHeader';
import SessionList from './components/SessionList';
import MainContent from './components/MainContent';


const BaseContainer: FC = () => {
    return (
        <div className={styles.container}>
            <BaseHeader />

            <div className={styles.wrap}>
                <SessionList className={styles.sessionList} />

                <MainContent className={styles.mainContent} />
            </div>
        </div>
    )
}

export default BaseContainer;