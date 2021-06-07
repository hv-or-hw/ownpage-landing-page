import React from "react";
import styled from "styled-components";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import { query } from "../../utils/media-query";

const CarouselBlock = styled(Swiper)`
  height: 880px;

  @media (${query.mobile}) {
    height: 480px;
  }

  .swiper-pagination-bullets {
    bottom: 24px;
    .swiper-pagination-bullet {
      background-color: #fff;
      border-radius: 0;
      width: 44px;
      height: 3px;
    }
  }
`;

SwiperCore.use([Pagination, Autoplay]);

function Carousel({ children }) {
  return (
    <CarouselBlock
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000 }}
    >
      {React.Children.map(children, (component) => (
        <SwiperSlide>{component}</SwiperSlide>
      ))}
    </CarouselBlock>
  );
}

export default Carousel;
