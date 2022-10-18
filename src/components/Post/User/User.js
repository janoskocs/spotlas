import React from 'react'
import UserFullName from './UserFullName'
import UserImage from './UserImage'
import UserName from './UserName'

const User = ({ usernametextcolor, username, userFullName, userImage }) => {
  return (
    <div className="flex items-center user-card">
      <UserImage userImage={userImage} />
      <div className="flex flex-col justify-center user-names ml-2 md:ml-3 l:ml-4 text-2xl drop-shadow">
        <UserName
          usernametextcolor={usernametextcolor}
          userName={username}
        />
        <UserFullName userFullName={userFullName} />
      </div>

    </div>

  )
}

export default User