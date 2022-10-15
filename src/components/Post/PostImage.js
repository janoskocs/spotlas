import React from 'react'

const PostImage = ({ media }) => {
    return media.map((image) => (
        <img className="w-5/12 user-media" key={image.url} src={image.url} alt="User content." />
    ))
}

export default PostImage