import React from 'react'
import Post from './Post/Post'

const Feed = ({ showHeart, likedPosts, handleLike, users }) => {
    return (
        <>
            {users.map((userPost) => (
                <Post showHeart={showHeart} key={userPost.id} likedPosts={likedPosts} handleLike={handleLike} userPost={userPost} />
            ))}
        </>

    )
}

export default Feed