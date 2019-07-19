import React from 'react';
import styles from './index.scss';
import BaseHeader from './components/BaseHeader';


interface Props{
    children: any
}
const BaseContainer = ({children}: Props) => {
    return (
        <div className={styles.container}>
            <BaseHeader />
            
            {children}
        </div>
    )
}

export default BaseContainer;