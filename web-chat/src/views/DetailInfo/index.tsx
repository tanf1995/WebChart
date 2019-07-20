import React, {useState, useEffect} from 'react';
import styles from './index.scss';
import {Button, Input, message } from 'antd';
import avatar from '@/assets/images/avatar.jpg';
import {userStore} from '@/store';
import userInfoApi from '@/request/api/userInfo';


interface Props{
    match: any
}
const DetailInfo = ({match}: Props) =>  {
    // 判断是个人信息还是朋友信息
    const [myDetail, setMyDetail] = useState(false);
    const [userInfo, setUserInfo] = useState({
        nickname: "",
        description: "",
        username: ""
    });
    // 判断是否编辑信息
    const [infoChanged, setInfoChangedStatus] = useState(false);

    const requestUserInfo = (username?: string) => {
        if(username){
            setMyDetail(false);
        }else{
            setMyDetail(true);
        }

        userInfoApi.get(username)
            .then(res => {
                const userInfo = res.data.data;

                setUserInfo({
                    username: userInfo.username,
                    nickname: userInfo.nickname,
                    description: userInfo.description
                })
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const username = match.params.name;

        if(username === userStore.user.username){
            requestUserInfo();
        }else{
            requestUserInfo(username);
        }
    }, [match.params.name])

    // 个人信息时编辑状态
    const [isEdit, setEditStatus] = useState(false);

    const updateUserInfo = (new_userInfo: any) => {
        setInfoChangedStatus(true);
        setUserInfo(Object.assign({}, userInfo, new_userInfo));
    }

    const handleSaveInfo = () => {
        setEditStatus(false);
        if(!infoChanged) return;

        const {username, ...c_userInfo} = {...userInfo};

        userInfoApi.post(c_userInfo)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
                message.error("Save info failed!");
            })
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.avatar}>
                <img src={avatar} alt=""/>

                {!myDetail? (
                    <Button shape="circle" icon="message" size="large"
                        className={styles.btn}
                    />
                ): !isEdit? (
                    <Button shape="circle" icon="edit" size="large"
                        className={styles.btn}
                        onClick={() => setEditStatus(true)}
                    />
                ): (
                    <Button shape="circle" icon="save" size="large"
                        className={styles.btn}
                        onClick={handleSaveInfo}
                    />
                )}
            </div>
            <div className={styles.info}>
                <h2 className={styles.name}>{userInfo.nickname || "-"}</h2>
                <p className={styles.desc}>
                    {isEdit? (
                        <Input size="small" 
                            value={userInfo.description} 
                            className={styles.descInp}
                            placeholder="description"
                            onChange={e => updateUserInfo({description: e.target.value})}
                        />
                    ): (
                        <span>{userInfo.description || "-"}</span>
                    )}
                </p>

                <div className={styles.accent}>
                    <p>
                        <span className={styles.label}>帐号</span>
                        {userInfo.username || "-"}
                    </p>
                    <p>
                        <span className={styles.label}>昵称</span>
                        {isEdit? (
                            <Input size="small" placeholder="nickname"
                                value={userInfo.nickname} 
                                onChange={e => updateUserInfo({nickname: e.target.value})}
                            />
                        ): (
                            <span>{userInfo.nickname || "-"}</span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    )
}


export default DetailInfo;