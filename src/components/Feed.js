import React from 'react'
import Post from './Post/Post'

const Feed = ({ likedPosts, handleLike, users }) => {
    return (
        <>
            {users.map((userPost) => (
                <Post key={userPost.id} likedPosts={likedPosts} handleLike={handleLike} userPost={userPost} />
            ))}
        </>

    )
}

export default Feed