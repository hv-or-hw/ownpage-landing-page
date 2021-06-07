import React from "react";

import styled from "styled-components";
import Wrapper from "../common/Wrapper";
import { NavLink } from "react-router-dom";
import { query } from "../../utils/media-query";

const SlideBlock = styled.section`
  height: 100%;
  background-size: cover;
  color: #fff;
  background-image: url(assets/home/slide-bg.jpg);
`;

const SlideWrapper = styled(Wrapper)`
  position: relative;
  height: 100%;
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: flex-start;

  @media (${query.mobile}) {
    text-align: center;
    align-items: center;
  }
`;

const SlideH1 = styled.h1`
  margin: 0 0 40px;
  font-weight: normal;
  font-size: 48px;
  line-height: 1.2;
  letter-spacing: -0.5px;

  @media (${query.mobile}) {
    margin: 0 0 12px;
    font-size: 26px;
  }
`;
const SlideH2 = styled.h2`
  margin: 0 0 24px;
  font-weight: normal;
  font-size: 32px;

  @media (${query.mobile}) {
    margin: 0 0 12px;
    font-size: 16px;
  }
`;
const SlideP = styled.p`
  margin: 0 0 36px;
  font-size: 24px;
  line-height: 1.5;

  @media (${query.mobile}) {
    margin: 0 0 48px;
    font-size: 14px;
  }
`;

const SlideButton = styled(NavLink)`
  padding: 16px 24px;
  border-radius: 28px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  background-image: linear-gradient(78deg, #3dc277, #43cdba 100%);
`;

function CarouselSlide() {
  return (
    <SlideBlock>
      <SlideWrapper>
        <SlideContent>
          <SlideH1>
            남들이 홈페이지를 만들 때, <br />
            <strong>우리는 새로운 가치를 만듭니다.</strong>
          </SlideH1>
          <SlideH2>
            어디서나 제시한 랜딩페이지 <strong>아무런 의미 없습니다</strong>
          </SlideH2>
          <SlideP>
            원페이지는 그동안 쌓은 경험과 노하우를 바탕으로
            <br />
            여러분께 새로운 가치를 제공합니다.
          </SlideP>
          <SlideButton to="/contact">원페이지에게 견적문의하기</SlideButton>
        </SlideContent>
      </SlideWrapper>
    </SlideBlock>
  );
}

export default CarouselSlide;
