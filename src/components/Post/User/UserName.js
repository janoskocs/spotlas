import React from 'react'

const UserName = ({ color, userName }) => {
    return (
        <p style={{ color: { color } }} className="inline white-text font-bold" > {userName}</p>
    )
}

export default UserName