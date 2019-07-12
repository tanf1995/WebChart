import React from 'react';
import styles from './index.scss';
import { Menu, Dropdown, Icon } from 'antd';


interface Props{
    className: string
}
const UserHeaderPortrait = ({className}: Props) => {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="http://www.alipay.com/">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="http://www.taobao.com/">2nd menu item</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );

    return (
        <div className={[className, styles.head].join(" ")}>
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                    Click me <Icon type="down" />
                </a>
            </Dropdown>
        </div>
    )
}

export default UserHeaderPortrait;