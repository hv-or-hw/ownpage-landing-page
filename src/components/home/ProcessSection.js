import React from "react";
import styled from "styled-components";
import { query } from "../../utils/media-query";
import Wrapper from "../common/Wrapper";

const ProcessSectionBlock = styled.section`
  padding: 120px 0;
  background-image: url(/assets/home/process-bg.png);
  background-size: cover;

  color: #fff;
  text-align: center;

  @media (${query.mobile}) {
    padding: 80px 0;
  }
`;

const UpperTitle = styled.p`
  font-size: 18px;
  margin: 0 0 20px;

  @media (${query.mobile}) {
    margin-bottom: 12px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 0 0 48px;
  word-break: keep-all;
`;

const ProcessList = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (${query.mobile}) {
    flex-direction: column;
  }
`;

const ProcessItem = styled.article`
  & + & {
    display: flex;
    align-items: center;
    margin-left: 20px;

    @media (${query.mobile}) {
      margin-left: 0;
      margin-top: 36px;
    }

    &::before {
      content: "";
      display: block;
      width: 54px;
      height: 22px;
      margin-right: 20px;
      background-image: url(/assets/home/process-arrow.png);

      @media (${query.mobile}) {
        display: none;
      }
    }
  }

  p {
    margin: 0;
    width: 208px;
    height: 208px;
    line-height: 208px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    background-color: #3dc277;
  }
`;

function ProcessSection({ upperTitle, title }) {
  return (
    <ProcessSectionBlock>
      <Wrapper>
        <UpperTitle>{upperTitle}</UpperTitle>
        <Title>{title}</Title>
        <ProcessList>
          <ProcessItem>
            <p>Planning</p>
          </ProcessItem>
          <ProcessItem>
            <p>Design</p>
          </ProcessItem>
          <ProcessItem>
            <p>Develop</p>
          </ProcessItem>
          <ProcessItem>
            <p>Deployment</p>
          </ProcessItem>
        </ProcessList>
      </Wrapper>
    </ProcessSectionBlock>
  );
}

export default ProcessSection;
