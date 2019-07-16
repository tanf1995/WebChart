import React, {useState} from 'react';
import styles from './index.scss';
import UserItem from '@/components/UserItem';


const MemberList = () => {
    const [members] = useState(["", ""]);

    return (
        <div className={styles.members}>
            {members.map((member, index) => (
                <UserItem key={index} size="mini" />
            ))}
        </div>
    )
}

export default MemberList;