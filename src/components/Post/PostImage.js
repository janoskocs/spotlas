import React from 'react'

const PostImage = ({ media }) => {
    return media.map((image) => (
        <img key={image.url} src={image.url} alt="Image uploaded by the user." />
    ))
}

export default PostImage