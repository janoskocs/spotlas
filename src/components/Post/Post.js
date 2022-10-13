import React from 'react'
import Options from './Options'
import PostImage from './PostImage'
import User from './User/User'
import Location from './Location/Location'
import Save from './Save'
import PostNavigation from './PostNavigation/PostNavigation'
import Caption from './Caption/Caption'
import Categories from './Categories'
import PostDate from './PostDate'
const Post = () => {
    return (
        <div>Inidviual Post
            <User />
            <Options />
            <PostImage />
            <Location />
            <Save />
            <PostNavigation />
            <Caption />
            <Categories />
            <PostDate />
        </div>

    )
}

export default Post