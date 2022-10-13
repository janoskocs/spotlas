import React from 'react'
import UserName from '../User/UserName'
import CaptionText from './CaptionText'

const Caption = ({ username, caption }) => {
    return (
        <div>
            <UserName userName={username} />
            <CaptionText caption={caption.text} />
        </div>
    )
}

export default Caption