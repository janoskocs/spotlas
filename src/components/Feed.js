import React, { useState } from 'react'
import Post from './Post/Post'
import useFetch from './useFetch'
import InfiniteScroll from 'react-infinite-scroll-component'

const Feed = ({ showHeart, likedPosts, savedPosts, handleLike, handleSave, users }) => {

    const url = 'https://dev.api.spotlas.com/interview/feed?page=1'
    const fetchMore = useFetch(url)
    const [scrollData, setScrollData] = useState(users)

    return (
        <>
            <InfiniteScroll
                dataLength={scrollData.length} //This is important field to render the next data
                next={() => {
                    console.log(scrollData)
                    fetchMore.data.map((post) => {
                        setScrollData(current => [...current, post])
                    })
                }}
                hasMore={true}
                loader={<p>Loading...</p>}>

                {scrollData.map((userPost) => (
                    <Post
                        key={userPost.id}
                        showHeart={showHeart}
                        likedPosts={likedPosts}
                        savedPosts={savedPosts}
                        handleLike={handleLike}
                        handleSave={handleSave}
                        userPost={userPost} />
                ))}

            </InfiniteScroll>
        </>

    )
}

export default Feed