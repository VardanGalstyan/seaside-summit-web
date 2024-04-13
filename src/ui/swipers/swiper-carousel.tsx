import { ReactNode } from "react";
import { A11y, Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";

const SwiperCarousel = ({
  children,
  slidesPerView = 5,
  loop = false,
  autoplay = false,
  freemode = false,
}: {
  children: ReactNode;
  slidesPerView?: number;
  loop?: boolean;
  autoplay?: boolean;
  freemode?: boolean;
}) => {
  return (
    <Swiper
      loop={loop}
      slidesPerView={slidesPerView}
      spaceBetween={30}
      pagination={{ clickable: true }}
      freeMode={{ enabled: freemode, momentum: false }}
      {...(freemode && { speed: 5000 })}
      {...(autoplay && { autoplay: { delay: 1, disableOnInteraction: true } })}
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
          slidesPerView,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay, FreeMode, Pagination, A11y]}
      onAutoplayStop={(event) =>
        setTimeout(() => {
          event?.autoplay?.start();
        }, 5000)
      }
    >
      {children}
    </Swiper>
  );
};

export default SwiperCarousel;
