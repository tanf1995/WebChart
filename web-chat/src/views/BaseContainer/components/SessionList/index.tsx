import React from 'react';


interface Props{
    className: string
}
const SessionList = ({className}: Props) => {
    return (
        <div className={className}>
            sessionlist
        </div>
    )
}

export default SessionList;