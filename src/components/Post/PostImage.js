import React from 'react'

const PostImage = ({ media }) => {
    return media.map((image) => (
        <img className="user-media" key={image.url} src={image.url} alt="Image uploaded by the user." />
    ))
}

export default PostImage