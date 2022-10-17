import React from 'react'
import UserName from '../User/UserName'

const CaptionText = ({ userName, caption }) => {
    return (
        <div className="caption">
            <UserName userName={userName} />
            <p>{caption.text}</p>
        </div>
    )
}

export default CaptionText