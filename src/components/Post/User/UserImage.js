import React from 'react'

const UserImage = ({ userImage }) => {
    return <div className="rounded user-image-border shrink-0"><img src={userImage} alt="User." className="rounded circle-image shrink-0" /></div>
}

export default UserImage