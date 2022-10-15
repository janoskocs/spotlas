import React from 'react'
import UserName from './User/UserName'


const Caption = ({ username, caption }) => {
    return (
        <div className="caption">
            <UserName className="inline" userName={username} />
            <p className="inline truncate ...">{caption.text}</p>
        </div>
    )
}

export default Caption