import React, {useState, useEffect} from 'react';
import { Tabs, Icon, Menu } from 'antd';
import {Link} from 'react-router-dom';
import styles from './index.scss';
import UserItem from '@/components/UserItem';
import {strangers} from '@/request/api/stranger';


const { TabPane } = Tabs;

interface Stranger{
    id: string,
    username: string
}
const FriendList = () => {
    const [strangerList, setStrangerList] = useState([]);

    useEffect(() => {
        if(!strangerList.length){
            strangers.get()
                .then(res => {
                    console.log(res);
                    setStrangerList(res.data.data.strangers);
                })
                .catch(err => console.log(err));
        }
    })

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
                <Menu>
                    {strangerList.map((user: Stranger) => (
                        <Menu.Item key={user.id}>
                            <Link to={"/friend/" + user.username}>
                                <UserItem nickname={user.username} />
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu>
                
            </TabPane>
        </Tabs>
    )
}

export default FriendList;