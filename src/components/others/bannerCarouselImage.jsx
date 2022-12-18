/*
Name: BannerCarousel
Description: To show banner carousel on top of the web
Properties: 
  slides: string[] (an array of banners)
*/

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

import 'swiper/css'

function BannerCarouselImage({ slides }) {
  return (
    <div className="w-full justify-center">
      <Swiper
        slidesPerView={3}
        spaceBetween={-200}
        pagination={{ clickable: true }}
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="justify-center"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="text-body-sm text-center ml-11 justify-content text-white dark:text-dark_secondary cursor-pointer"
          >
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BannerCarouselImage
