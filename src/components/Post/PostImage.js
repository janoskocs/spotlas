import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import User from './User/User'
const PostImage = ({ handleLike, userPostId, media }) => {

    const settings = {
        dots: false,
        infinite: false
    }
    return (
        <Slider {...settings}>
            {media.map((image) => (
                <img onDoubleClick={() => handleLike(userPostId)} key={image.blur_hash} src={image.url} alt="" />
            ))}
        </Slider>
    )

    // return (
    //     <img src={media[0].url} alt="" />
    // )
}
export default PostImage