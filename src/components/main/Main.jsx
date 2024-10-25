import BestSellers from "./BestSellers"
import SelectedProducts from "./SelectedProducts"
import SpecialOffers from "./SpecialOffers"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'  

function Main() {
  
  return (
    <main>
        <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          {/* Daha fazla SwiperSlide ekleyebilirsiniz */}
        </Swiper>
        </div>
        <SelectedProducts />
        <SpecialOffers />
        <BestSellers />
        <div></div>
    </main>
  )
}

export default Main