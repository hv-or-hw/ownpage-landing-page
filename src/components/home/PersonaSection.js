import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { query, size } from "../../utils/media-query";
import Wrapper from "../common/Wrapper";

const PersonaSectionBlock = styled.section`
  padding: 120px 0;

  @media (${query.mobile}) {
    padding: 80px 0;
  }
`;

const PersonaWrapper = styled(Wrapper)`
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
    width: 70%;
    padding: 0 16px;
  }
`;

const PersonaSwiper = styled(Swiper)`
  width: 100%;

  @media (${query.mobile}) {
    .swiper-slide {
      width: 70%;
    }
  }
`;

function PersonaSection({ title, description, children, background = "#fff" }) {
  return (
    <PersonaSectionBlock style={{ backgroundColor: background }}>
      <PersonaWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <PersonaSwiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={16}
          breakpoints={{
            [size.tablet]: {
              slidesPerView: 4,
              centeredSlides: false,
              spaceBetween: 36,
            },
          }}
        >
          {React.Children.map(children, (persona) => (
            <SwiperSlide>{persona}</SwiperSlide>
          ))}
        </PersonaSwiper>
      </PersonaWrapper>
    </PersonaSectionBlock>
  );
}

export default PersonaSection;
