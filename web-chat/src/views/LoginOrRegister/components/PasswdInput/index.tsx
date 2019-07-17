import React, {useState} from 'react';
import {Input, Icon} from 'antd';


interface Props{
    value: string,
    handleSetAccent: Function,
    handleKeydown: (e: any) => void
}
const PasswdInput = ({value, handleSetAccent, handleKeydown}: Props) => {
    const [isShowPwd, setIsShowPwd] = useState(false);

    const handleSetPwdStatus = () => {
        setIsShowPwd(!isShowPwd);
    }

    return (
        <Input 
            prefix={<Icon type="unlock" theme="filled" />}
            suffix={
                <Icon style={{cursor: "pointer"}} 
                    onClick={handleSetPwdStatus}
                    type={isShowPwd? "eye-invisible": "eye"}
                />
            }
            type={isShowPwd? "text": "password"}
            value={value}
            onChange={e => handleSetAccent({pwd: e.target.value})}
            onKeyDown={handleKeydown}
        />
    )
}

export default PasswdInput;