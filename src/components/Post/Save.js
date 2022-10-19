import React from 'react'
import SaveIconSaved from '../../assets/saved.png'
import SaveIcon from '../../assets/Star Border.svg'

const Save = ({ savedPosts, handleSave, userPost }) => {

    if (savedPosts.includes(userPost.id)) {
        return (
            <button className="pointer-events-enabled" onClick={() => handleSave(userPost.id)}><img className="w-8 drop-shadow mx-auto my-0" src={SaveIconSaved} alt="Save Icon" /></button>
        )
    } else {
        return (
            <button className="pointer-events-enabled" onClick={() => handleSave(userPost.id)}><img className="w-8 drop-shadow mx-auto my-0" src={SaveIcon} alt="Save Icon" /></button>
        )
    }
}

export default Save