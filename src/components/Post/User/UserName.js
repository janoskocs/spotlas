import React from 'react'

const UserName = ({ usernametextcolor, userName }) => {
    return (
        <p style={{ color: usernametextcolor }} className="inline font-bold text-base" > {userName}</p>
    )
}

export default UserName