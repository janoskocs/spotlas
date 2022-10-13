import React from 'react'
import Map from './Map'
import Comment from './Comment'
import Like from './Like'
import Arrow from './Arrow'

const PostNavigation = () => {
    return (
        <div>
            <Map />
            <Comment />
            <Like />
            <Arrow />
        </div>
    )
}

export default PostNavigation