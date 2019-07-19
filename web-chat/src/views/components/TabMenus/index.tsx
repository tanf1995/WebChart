import React, {useEffect, useState} from 'react';
import {Button} from 'antd';
import styles from './index.scss';
import {Link, withRouter} from 'react-router-dom';


interface Props{
    className: string,
    location: any,
    match: any,
    history: any
}
const TabMenus = ({className, location}: Props) => {
    const [isFriendPage, setPage] = useState(false);

    useEffect(() => {
        if(location.pathname.indexOf('/friend') === 0){
            setPage(true);
        }else{
            setPage(false);
        }
    }, [location])

    return (
        <div className={[className, styles.menus].join(" ")}>
            <Link to="/">
                <Button type="primary" icon="message" ghost size="large"
                    className={isFriendPage? "": styles.current}
                />
            </Link>
            <Link to="/friend">
                <Button type="primary" icon="team" ghost size="large" 
                    className={!isFriendPage? "": styles.current}
                />
            </Link>
        </div>
    )
}

export default withRouter(TabMenus);