import React, { FC } from 'react';
import { Spin } from 'antd';
import styles from './index.scss';


const PageLoading: FC = () => {
    return (
        <Spin tip="Loading..." size="large" wrapperClassName={styles.loading} />
    )
}

export default PageLoading;