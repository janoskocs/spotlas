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
const Post = ({ showHeart, likedPosts, savedPosts, handleLike, handleSave, userPost }) => {

    return (
        <div className="post mt-4 md:mt-6 l:mt-8">
            <div className="relative post-media">
                <div className="h-full absolute z-10 flex flex-col justify-between ml-2 md:ml-3 l:ml-4 mr-4 md:mr-6 l:mr-8 post-image-nav width-100-fix">
                    <div className="flex justify-between mt-2  md:mt-3 l:mt-4 top-nav">
                        <User
                            username={userPost.author.username}
                            usernametextcolor="white"
                            userFullName={userPost.author.full_name}
                            userImage={userPost.author.photo_url}
                        />
                        <Options />
                    </div>
                    <div className="flex justify-between bottom-part mb-2  md:mb-3 l:mb-4">
                        <Location spot={userPost.spot} />
                        <Save
                            savedPosts={savedPosts}
                            handleSave={handleSave}
                            userPost={userPost}
                        />
                    </div>
                </div>
                <PostImage
                    showHeart={showHeart}
                    handleLike={handleLike}
                    userPostId={userPost.id}
                    media={userPost.media}
                />
            </div>
            <div className="post-navigation mt-3 md:mt-4 l:mt-6">
                <PostNavigation
                    likedPosts={likedPosts}
                    userPost={userPost}
                    handleLike={handleLike}
                />
                <Caption
                    username={userPost.author.username}
                    caption={userPost.caption}
                />
                <Categories />
                <PostDate postDate={userPost.created_at} />
            </div>
        </div>
    )
}

export default Post