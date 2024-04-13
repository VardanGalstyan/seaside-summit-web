import { ReactNode } from "react";
import { A11y, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";

const SwiperCarousel = ({ children }: { children: ReactNode }) => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      pagination={{ clickable: true }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination, A11y]}
    >
      {children}
    </Swiper>
  );
};

export default SwiperCarousel;
