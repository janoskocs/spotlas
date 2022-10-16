import React from 'react'

const UserName = ({ usernametextcolor, userName }) => {
    return (
        <p style={{ color: usernametextcolor }} className="inline font-bold" > {userName}</p>
    )
}

export default UserName