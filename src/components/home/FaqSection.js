import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { query } from "../../utils/media-query";
import Wrapper from "../common/Wrapper";
import FaqList from "../faq/FaqList";

const FaqSectionBlock = styled.section`
  padding: 120px 0;

  @media (${query.mobile}) {
    padding: 80px 0;
  }
`;

const FaqWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${query.mobile}) {
    flex-direction: column;
  }
`;

const TitleContainer = styled.section`
  width: 100%;

  @media (${query.mobile}) {
    text-align: center;
    margin-bottom: 48px;
  }
`;

const UpperTitle = styled.p`
  font-size: 18px;
  color: #54595f;
  margin: 0 0 12px;
`;

const Title = styled.h1`
  color: #3dc277;
  font-size: 36px;
  margin: 0 0 60px;

  @media (${query.mobile}) {
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

const FaqLink = styled(NavLink)`
  color: #3dc277;
  font-size: 14px;
  text-decoration: none;
  padding-bottom: 4px;
  border-bottom: solid 1px #ededf2;
`;

const FaqContainer = styled.section`
  width: 100%;
  border: solid 1px #ededf2;

  li {
    & > h2 {
      padding: 16px 20px;
      @media (${query.mobile}) {
        font-size: 16px;
      }
    }

    & > p {
      @media (${query.mobile}) {
        padding: 16px 20px;
      }
    }
  }
`;

function FaqSection({ faqList }) {
  return (
    <FaqSectionBlock>
      <FaqWrapper>
        <TitleContainer>
          <UpperTitle>원페이지 관련문의</UpperTitle>
          <Title>
            많은 분들이
            <br />
            궁금해 하세요.
          </Title>
          <FaqLink to="/faq">자주 묻는 질문 더보기</FaqLink>
        </TitleContainer>
        <FaqContainer>
          <FaqList faqList={faqList} />
        </FaqContainer>
      </FaqWrapper>
    </FaqSectionBlock>
  );
}

export default FaqSection;
