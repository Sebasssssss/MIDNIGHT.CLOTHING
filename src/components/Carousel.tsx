import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css/navigation'
import Card from './Card'

function Carousel() {
  return (
    <Swiper
      loop={true}
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        '320': {
          slidesPerView: 1,
          spaceBetween: 40
        },
        '640': {
          slidesPerView: 2,
          spaceBetween: 40
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 20
        },
        '1000': {
          slidesPerView: 3,
          spaceBetween: 40
        },
        '1250': {
          slidesPerView: 4,
          spaceBetween: 50
        },
        '1420': {
          slidesPerView: 4,
          spaceBetween: 120
        }
      }}
      className="py-16 mx-32 bg-tone4"
    >
      <SwiperSlide>
        <Card img="nike.png" sale={true} />
      </SwiperSlide>
      <SwiperSlide>
        <Card img="nike22.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Card img="nike33.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Card img="nike44.png" sale={true} />
      </SwiperSlide>
      <SwiperSlide>
        <Card img="nike55.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Card img="nike.png" sale={true} />
      </SwiperSlide>
      <SwiperSlide>
        <Card img="nike22.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Card img="nike55.png" />
      </SwiperSlide>
    </Swiper>
  )
}

export default React.memo(Carousel)
