import React from "react";
import styled from "styled-components";
import { query } from "../../utils/media-query";
import Wrapper from "../common/Wrapper";

const IllustSectionBlock = styled.section`
  padding: 120px 0;

  @media (${query.mobile}) {
    padding: 80px 0;
  }
`;

const IllustWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (${query.mobile}) {
    flex-direction: column;
  }
`;

const ContentBlock = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (${query.mobile}) {
    text-align: center;
    align-items: center;
  }

  h1 {
    margin: 0 0 20px;

    font-size: 44px;
    line-height: 1.2;
    color: #3dc277;

    @media (${query.mobile}) {
      margin: 0 0 12px;

      font-size: 28px;
    }
  }

  p {
    margin: 0;
    font-size: 24px;
    color: #868a8f;
    line-height: 1.57;

    @media (${query.mobile}) {
      font-size: 16px;
    }

    strong {
      color: #3dc277;
    }

    &:not(:last-child) {
      margin: 0 0 40px;

      @media (${query.mobile}) {
        margin: 0 0 24px;
      }
    }

    &:last-child {
      @media (${query.mobile}) {
        margin: 0 0 48px;
      }
    }
  }
`;

const IllustImage = styled.img`
  margin-left: 60px;
  width: 520px;

  @media (${query.mobile}) {
    margin-left: 0;
    width: 100%;
  }
`;

function IllustSection({ children, illustSrc, background = "#fff" }) {
  return (
    <IllustSectionBlock style={{ backgroundColor: background }}>
      <IllustWrapper>
        <ContentBlock>{children}</ContentBlock>
        <IllustImage src={illustSrc} alt="Illust" />
      </IllustWrapper>
    </IllustSectionBlock>
  );
}

export default IllustSection;
