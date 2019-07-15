import React from 'react';
import {Button} from 'antd';
import styles from './index.scss';


interface Props{
    className: string
}
const TabMenus = ({className}: Props) => {
    return (
        <div className={[className, styles.menus].join(" ")}>
            <Button type="primary" icon="message" ghost size="large"
                className={styles.current}
            />
            <Button type="primary" icon="user" ghost size="large" />
        </div>
    )
}

export default TabMenus;