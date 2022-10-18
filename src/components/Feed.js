import React, { useState } from 'react'
import Post from './Post/Post'
import useFetch from './useFetch'
import InfiniteScroll from 'react-infinite-scroll-component'

const Feed = ({ showHeart, likedPosts, savedPosts, handleLike, handleSave, users }) => {

    const url = 'https://dev.api.spotlas.com/interview/feed?page=1'
    const fetchMore = useFetch(url)
    const [page, setPage] = useState(1)
    return (
        <>
            <InfiniteScroll
                dataLength={users.length} //This is important field to render the next data
                next={() => {
                    setPage(page + 1)
                    return fetchMore
                }}
                hasMore={true}
                loader={<p>Loading...</p>}>
                {users.map((userPost) => (
                    <Post
                        key={userPost.id}
                        showHeart={showHeart}
                        likedPosts={likedPosts}
                        savedPosts={savedPosts}
                        handleLike={handleLike}
                        handleSave={handleSave}
                        userPost={userPost} />
                ))}
                {page > 1 ?
                    fetchMore.data.map((userPost) => (
                        <Post
                            key={userPost.id}
                            showHeart={showHeart}
                            likedPosts={likedPosts}
                            savedPosts={savedPosts}
                            handleLike={handleLike}
                            handleSave={handleSave}
                            userPost={userPost} />
                    ))

                    : console.log('no fetch')}

            </InfiniteScroll>
        </>

    )
}

export default Feed