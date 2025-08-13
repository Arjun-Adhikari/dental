import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Element } from "react-scroll";
export default function realworks() {
  return (
    <Element name="Location" className="section">
      <div className="mb-5">
        <h1 className="font-bold text-3xl">Our Works</h1>
        <div className="max-w-lg mx-auto p-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img src="backgroundimg.jpg" alt="work1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="backgroundimg.jpg" alt="work2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="backgroundimg.jpg" alt="work3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="backgroundimg.jpg" alt="work4" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Element>
  );
}
