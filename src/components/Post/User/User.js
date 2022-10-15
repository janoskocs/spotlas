import React from 'react'
import UserFullName from './UserFullName'
import UserImage from './UserImage'
import UserName from './UserName'

const User = ({ username, userFullName, userImage }) => {
  return (
    <div className="user-card">
      <UserImage userImage={userImage} />
      <div className="user-names">
        <UserName userName={username} />
        <UserFullName userFullName={userFullName} />
      </div>

    </div>

  )
}

export default User