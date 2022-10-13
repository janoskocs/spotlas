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
const Post = ({ userPost }) => {
    return (
        <div>Inidviual Post
            <User username={userPost.author.username} userFullName={userPost.author.full_name} userImage={userPost.author.photo_url} />
            <Options />
            <PostImage media={userPost.media} />
            <Location spot={userPost.spot} />
            <Save />
            <PostNavigation />
            <Caption />
            <Categories />
            <PostDate />
        </div>

    )
}

export default Post