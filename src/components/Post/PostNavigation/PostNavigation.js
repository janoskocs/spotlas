import React from 'react'
import Map from './Map'
import Comment from './Comment'
import Like from './Like'
import Arrow from './Arrow'

const PostNavigation = ({ likedPosts, handleLike, userPost }) => {
    return (
        <div className="flex justify-between align-center ml-8 mr-8 md:ml-12 md:mr-12 l:ml-14 l:mr-14">
            <Map />
            <Comment />
            <Like likedPosts={likedPosts} handleLike={handleLike} userPost={userPost} />
            <Arrow />
        </div>
    )
}

export default PostNavigation