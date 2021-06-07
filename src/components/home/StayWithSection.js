import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { query } from "../../utils/media-query";
import Wrapper from "../common/Wrapper";

const StayWithSectionBlock = styled.section`
  background-image: url(/assets/home/stay-with-bg.jpg);
  background-size: cover;
  padding: 67px 0;
  color: #fff;
  text-align: center;

  @media (${query.mobile}) {
    padding: 93px 0;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  margin: 0 0 8px;

  @media (${query.mobile}) {
    font-size: 28px;
    margin-bottom: 12px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  margin: 0 0 36px;
  word-break: keep-all;
`;

const LinkButton = styled(NavLink)`
  display: inline-block;
  padding: 16px 32px;
  border: solid 1px #fff;
  border-radius: 26px;
  text-decoration: none;
  color: #fff;

  @media (${query.mobile}) {
    font-size: 14px;
  }
`;

function StayWithSection({ title, description, linkTo, linkLabel }) {
  return (
    <StayWithSectionBlock>
      <Wrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <LinkButton to={linkTo}>{linkLabel}</LinkButton>
      </Wrapper>
    </StayWithSectionBlock>
  );
}

export default StayWithSection;
