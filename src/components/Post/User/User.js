import React from 'react'
import UserFullName from './UserFullName'
import UserImage from './UserImage'
import UserName from './UserName'

const User = ({ username, userFullName, userImage }) => {
  return (
    <>
      <UserImage userImage={userImage} />
      <UserName userName={username} />
      <UserFullName userFullName={userFullName} />
    </>

  )
}

export default User