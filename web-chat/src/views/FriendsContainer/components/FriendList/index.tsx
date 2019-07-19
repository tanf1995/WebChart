import React, {useState} from 'react';
import { Tabs, Icon, Menu } from 'antd';
import {Link} from 'react-router-dom';
import styles from './index.scss';
import UserItem from '@/components/UserItem';


const { TabPane } = Tabs;

const FriendList = () => {
    const [strangerList, setStrangerList] = useState(["", ""]);

    return (
        <Tabs defaultActiveKey="2" size="small"
            className={styles.tabs}
        >
            <TabPane
                tab={
                    <span>
                        <Icon type="contacts" />
                        已添加
                    </span>
                }
                key="1"
            >
                Tab 1
            </TabPane>

            <TabPane
                tab={
                    <span>
                        <Icon type="disconnect" />
                        未添加
                    </span>
                }
                key="2"
            >
                <Menu mode="inline"
                    overflowedIndicator={<span>tx</span>}
                >
                    {strangerList.map((user, index) => (
                        <Menu.Item key={index}>
                            <Link to="/session/kobe">
                                <UserItem />
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu>
                
            </TabPane>
        </Tabs>
    )
}

export default FriendList;