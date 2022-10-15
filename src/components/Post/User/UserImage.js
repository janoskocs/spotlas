import React from 'react'

const UserImage = ({ userImage }) => {
    return <div className="w-1/12 rounded user-image-border"><img src={userImage} alt="User." className="rounded" /></div>
}

export default UserImage