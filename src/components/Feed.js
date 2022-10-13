import React from 'react'
import { useState } from 'react'
import Post from './Post/Post'

const Feed = ({ users }) => {
    console.log(users)

    return (
        <>
            {users.map((userPost) => (
                <Post key={userPost.id} userPost={userPost} />
            ))}
        </>

    )
}

export default Feed