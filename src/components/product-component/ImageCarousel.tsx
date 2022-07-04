import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { ImageCarouselProp } from "../../types/props"

const ImageCarousel = ({ images }: ImageCarouselProp) => {
    return (
        <Swiper
            pagination={{
                type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}>
            {images.length > 0 && images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image} alt='product image' />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ImageCarousel