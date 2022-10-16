import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Heart from "./Heart"
const PostImage = ({ showHeart, handleLike, userPostId, media }) => {

    const settings = {
        dots: false,
        infinite: false
    }
    return (
        <>
            <Heart showHeart={showHeart} />
            <Slider {...settings}>
                {media.map((image) => (
                    <img onDoubleClick={() => handleLike(userPostId)} key={image.blur_hash} src={image.url} alt="" />
                ))}
            </Slider>
        </>

    )

    // return (
    //     <img src={media[0].url} alt="" />
    // )
}
export default PostImage