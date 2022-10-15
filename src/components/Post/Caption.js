import React from 'react'
import UserName from './User/UserName'


const Caption = ({ username, caption }) => {
    return (
        <div className="caption">
            <UserName userName={username} />
            <p>{caption.text}</p>
        </div>
    )
}

export default Caption