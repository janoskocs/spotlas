import React from 'react'
import Map from './Map'
import Comment from './Comment'
import Like from './Like'
import Arrow from './Arrow'

const PostNavigation = ({ likedPosts, handleLike, userPost }) => {
    return (
        <div>
            <Map />
            <Comment />
            <Like likedPosts={likedPosts} handleLike={handleLike} userPost={userPost} />
            <Arrow />
        </div>
    )
}

export default PostNavigation