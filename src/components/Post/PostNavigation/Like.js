import React, { useState } from 'react'
import likeIcon from '../../../assets/Like.svg'

const Like = ({ likedPosts, handleLike, userPost }) => {
    const [isItLiked, setIsItLiked] = useState(false)

    if (likedPosts.includes(userPost.id)) {
        return (
            <button onClick={() => handleLike(userPost.id)}>
                <img className="likedBtn" src={likeIcon} alt="Like" />
            </button>
        )
    } else {
        return (
            <button onClick={() => handleLike(userPost.id)}>
                <img src={likeIcon} alt="Like" />
            </button>
        )
    }

}

export default Like