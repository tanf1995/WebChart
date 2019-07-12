import React, { FC } from 'react';
import styles from './index.scss';
import UserHeadPortrait from '@/views/components/UserHeadPortrait';
import TabMenus from '@/views/components/TabMenus';


const BaseHeader: FC = () => {
    return (
        <div className={styles.header}>
            <UserHeadPortrait className={styles.headPortrait} />

            <TabMenus className={styles.tabMenus} /> 
        </div>
    )
}

export default BaseHeader;