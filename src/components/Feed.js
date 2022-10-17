import React from 'react'
import Post from './Post/Post'

const Feed = ({ showHeart, likedPosts, savedPosts, handleLike, handleSave, users }) => {
    return (
        <>
            {users.map((userPost) => (
                <Post
                    key={userPost.id}
                    showHeart={showHeart}
                    likedPosts={likedPosts}
                    savedPosts={savedPosts} handleLike={handleLike} handleSave={handleSave} userPost={userPost} />
            ))}
        </>

    )
}

export default Feed