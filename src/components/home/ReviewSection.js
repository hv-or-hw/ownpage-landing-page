import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { query, size } from "../../utils/media-query";
import Wrapper from "../common/Wrapper";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Navigation, Autoplay } from "swiper/core";

SwiperCore.use([Navigation, Autoplay]);

const ReviewSectionBlock = styled.section`
  padding: 120px 0;

  @media (${query.mobile}) {
    padding: 80px 0 24px;
  }
`;

const ReviewWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  text-align: center;

  @media (${query.mobile}) {
    padding: 0;
  }
`;

const Title = styled.h1`
  margin: 0 0 20px;
  font-size: 32px;
  color: #3dc277;

  @media (${query.mobile}) {
    margin-bottom: 12px;
    font-size: 28px;
    padding: 0 16px;
  }
`;

const Description = styled.p`
  margin: 0 auto 48px;
  font-size: 18px;
  color: #54595f;
  word-break: keep-all;

  @media (${query.mobile}) {
    padding: 0 16px;
  }
`;

const ReviewSwiper = styled(Swiper)`
  width: 100%;
  padding-bottom: calc(28px + 36px);

  @media (${query.mobile}) {
    padding-bottom: calc(20px + 36px);
    .swiper-slide {
      width: 80%;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: auto;
    bottom: 0;

    background: #eee;
    color: black;
    display: block;
    width: 36px;
    height: 36px;
    text-align: center;
    border-radius: 50%;

    &::after {
      font-size: 12px;
      line-height: 36px;
      font-weight: bold;
    }
  }

  .swiper-button-prev {
    left: auto;
    right: 50%;
    transform: translateX(-10px);
  }

  .swiper-button-next {
    left: 50%;
    right: auto;
    transform: translateX(10px);
  }
`;

function ReviewSection({ title, description, children, background = "#fff" }) {
  return (
    <ReviewSectionBlock style={{ backgroundColor: background }}>
      <ReviewWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ReviewSwiper
          slidesPerView="auto"
          centeredSlides={true}
          navigation={true}
          loop={true}
          spaceBetween={16}
          autoplay={{
            delay: 5000,
          }}
          breakpoints={{
            [size.tablet]: {
              slidesPerView: 3,
              centeredSlides: false,
              spaceBetween: 20,
            },
          }}
        >
          {React.Children.map(children, (review, idx) => (
            <SwiperSlide>{review}</SwiperSlide>
          ))}
        </ReviewSwiper>
      </ReviewWrapper>
    </ReviewSectionBlock>
  );
}

export default ReviewSection;
