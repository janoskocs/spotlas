import LikeSVG from './LikeSVG'
import LikedPng from '../../../assets/liked.png'

const Like = ({ likedPosts, handleLike, userPost }) => {

    if (likedPosts.includes(userPost.id)) {
        return (
            <button onClick={() => handleLike(userPost.id)}>
                <img src={LikedPng} alt="Heart icon" />
            </button>
        )
    } else {
        return (
            <button onClick={() => handleLike(userPost.id)}>
                <LikeSVG color={'black'} />
            </button>
        )
    }

}

export default Like