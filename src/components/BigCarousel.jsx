import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

function BigCarousel() {
  return (
    <Swiper
      loop={true}
      pagination={{
        dynamicBullets: true
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="my-16 bg-tone1 w-full h-[920px]"
    >
      <SwiperSlide>
        <div className="w-full grid grid-cols-2 place-items-center">
          <div
            style={{ fontFamily: 'MIRAGE' }}
            className="flex flex-col w-max gap-2"
          >
            <h1 className="text-[36px]">Popular product</h1>
            <h1 className="text-[96px]">New Coats</h1>
            <button className="text-[24px] bg-brand px-5 py-3 text-textSecondary inline-flex items-center gap-2 w-max">
              Buy now
            </button>
          </div>
          <div className="w-max h-max">
            <img
              src="../../public/model3.png"
              className="w-[700px] h-[1118px]"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full grid grid-cols-2 place-items-center">
          <div
            style={{ fontFamily: 'MIRAGE' }}
            className="flex flex-col w-max gap-2"
          >
            <h1 className="text-[36px]">Popular product</h1>
            <h1 className="text-[96px]">New Coats</h1>
            <button className="text-[24px] bg-brand px-5 py-3 text-textSecondary inline-flex items-center gap-2 w-max">
              Buy now
            </button>
          </div>
          <div className="w-max h-max">
            <img
              src="../../public/model3.png"
              className="w-[700px] h-[1118px]"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full grid grid-cols-2 place-items-center">
          <div
            style={{ fontFamily: 'MIRAGE' }}
            className="flex flex-col w-max gap-2"
          >
            <h1 className="text-[36px]">Popular product</h1>
            <h1 className="text-[96px]">New Coats</h1>
            <button className="text-[24px] bg-brand px-5 py-3 text-textSecondary inline-flex items-center gap-2 w-max">
              Buy now
            </button>
          </div>
          <div className="w-max h-max">
            <img
              src="../../public/model3.png"
              className="w-[700px] h-[1118px]"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full grid grid-cols-2 place-items-center">
          <div
            style={{ fontFamily: 'MIRAGE' }}
            className="flex flex-col w-max gap-2"
          >
            <h1 className="text-[36px]">Popular product</h1>
            <h1 className="text-[96px]">New Coats</h1>
            <button className="text-[24px] bg-brand px-5 py-3 text-textSecondary inline-flex items-center gap-2 w-max">
              Buy now
            </button>
          </div>
          <div className="w-max h-max">
            <img
              src="../../public/model3.png"
              className="w-[700px] h-[1118px]"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full grid grid-cols-2 place-items-center">
          <div
            style={{ fontFamily: 'MIRAGE' }}
            className="flex flex-col w-max gap-2"
          >
            <h1 className="text-[36px]">Popular product</h1>
            <h1 className="text-[96px]">New Coats</h1>
            <button className="text-[24px] bg-brand px-5 py-3 text-textSecondary inline-flex items-center gap-2 w-max">
              Buy now
            </button>
          </div>
          <div className="w-max h-max">
            <img
              src="../../public/model3.png"
              className="w-[700px] h-[1118px]"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default React.memo(BigCarousel)
