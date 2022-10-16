import React from 'react'

const UserImage = ({ userImage }) => {
    return <div className="rounded user-image-border "><img src={userImage} alt="User." className="rounded circle-image" /></div>
}

export default UserImage