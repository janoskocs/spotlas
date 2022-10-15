import React, { useState } from 'react'
import LikeSVG from './LikeSVG'

const Like = ({ likedPosts, handleLike, userPost }) => {
    const [isItLiked, setIsItLiked] = useState(false)

    if (likedPosts.includes(userPost.id)) {
        return (
            <button onClick={() => handleLike(userPost.id)}>
                <LikeSVG color={'#ff0080'} />
            </button>
        )
    } else {
        return (
            <button onClick={() => handleLike(userPost.id)}>
                <LikeSVG color={'black'} />
            </button>
        )
    }

}

export default Like