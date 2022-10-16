import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'

const PostDate = ({ postDate }) => {
    TimeAgo.addDefaultLocale(en)

    return <p className="mt-2 mx-2 md:mt-3 l:mt-4" ><ReactTimeAgo date={postDate} locale="en-US" /></p>
}

export default PostDate