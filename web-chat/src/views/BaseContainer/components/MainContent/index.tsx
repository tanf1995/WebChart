import React from 'react';


interface Props{
    className: string
}
const MainContent = ({className}: Props) => {
    return (
        <div className={className}>
            main
        </div>
    )
}

export default MainContent;