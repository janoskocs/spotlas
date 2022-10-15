import React from 'react'
import Options from './Options'
import PostImage from './PostImage'
import User from './User/User'
import Location from './Location/Location'
import Save from './Save'
import PostNavigation from './PostNavigation/PostNavigation'
import Caption from './Caption'
import Categories from './Categories'
import PostDate from './PostDate'
const Post = ({ userPost }) => {
    return (
        <div className="post">
            <div className="relative post-media">
                <div className="h-full absolute z-10 flex flex-col justify-between post-image-nav">
                    <div className="flex top-nav">
                        <User username={userPost.author.username} userFullName={userPost.author.full_name} userImage={userPost.author.photo_url} />
                        <Options />
                    </div>
                    <div className="flex bottom-part">
                        <Location spot={userPost.spot} />
                        <Save />
                    </div>
                </div>
                <PostImage className="absolute" media={userPost.media} />
            </div>
            <div className="post-navigation">
                <PostNavigation />
                <Caption username={userPost.author.username} caption={userPost.caption} />
                <Categories />
                <PostDate postDate={userPost.created_at} />
            </div>

        </div>

    )
}

export default Post